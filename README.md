# GEO Marketing Platform

A comprehensive AI-powered marketing content generation and optimization platform that implements Generative Engine Optimization (GEO) techniques to create high-performing marketing content.

## 🚀 Features

### Core Capabilities
- **AI-Driven Content Generation**: Create blog posts, ad copy, meta descriptions, and social media content
- **Keyword Research & Clustering**: Discover high-impact keywords with semantic analysis
- **SEO Optimization**: Real-time SEO scoring and optimization suggestions
- **Batch Processing**: Generate multiple pieces of content simultaneously
- **Performance Analytics**: Track content performance and optimization metrics

### AI Model Integration
- **Hugging Face Integration**: Support for GGUF-format models (LLaMA 3, Mistral, CodeLlama)
- **Flexible Model Configuration**: Customizable temperature, tokens, and system prompts
- **Local Model Support**: Run models locally for enhanced privacy and control

### XM Cloud Integration
- **Direct Publishing**: Publish generated content directly to Sitecore XM Cloud
- **Content Synchronization**: Pull existing content for AI-driven re-optimization
- **Automated Workflows**: Set up automated content publishing pipelines

### Advanced Features
- **Semantic Search**: Entity enrichment for improved search relevance
- **Content Editor**: Real-time AI-assisted content editing and suggestions
- **Campaign Management**: Organize content into campaigns with performance tracking
- **Multi-language Support**: Generate content in multiple languages
- **Export Options**: Export content in HTML, Markdown, or directly to CMS

## 🛠 Tech Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Modern UI component library
- **Lucide React**: Beautiful icons

### Backend
- **Next.js API Routes**: Serverless API endpoints
- **AI SDK**: Unified AI model integration
- **PostgreSQL**: Primary database for content and analytics
- **Prisma**: Database ORM (optional)

### AI & ML
- **Hugging Face Transformers**: GGUF model support
- **OpenAI GPT-4**: Fallback AI model
- **Custom Prompt Engineering**: Optimized prompts for marketing content

### Infrastructure
- **Vercel**: Frontend hosting and deployment
- **AWS/GCP**: Backend services and database hosting
- **Docker**: Containerized deployment
- **GitHub Actions**: CI/CD pipeline

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- PostgreSQL 13+
- Hugging Face API key
- XM Cloud instance (optional)

### Quick Start

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/your-org/geo-marketing-platform.git
   cd geo-marketing-platform
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   
   Configure the following variables:
   \`\`\`env
   # Database
   DATABASE_URL="postgresql://user:password@localhost:5432/geo_platform"
   
   # AI Models
   OPENAI_API_KEY="your-openai-key"
   HUGGINGFACE_API_KEY="your-hf-key"
   
   # XM Cloud (Optional)
   XM_CLOUD_URL="https://your-instance.sitecorecloud.io"
   XM_CLOUD_API_KEY="your-xm-cloud-key"
   XM_CLOUD_SITE_ID="your-site-id"
   
   # Security
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   \`\`\`

4. **Initialize the database**
   \`\`\`bash
   npm run db:setup
   \`\`\`

5. **Start the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Hugging Face GGUF Models

1. **Install required dependencies**
   \`\`\`bash
   pip install transformers torch
   \`\`\`

2. **Configure model settings in the platform**
   - Go to Settings → AI Models
   - Enter your Hugging Face API key
   - Select your preferred GGUF model:
     - LLaMA 3 8B/70B
     - Mistral 7B
     - CodeLlama 13B

3. **Local model setup (optional)**
   \`\`\`bash
   # Download GGUF model files
   huggingface-cli download microsoft/DialoGPT-medium --local-dir ./models
   \`\`\`

### XM Cloud Integration

1. **Obtain XM Cloud credentials**
   - Instance URL
   - API Key with content management permissions
   - Site ID

2. **Configure in platform settings**
   - Navigate to Settings → Integrations
   - Enter XM Cloud connection details
   - Test the connection

3. **Set up content templates**
   - Map content types to XM Cloud templates
   - Configure field mappings
   - Enable auto-publishing if desired

## 🚀 Usage

### Content Generation Workflow

1. **Create a Campaign**
   - Navigate to Campaigns
   - Create a new campaign with target keywords
   - Set campaign goals and parameters

2. **Generate Content**
   - Go to Content Generator
   - Select content type (blog post, ad copy, etc.)
   - Enter topic and target keywords
   - Configure tone, audience, and length
   - Click "Generate Content"

3. **Review and Optimize**
   - Review generated content
   - Check SEO score and suggestions
   - Make edits using the AI-assisted editor
   - Optimize based on keyword analysis

4. **Publish**
   - Export content or publish directly to XM Cloud
   - Schedule publication if needed
   - Track performance in Analytics

### Keyword Research

1. **Enter Seed Keywords**
   - Navigate to Keyword Research
   - Enter your primary topic or keyword
   - Click "Research Keywords"

2. **Analyze Opportunities**
   - Review keyword suggestions
   - Sort by volume, difficulty, or opportunity score
   - Filter by competition level
   - Export keyword lists for campaigns

3. **Create Content Strategy**
   - Select high-opportunity keywords
   - Group related keywords into clusters
   - Plan content calendar based on keyword data

## 🧪 Testing

### Run Tests
\`\`\`bash
# Unit tests
npm test

# Integration tests
npm run test:integration

# E2E tests
npm run test:e2e

# Coverage report
npm run test:coverage
\`\`\`

### Test Configuration
- Jest for unit testing
- React Testing Library for component tests
- Playwright for E2E testing
- Coverage reports with Istanbul

## 🚢 Deployment

### Vercel Deployment (Frontend)

1. **Connect to Vercel**
   \`\`\`bash
   npm i -g vercel
   vercel login
   vercel
   \`\`\`

2. **Configure environment variables**
   - Add all required environment variables in Vercel dashboard
   - Set up database connection
   - Configure AI API keys

3. **Deploy**
   \`\`\`bash
   vercel --prod
   \`\`\`

### Docker Deployment

1. **Build Docker image**
   \`\`\`bash
   docker build -t geo-platform .
   \`\`\`

2. **Run container**
   \`\`\`bash
   docker run -p 3000:3000 --env-file .env geo-platform
   \`\`\`

3. **Docker Compose (with database)**
   \`\`\`bash
   docker-compose up -d
   \`\`\`

### AWS/GCP Deployment

1. **Set up infrastructure**
   - Configure ECS/Cloud Run service
   - Set up RDS/Cloud SQL database
   - Configure load balancer and CDN

2. **Deploy using CI/CD**
   - GitHub Actions automatically deploys on push to main
   - Configure secrets in GitHub repository
   - Monitor deployment status

## 📊 Performance & Monitoring

### Analytics Dashboard
- Content performance metrics
- SEO score trends
- Keyword ranking tracking
- User engagement analytics

### Monitoring
- Application performance monitoring
- Error tracking and alerting
- Database performance metrics
- AI model usage and costs

## 🔒 Security

### Data Protection
- API keys encrypted at rest
- Secure database connections
- Content data retention policies
- GDPR compliance features

### Authentication
- NextAuth.js integration
- Role-based access control
- API rate limiting
- Audit logging

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Write tests for new features
- Update documentation
- Follow conventional commit messages

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### Documentation
- [API Documentation](docs/api.md)
- [Integration Guides](docs/integrations/)
- [Troubleshooting](docs/troubleshooting.md)

### Community
- [GitHub Discussions](https://github.com/your-org/geo-platform/discussions)
- [Discord Community](https://discord.gg/geo-platform)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/geo-platform)


**Built with ❤️ by the GEO Platform Team**
