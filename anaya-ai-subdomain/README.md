# Anaya AI - Autonomous AI Sales & Support Platform

This is the dedicated standalone codebase for **Anaya AI** (`anaya.anavyainfotech.com` / `ai.anavyainfotech.com`).

## Architecture & Features
- **Instant Website Crawling & Knowledge Ingestion (RAG)**: Automatically crawls any business website and indexes internal pages.
- **Interactive Chatbot Customizer & Live Simulator**: Real-time preview of chat conversations before going live.
- **One-Click Embed Generator**: Generates clean 1-line script tags for WordPress, Shopify, React, Wix, and custom HTML.
- **Multi-Tenant Lead Capture & Analytics Dashboard**: Isolates each business client's captured contacts and chat analytics.
- **Fast Dual-Provider AI**: Powered by Google Gemini 3.5 Flash and Groq.

## Getting Started Locally
```bash
npm install
npm run dev
```
Local URL: http://localhost:3001

## Subdomain Deployment Configuration
Set the following environment variables on Vercel / Cloudflare for `anaya.anavyainfotech.com`:
```env
NEXT_PUBLIC_API_BASE=https://www.anavyainfotech.com
GEMINI_API_KEY=your_gemini_api_key
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_key
JWT_SECRET=your_jwt_secret
```
