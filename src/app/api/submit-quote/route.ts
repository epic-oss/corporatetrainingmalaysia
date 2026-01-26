import { NextRequest, NextResponse } from 'next/server'

interface QuoteFormData {
  companyName: string
  contactPerson: string
  email: string
  phone: string
  trainingType: string
  participants: string
  budget: string
  hrdfRequired: boolean
  details: string
  preferredProvider: string
}

export async function POST(request: NextRequest) {
  try {
    const body: QuoteFormData = await request.json()

    // Validate required fields
    const requiredFields = ['companyName', 'contactPerson', 'email', 'phone', 'trainingType', 'participants', 'budget']
    for (const field of requiredFields) {
      if (!body[field as keyof QuoteFormData]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Prepare webhook payload
    const webhookPayload = {
      lead_type: 'corporate_training_my',
      timestamp: new Date().toISOString(),
      source: 'CorporateTrainingMY Directory',
      data: {
        company_name: body.companyName,
        contact_person: body.contactPerson,
        email: body.email,
        phone: body.phone,
        training_type: body.trainingType,
        participants: body.participants,
        budget: body.budget,
        hrdf_required: body.hrdfRequired,
        details: body.details || '',
        preferred_provider: body.preferredProvider || 'Not specified',
      }
    }

    // Send to webhook if URL is configured
    const webhookUrl = process.env.WEBHOOK_URL

    if (webhookUrl && webhookUrl !== 'https://hook.make.com/placeholder') {
      try {
        const webhookResponse = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(webhookPayload),
        })

        if (!webhookResponse.ok) {
          console.error('Webhook failed:', await webhookResponse.text())
        }
      } catch (webhookError) {
        console.error('Webhook error:', webhookError)
        // Don't fail the request if webhook fails
      }
    }

    // Log the submission (for development)
    console.log('Quote submission received:', webhookPayload)

    return NextResponse.json(
      {
        success: true,
        message: 'Quote request submitted successfully',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing quote submission:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 })
}
