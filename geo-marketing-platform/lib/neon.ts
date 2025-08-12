import { neon } from "@neondatabase/serverless"

// Ensure DATABASE_URL is available
const databaseUrl = process.env.DATABASE_URL
if (!databaseUrl) {
  console.warn("DATABASE_URL environment variable is not set. Database operations will fail.")
}

// Create a Neon SQL client with error handling
export const sql = databaseUrl ? neon(databaseUrl) : null

// Database initialization and schema creation
export async function initializeDatabase() {
  if (!sql) {
    throw new Error("Database connection not available. Please set DATABASE_URL environment variable.")
  }

  try {
    // Create users table
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        name VARCHAR(255) NOT NULL,
        password_hash VARCHAR(255),
        avatar_url TEXT,
        subscription_tier VARCHAR(50) DEFAULT 'free',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `

    // Create campaigns table
    await sql`
      CREATE TABLE IF NOT EXISTS campaigns (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        status VARCHAR(50) DEFAULT 'active',
        target_keywords TEXT[],
        industry VARCHAR(100),
        target_audience VARCHAR(100),
        goals TEXT,
        budget DECIMAL(10,2),
        start_date DATE,
        end_date DATE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `

    // Create content table with enhanced fields
    await sql`
      CREATE TABLE IF NOT EXISTS content (
        id SERIAL PRIMARY KEY,
        campaign_id INTEGER REFERENCES campaigns(id) ON DELETE CASCADE,
        title VARCHAR(500) NOT NULL,
        content_type VARCHAR(100) NOT NULL,
        content TEXT NOT NULL,
        meta_description TEXT,
        seo_score INTEGER DEFAULT 0,
        readability_score INTEGER DEFAULT 0,
        status VARCHAR(50) DEFAULT 'draft',
        target_keywords TEXT[],
        tone VARCHAR(100),
        audience VARCHAR(100),
        language VARCHAR(10) DEFAULT 'en',
        word_count INTEGER DEFAULT 0,
        reading_time INTEGER DEFAULT 0,
        ai_model_used VARCHAR(100),
        generation_prompt TEXT,
        optimization_suggestions JSONB,
        performance_metrics JSONB,
        published_url TEXT,
        published_at TIMESTAMP,
        scheduled_for TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `

    // Create keywords table with enhanced tracking
    await sql`
      CREATE TABLE IF NOT EXISTS keywords (
        id SERIAL PRIMARY KEY,
        campaign_id INTEGER REFERENCES campaigns(id) ON DELETE CASCADE,
        keyword VARCHAR(255) NOT NULL,
        search_volume INTEGER DEFAULT 0,
        difficulty INTEGER DEFAULT 0,
        cpc DECIMAL(10,2) DEFAULT 0.00,
        competition VARCHAR(50),
        opportunity_score INTEGER DEFAULT 0,
        trend VARCHAR(20),
        current_ranking INTEGER,
        target_ranking INTEGER,
        search_intent VARCHAR(50),
        related_keywords TEXT[],
        last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(campaign_id, keyword)
      )
    `

    // Create analytics table for performance tracking
    await sql`
      CREATE TABLE IF NOT EXISTS analytics (
        id SERIAL PRIMARY KEY,
        content_id INTEGER REFERENCES content(id) ON DELETE CASCADE,
        metric_name VARCHAR(100) NOT NULL,
        metric_value DECIMAL(10,2) NOT NULL,
        metric_type VARCHAR(50) NOT NULL,
        date_recorded DATE DEFAULT CURRENT_DATE,
        recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `

    // Create AI model settings table
    await sql`
      CREATE TABLE IF NOT EXISTS ai_model_settings (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        model_provider VARCHAR(100) NOT NULL,
        model_name VARCHAR(255) NOT NULL,
        api_key_encrypted TEXT,
        temperature DECIMAL(3,2) DEFAULT 0.7,
        max_tokens INTEGER DEFAULT 2048,
        system_prompt TEXT,
        custom_parameters JSONB,
        is_active BOOLEAN DEFAULT TRUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `

    // Create XM Cloud integration settings
    await sql`
      CREATE TABLE IF NOT EXISTS xm_cloud_settings (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        instance_url VARCHAR(500),
        api_key_encrypted TEXT,
        site_id VARCHAR(255),
        auto_publish BOOLEAN DEFAULT FALSE,
        content_templates JSONB,
        field_mappings JSONB,
        webhook_url TEXT,
        last_sync TIMESTAMP,
        sync_status VARCHAR(50) DEFAULT 'disconnected',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `

    // Create content versions for revision tracking
    await sql`
      CREATE TABLE IF NOT EXISTS content_versions (
        id SERIAL PRIMARY KEY,
        content_id INTEGER REFERENCES content(id) ON DELETE CASCADE,
        version_number INTEGER NOT NULL,
        content_snapshot TEXT NOT NULL,
        seo_score_snapshot INTEGER,
        changes_summary TEXT,
        created_by INTEGER REFERENCES users(id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `

    // Create batch processing jobs
    await sql`
      CREATE TABLE IF NOT EXISTS batch_jobs (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        job_type VARCHAR(100) NOT NULL,
        job_name VARCHAR(255) NOT NULL,
        parameters JSONB NOT NULL,
        status VARCHAR(50) DEFAULT 'pending',
        progress INTEGER DEFAULT 0,
        total_items INTEGER DEFAULT 0,
        completed_items INTEGER DEFAULT 0,
        results JSONB,
        error_message TEXT,
        started_at TIMESTAMP,
        completed_at TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `

    // Create indexes for better performance
    await sql`CREATE INDEX IF NOT EXISTS idx_content_campaign_id ON content(campaign_id)`
    await sql`CREATE INDEX IF NOT EXISTS idx_content_status ON content(status)`
    await sql`CREATE INDEX IF NOT EXISTS idx_content_type ON content(content_type)`
    await sql`CREATE INDEX IF NOT EXISTS idx_keywords_campaign_id ON keywords(campaign_id)`
    await sql`CREATE INDEX IF NOT EXISTS idx_keywords_keyword ON keywords(keyword)`
    await sql`CREATE INDEX IF NOT EXISTS idx_analytics_content_id ON analytics(content_id)`
    await sql`CREATE INDEX IF NOT EXISTS idx_analytics_date ON analytics(date_recorded)`
    await sql`CREATE INDEX IF NOT EXISTS idx_campaigns_user_id ON campaigns(user_id)`
    await sql`CREATE INDEX IF NOT EXISTS idx_campaigns_status ON campaigns(status)`
    await sql`CREATE INDEX IF NOT EXISTS idx_users_email ON users(email)`
    await sql`CREATE INDEX IF NOT EXISTS idx_content_published_at ON content(published_at)`
    await sql`CREATE INDEX IF NOT EXISTS idx_batch_jobs_user_id ON batch_jobs(user_id)`
    await sql`CREATE INDEX IF NOT EXISTS idx_batch_jobs_status ON batch_jobs(status)`

    // Insert sample data
    await insertSampleData()

    console.log("✅ Database initialized successfully with Neon PostgreSQL")
    return { success: true, message: "Database initialized successfully" }
  } catch (error) {
    console.error("❌ Database initialization failed:", error)
    throw error
  }
}

async function insertSampleData() {
  if (!sql) return

  try {
    // Insert sample users
    const users = await sql`
      INSERT INTO users (email, name, subscription_tier) 
      VALUES 
        ('demo@example.com', 'Demo User', 'pro'),
        ('marketer@company.com', 'Marketing Manager', 'enterprise'),
        ('content@agency.com', 'Content Creator', 'free')
      ON CONFLICT (email) DO NOTHING
      RETURNING id, email
    `

    if (users.length > 0) {
      const userId = users[0].id

      // Insert sample campaigns
      await sql`
        INSERT INTO campaigns (user_id, name, description, target_keywords, industry, target_audience, goals) 
        VALUES 
          (${userId}, 'Q1 2024 Content Strategy', 'Comprehensive content marketing campaign for Q1 2024', 
           ARRAY['digital marketing', 'content strategy', 'SEO optimization'], 
           'Technology', 'B2B Decision Makers', 'Increase brand awareness and lead generation'),
          (${userId}, 'Product Launch Campaign', 'Marketing content for new AI-powered product launch',
           ARRAY['AI tools', 'productivity software', 'automation'], 
           'Software', 'Business Professionals', 'Drive product adoption and sales'),
          (${userId}, 'Brand Awareness Initiative', 'Building brand awareness through thought leadership content',
           ARRAY['industry insights', 'thought leadership', 'expertise'], 
           'Consulting', 'Enterprise Clients', 'Establish market authority')
        ON CONFLICT DO NOTHING
      `

      // Insert sample content
      await sql`
        INSERT INTO content (campaign_id, title, content_type, content, seo_score, status, target_keywords, tone, word_count, reading_time)
        VALUES 
          (1, 'The Future of AI in Digital Marketing', 'blog-post', 
           'Artificial Intelligence is revolutionizing digital marketing...', 
           92, 'published', ARRAY['AI marketing', 'digital transformation'], 'professional', 1250, 6),
          (1, 'Summer Sale Campaign Copy', 'ad-copy', 
           'Transform your business this summer with our exclusive offers...', 
           88, 'draft', ARRAY['summer sale', 'business transformation'], 'persuasive', 150, 1),
          (2, 'Product Launch Meta Descriptions', 'meta-description', 
           'Discover the revolutionary AI-powered productivity tool that streamlines workflows...', 
           85, 'optimizing', ARRAY['productivity tool', 'AI software'], 'informative', 160, 1)
        ON CONFLICT DO NOTHING
      `

      // Insert sample keywords
      await sql`
        INSERT INTO keywords (campaign_id, keyword, search_volume, difficulty, cpc, competition, opportunity_score, trend)
        VALUES 
          (1, 'AI marketing tools', 12500, 65, 3.45, 'medium', 85, 'up'),
          (1, 'digital marketing strategy', 8900, 45, 2.80, 'low', 92, 'up'),
          (1, 'content optimization tips', 15600, 35, 1.95, 'low', 88, 'stable'),
          (2, 'productivity software', 6700, 55, 4.20, 'medium', 78, 'up'),
          (2, 'AI automation tools', 4300, 25, 1.60, 'low', 95, 'stable')
        ON CONFLICT (campaign_id, keyword) DO NOTHING
      `
    }

    console.log("✅ Sample data inserted successfully")
  } catch (error) {
    console.error("⚠️ Sample data insertion failed (this is normal if data already exists):", error)
  }
}

// Database utility functions with error handling
export async function getUser(email: string) {
  if (!sql) return null

  try {
    const users = await sql`
      SELECT id, email, name, subscription_tier, created_at 
      FROM users 
      WHERE email = ${email}
    `
    return users[0] || null
  } catch (error) {
    console.error("Error fetching user:", error)
    return null
  }
}

export async function createUser(email: string, name: string, passwordHash?: string) {
  if (!sql) throw new Error("Database not available")

  try {
    const users = await sql`
      INSERT INTO users (email, name, password_hash)
      VALUES (${email}, ${name}, ${passwordHash || null})
      RETURNING id, email, name, subscription_tier, created_at
    `
    return users[0]
  } catch (error) {
    console.error("Error creating user:", error)
    throw error
  }
}

export async function getCampaigns(userId: number) {
  if (!sql) return []

  try {
    return await sql`
      SELECT c.*, 
             COUNT(co.id) as content_count,
             COUNT(k.id) as keyword_count
      FROM campaigns c
      LEFT JOIN content co ON c.id = co.campaign_id
      LEFT JOIN keywords k ON c.id = k.campaign_id
      WHERE c.user_id = ${userId}
      GROUP BY c.id
      ORDER BY c.created_at DESC
    `
  } catch (error) {
    console.error("Error fetching campaigns:", error)
    return []
  }
}

export async function getContent(campaignId: number) {
  if (!sql) return []

  try {
    return await sql`
      SELECT * FROM content 
      WHERE campaign_id = ${campaignId}
      ORDER BY created_at DESC
    `
  } catch (error) {
    console.error("Error fetching content:", error)
    return []
  }
}

export async function saveContent(contentData: any) {
  if (!sql) throw new Error("Database not available")

  try {
    const {
      campaignId,
      title,
      contentType,
      content,
      seoScore,
      targetKeywords,
      tone,
      audience,
      wordCount,
      readingTime,
      aiModel,
      prompt,
    } = contentData

    const result = await sql`
      INSERT INTO content (
        campaign_id, title, content_type, content, seo_score, 
        target_keywords, tone, audience, word_count, reading_time,
        ai_model_used, generation_prompt
      )
      VALUES (
        ${campaignId}, ${title}, ${contentType}, ${content}, ${seoScore},
        ${targetKeywords}, ${tone}, ${audience}, ${wordCount}, ${readingTime},
        ${aiModel}, ${prompt}
      )
      RETURNING *
    `

    return result[0]
  } catch (error) {
    console.error("Error saving content:", error)
    throw error
  }
}

export async function getKeywords(campaignId: number) {
  if (!sql) return []

  try {
    return await sql`
      SELECT * FROM keywords 
      WHERE campaign_id = ${campaignId}
      ORDER BY opportunity_score DESC, search_volume DESC
    `
  } catch (error) {
    console.error("Error fetching keywords:", error)
    return []
  }
}

export async function saveKeywords(campaignId: number, keywords: any[]) {
  if (!sql) throw new Error("Database not available")

  try {
    const results = []

    for (const k of keywords) {
      const result = await sql`
        INSERT INTO keywords (campaign_id, keyword, search_volume, difficulty, cpc, competition, opportunity_score, trend)
        VALUES (${campaignId}, ${k.keyword}, ${k.volume}, ${k.difficulty}, ${k.cpc}, ${k.competition}, ${k.opportunity}, ${k.trend})
        ON CONFLICT (campaign_id, keyword) DO UPDATE SET
          search_volume = EXCLUDED.search_volume,
          difficulty = EXCLUDED.difficulty,
          cpc = EXCLUDED.cpc,
          competition = EXCLUDED.competition,
          opportunity_score = EXCLUDED.opportunity_score,
          trend = EXCLUDED.trend,
          last_updated = CURRENT_TIMESTAMP
        RETURNING *
      `
      results.push(result[0])
    }

    return results
  } catch (error) {
    console.error("Error saving keywords:", error)
    throw error
  }
}

export async function getAnalytics(contentId: number, dateRange?: { start: Date; end: Date }) {
  if (!sql) return []

  try {
    let query = sql`
      SELECT * FROM analytics 
      WHERE content_id = ${contentId}
    `

    if (dateRange) {
      query = sql`
        SELECT * FROM analytics 
        WHERE content_id = ${contentId}
        AND date_recorded BETWEEN ${dateRange.start.toISOString().split("T")[0]} 
        AND ${dateRange.end.toISOString().split("T")[0]}
      `
    }

    return await query.then((results) => results.concat(sql`ORDER BY date_recorded DESC`))
  } catch (error) {
    console.error("Error fetching analytics:", error)
    return []
  }
}

export async function createBatchJob(userId: number, jobType: string, jobName: string, parameters: any) {
  if (!sql) throw new Error("Database not available")

  try {
    const result = await sql`
      INSERT INTO batch_jobs (user_id, job_type, job_name, parameters, total_items)
      VALUES (${userId}, ${jobType}, ${jobName}, ${JSON.stringify(parameters)}, ${parameters.totalItems || 0})
      RETURNING *
    `

    return result[0]
  } catch (error) {
    console.error("Error creating batch job:", error)
    throw error
  }
}

export async function updateBatchJob(jobId: number, updates: any) {
  if (!sql) throw new Error("Database not available")

  try {
    const setClause = Object.keys(updates)
      .map((key) => `${key} = $${Object.keys(updates).indexOf(key) + 2}`)
      .join(", ")

    const values = [jobId, ...Object.values(updates)]

    return await sql`
      UPDATE batch_jobs 
      SET ${sql.unsafe(setClause)}, updated_at = CURRENT_TIMESTAMP
      WHERE id = $1
      RETURNING *
    `.apply(null, values)
  } catch (error) {
    console.error("Error updating batch job:", error)
    throw error
  }
}
