# AEO Analysis & Optimization Platform

A comprehensive Answer Engine Optimization (AEO) platform that analyzes websites and provides AI-powered, actionable code fixes for optimization.

## Features

- **Comprehensive AEO Analysis**: 10 categories of optimization analysis
- **AI-Powered Code Generation**: Production-ready fixes using OpenAI, Claude, and Perplexity
- **Client Management**: PIN-based authentication and multi-client support
- **Implementation Tracking**: Monitor fix implementation and measure impact
- **Google Analytics Integration**: Track AEO performance metrics

## Tech Stack

- **Frontend**: React with TypeScript, Tailwind CSS, Monaco Editor
- **Backend**: Node.js with Express
- **Database**: PostgreSQL
- **AI Integration**: OpenAI, Anthropic Claude, Perplexity APIs
- **Authentication**: PIN-based system with secure hashing

## Quick Start

1. **Setup Environment**:
   ```bash
   cp .env.example .env
   # Add your API keys to .env
   ```

2. **Install Dependencies**:
   ```bash
   npm run setup
   ```

3. **Setup Database**:
   ```bash
   npm run db:migrate
   npm run db:seed
   ```

4. **Start Development**:
   ```bash
   npm run dev
   ```

## Environment Variables

```env
# Database
DATABASE_URL=postgresql://username:password@localhost:5432/aeo_platform

# AI APIs
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
PERPLEXITY_API_KEY=pplx-...

# Google Analytics
GOOGLE_ANALYTICS_CREDENTIALS={"type":"service_account",...}

# Security
JWT_SECRET=your-jwt-secret
ENCRYPTION_KEY=your-encryption-key

# Server
PORT=3001
NODE_ENV=development
```

## Project Structure

```
aeo-platform/
├── client/              # React frontend
├── server/              # Express backend
├── shared/              # Shared TypeScript types
└── database/            # Database migrations and seeds
```

## API Endpoints

### Analysis
- `POST /api/analyze` - Full AEO analysis
- `POST /api/analyze/quick` - Quick scan
- `GET /api/analysis/:id/fixes` - Get all fixes

### AI Generation
- `POST /api/generate/faq` - Generate FAQs
- `POST /api/generate/schema` - Generate schema
- `POST /api/generate/content` - Optimize content

### Client Management
- `POST /api/clients` - Create client
- `POST /api/auth/pin` - PIN authentication
- `GET /api/dashboard/:clientId` - Dashboard data

## Development

- Frontend runs on http://localhost:3000
- Backend runs on http://localhost:3001
- Database runs on localhost:5432

## License

MIT
