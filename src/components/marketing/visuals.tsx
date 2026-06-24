import { ArrowRight, CheckCircle2, CircleDot, FileCheck2, GitBranch, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { frameworks, processSteps, traceabilityNodes } from "@/lib/site-data";

function polarToCartesian(center: number, radius: number, angleInDegrees: number) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180;
  return {
    x: center + radius * Math.cos(angleInRadians),
    y: center + radius * Math.sin(angleInRadians),
  };
}

function describeArc(
  center: number,
  innerRadius: number,
  outerRadius: number,
  startAngle: number,
  endAngle: number
) {
  const startOuter = polarToCartesian(center, outerRadius, endAngle);
  const endOuter = polarToCartesian(center, outerRadius, startAngle);
  const startInner = polarToCartesian(center, innerRadius, startAngle);
  const endInner = polarToCartesian(center, innerRadius, endAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    "M",
    startOuter.x,
    startOuter.y,
    "A",
    outerRadius,
    outerRadius,
    0,
    largeArcFlag,
    0,
    endOuter.x,
    endOuter.y,
    "L",
    startInner.x,
    startInner.y,
    "A",
    innerRadius,
    innerRadius,
    0,
    largeArcFlag,
    1,
    endInner.x,
    endInner.y,
    "Z",
  ].join(" ");
}

export function ComplianceLifecycleWheel() {
  const center = 240;
  const innerRadius = 105;
  const outerRadius = 198;
  const segmentGap = 2;
  const segmentAngle = 360 / processSteps.length;
  const segmentFills = [
    "fill-primary/70",
    "fill-sky-400/66",
    "fill-emerald-400/66",
    "fill-amber-300/70",
    "fill-indigo-400/66",
    "fill-rose-400/64",
  ];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-xl rounded-md border border-border/80 bg-card p-4 shadow-2xl shadow-primary/10">
      <svg
        className="h-full w-full overflow-visible"
        viewBox="0 0 480 480"
        role="img"
        aria-label="COMPLY compliance lifecycle wheel with six visible segments"
      >
        <defs>
          <filter id="wheel-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="12" stdDeviation="10" floodOpacity="0.18" />
          </filter>
        </defs>
        <circle
          cx={center}
          cy={center}
          r={outerRadius + 12}
          className="fill-background stroke-border"
          strokeWidth="1"
        />
        <circle
          cx={center}
          cy={center}
          r={innerRadius - 18}
          className="fill-background stroke-primary/25"
          strokeWidth="1.5"
        />
        <circle
          cx={center}
          cy={center}
          r={outerRadius + 2}
          className="fill-none stroke-border"
          strokeWidth="1.5"
        />
        <circle
          cx={center}
          cy={center}
          r={innerRadius}
          className="fill-none stroke-border"
          strokeWidth="1.5"
        />

      {processSteps.map((step, index) => {
          const startAngle = index * segmentAngle + segmentGap;
          const endAngle = (index + 1) * segmentAngle - segmentGap;
          const midAngle = startAngle + (endAngle - startAngle) / 2;
          const iconPoint = polarToCartesian(center, 151, midAngle);
          const labelPoint = polarToCartesian(center, 226, midAngle);
          const path = describeArc(center, innerRadius, outerRadius, startAngle, endAngle);
          const Icon = step.icon;

        return (
            <g key={step.title} filter="url(#wheel-shadow)">
              <path
                d={path}
                className={`${segmentFills[index]} stroke-background transition hover:fill-primary/35`}
                strokeWidth="5"
              />
              <circle
                cx={iconPoint.x}
                cy={iconPoint.y}
                r="24"
                className="fill-background stroke-border"
                strokeWidth="1.5"
              />
              <foreignObject x={iconPoint.x - 12} y={iconPoint.y - 12} width="24" height="24">
                <Icon className="h-6 w-6 text-primary" />
              </foreignObject>
              <foreignObject
                x={labelPoint.x - 54}
                y={labelPoint.y - 18}
                width="108"
                height="36"
              >
                <div className="flex h-full items-center justify-center rounded-md border border-border bg-background/95 px-2 text-center text-xs font-semibold shadow-sm">
                  {step.title}
                </div>
              </foreignObject>
            </g>
        );
      })}

        <foreignObject x="162" y="162" width="156" height="156">
          <div className="flex h-full flex-col items-center justify-center rounded-full border border-primary/30 bg-background text-center shadow-lg">
            <ShieldCheck className="mb-2 h-8 w-8 text-primary" />
            <p className="text-sm font-semibold leading-5">Continuous Compliance</p>
            <p className="mt-1 px-5 text-[10px] leading-4 text-muted-foreground">
              Governed. Evidenced. Improved.
            </p>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
}

export function TraceabilityFlow() {
  return (
    <Card className="overflow-hidden border-border/80 bg-card/80">
      <CardContent className="p-6">
        <div className="mb-5 flex items-center gap-3">
          <GitBranch className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">Requirement to Audit-Ready Output</h3>
        </div>
        <div className="grid auto-rows-fr gap-3 md:grid-cols-5">
          {traceabilityNodes.map((node, index) => (
            <div key={node.title} className="relative h-full">
              <div className="flex h-full min-h-72 flex-col rounded-md border border-border bg-background p-4">
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-0.5 rounded-md font-mono">
                    0{index + 1}
                  </Badge>
                  <div>
                    <p className="font-semibold leading-6">{node.title}</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {node.description}
                    </p>
                  </div>
                </div>
              </div>
              {index < traceabilityNodes.length - 1 ? (
                <ArrowRight className="absolute -right-5 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-primary md:block" />
              ) : null}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function FrameworkMatrix() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {frameworks.map((framework, index) => (
        <div
          key={framework}
          className="group rounded-md border border-border bg-card p-4 transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
        >
          <div className="mb-5 flex items-center justify-between">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
              <FileCheck2 className="h-5 w-5" />
            </span>
            <span className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
          </div>
          <p className="text-sm font-semibold">{framework}</p>
        </div>
      ))}
    </div>
  );
}

export function GovernanceModel() {
  const tiers = [
    {
      title: "Framework and control library",
      detail: "Frameworks, local controls, categories, mapping rationale, applicability, and guidance.",
    },
    {
      title: "Audit criteria and evidence",
      detail: "Criteria, compliance artifacts, client evidence, and document-to-control relationships.",
    },
    {
      title: "Client engagement governance",
      detail: "Clients, engagements, assessment scope, frameworks, assessment assets, and ownership.",
    },
    {
      title: "Risk treatment oversight",
      detail: "Assets, vulnerabilities, threats, evaluations, treatments, review state, and treatment controls.",
    },
    {
      title: "Management reporting",
      detail: "Risk register, asset register, SoA, audit criteria, mappings, engagement, and artifact reports.",
    },
  ];

  return (
    <div className="rounded-md border border-border bg-card p-6">
      <div className="grid gap-3">
        {tiers.map((tier, index) => (
          <div
            key={tier.title}
            className="grid gap-4 rounded-md border border-border bg-background p-4 md:grid-cols-[auto_1fr_minmax(10rem,18rem)] md:items-center"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 font-mono text-xs font-semibold text-primary">
              {index + 1}
            </span>
            <div className="h-2 flex-1 rounded-full bg-muted">
              <div
                className="h-2 rounded-full bg-primary"
                style={{ width: `${100 - index * 12}%` }}
              />
            </div>
            <div>
              <p className="text-sm font-semibold">{tier.title}</p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">{tier.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AuditReadinessJourney() {
  const stages = ["Scope", "Map", "Validate", "Package", "Support"];

  return (
    <div className="grid gap-3 md:grid-cols-5">
      {stages.map((stage, index) => (
        <div key={stage} className="rounded-md border border-border bg-card p-4">
          <CircleDot className="mb-4 h-5 w-5 text-primary" />
          <p className="font-semibold">{stage}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            {index === 0 && "Define frameworks, controls, owners, and audit boundaries."}
            {index === 1 && "Connect requirements to unified controls and evidence needs."}
            {index === 2 && "Review control operation and evidence quality."}
            {index === 3 && "Assemble reusable, audit-aligned evidence packages."}
            {index === 4 && "Support inquiry response and conclusion traceability."}
          </p>
        </div>
      ))}
    </div>
  );
}

export function RiskEvidenceWorkflow() {
  const items = [
    {
      title: "Asset",
      detail: "Assessment assets, categories, subcategories, and asset classes establish business context.",
    },
    {
      title: "Vulnerability",
      detail: "Known weaknesses are linked to assets and used to structure exposure analysis.",
    },
    {
      title: "Threat",
      detail: "Threat scenarios connect to vulnerabilities so risk is grounded in credible events.",
    },
    {
      title: "Evaluation",
      detail: "Likelihood, impact, risk level, owner, acceptance, review, and status are recorded.",
    },
    {
      title: "Treatment",
      detail: "Reduce, accept, avoid, or transfer decisions become accountable treatment records.",
    },
    {
      title: "Control",
      detail: "Treatment controls link risk decisions back to the control library and evidence model.",
    },
  ];

  return (
    <div className="rounded-md border border-border bg-card p-6">
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-6">
        {items.map((item, index) => (
          <div key={item.title} className="relative flex gap-3 rounded-md border border-border bg-background p-4 lg:block">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div className="mt-0 lg:mt-4">
              <p className="font-semibold">{item.title}</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.detail}</p>
            </div>
            {index < items.length - 1 ? (
              <ArrowRight className="absolute -right-5 top-8 z-10 hidden h-5 w-5 text-primary lg:block" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
