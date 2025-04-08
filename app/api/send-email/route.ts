import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, message, to } = await request.json()

    // Log the email data that would be sent
    console.log("Mock email service:")
    console.log("To:", to)
    console.log("From:", email)
    console.log("Name:", name)
    console.log("Message:", message)

    // In a real implementation, this would use nodemailer or another email service
    // Simulate a delay to mimic sending an email
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: "Email would be sent in production. Check console for details.",
    })
  } catch (error) {
    console.error("Error in mock email service:", error)
    return NextResponse.json({ success: false, message: "Failed to process email request" }, { status: 500 })
  }
}

