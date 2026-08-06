# COMPLY Website

Production marketing website for COMPLY, built with Next.js and deployed on Vercel.

## Local Development

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Quality Gates

Run these before merging or deploying:

```bash
npm run lint
npm run build
```

GitHub Actions runs the same checks on pull requests and pushes to `main`.

## Production Deployment

Vercel project: `comply-website`

Production domain: `https://mycomply.ai`

Current production deployment flow:

```bash
vercel pull --yes --environment production
vercel build --prod
vercel deploy --prebuilt --prod
```

After the GitHub repository is connected to Vercel, pushes to `main` should create production deployments through Vercel Git integration, and pull requests should create preview deployments.

## DNS

The domain is registered at GoDaddy and attached to the Vercel project. Configure GoDaddy DNS so Vercel can serve the site:

```txt
Type  Name  Value
A     @     76.76.21.21
A     www   76.76.21.21
```

Alternatively, change the domain nameservers at GoDaddy to:

```txt
ns1.vercel-dns.com
ns2.vercel-dns.com
```

Once DNS changes propagate, verify:

```bash
curl -I https://mycomply.ai
curl https://mycomply.ai/robots.txt
curl https://mycomply.ai/sitemap.xml
```
