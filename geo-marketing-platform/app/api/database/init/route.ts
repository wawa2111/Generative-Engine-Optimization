import { NextResponse } from "next/server"
import { initializeDatabase } from "@/lib/neon"

export async function POST() {
  try {
    const result = await initializeDatabase()
    return NextResponse.json(result)
  } catch (error) {
    console.error("Database initialization error:", error)
    return NextResponse.json({ success: false, error: "Failed to initialize database" }, { status: 500 })
  }
}

export async function GET() {
  try {
    // Check database connection
    const { sql } = await import("@/lib/neon")
    const result = await sql`SELECT NOW() as current_time, version() as postgres_version`

    return NextResponse.json({
      success: true,
      message: "Database connection successful",
      data: result[0],
    })
  } catch (error) {
    console.error("Database connection error:", error)
    return NextResponse.json({ success: false, error: "Database connection failed" }, { status: 500 })
  }
}
