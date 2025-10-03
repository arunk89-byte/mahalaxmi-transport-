import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    // In real implementation, send email, store in DB, or notify via webhook.
    console.log("[v0] Contact inquiry received:", body)
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.log("[v0] Error in contact route:", (err as Error).message)
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}
