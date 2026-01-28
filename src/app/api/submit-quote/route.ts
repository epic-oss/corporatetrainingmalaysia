import { NextRequest, NextResponse } from 'next/server'

interface QuoteFormData {
  // Contact info
  companyName: string
  contactPerson: string
  email: string
  phone: string
  // Training details
  trainingType: string
  numberOfParticipants: string
  budgetRange: string
  hrdfRequired: boolean
  trainingDetails: string
  preferredProvider: string
  // Hidden tracking fields
  source: string
  device: string
  referrer: string
  utmSource: string
  utmMedium: string
  utmCampaign: string
  submittedAt: string
  pageUrl: string
}

export async function POST(request: NextRequest) {
  try {
    const body: QuoteFormData = await request.json()

    // Validate required fields - check for both existence and non-empty strings
    const requiredFields = ['companyName', 'contactPerson', 'email', 'phone', 'trainingType', 'numberOfParticipants', 'budgetRange']
    for (const field of requiredFields) {
      const value = body[field as keyof QuoteFormData]
      if (!value || (typeof value === 'string' && value.trim() === '')) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Basic spam check - reject if company name or contact is too short
    if (body.companyName.trim().length < 2 || body.contactPerson.trim().length < 2) {
      return NextResponse.json(
        { error: 'Invalid submission' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Prepare webhook payload with all fields including tracking
    const webhookPayload = {
      lead_type: 'corporate_training_my',
      timestamp: body.submittedAt || new Date().toISOString(),
      source: 'CorporateTrainingMY Directory',
      data: {
        // Contact info
        company_name: body.companyName,
        contact_person: body.contactPerson,
        email: body.email,
        phone: body.phone,
        // Training details
        training_type: body.trainingType,
        number_of_participants: body.numberOfParticipants,
        budget_range: body.budgetRange,
        hrdf_required: body.hrdfRequired,
        training_details: body.trainingDetails || '',
        preferred_provider: body.preferredProvider || 'Not specified',
      },
      tracking: {
        source_page: body.source || '',
        device: body.device || '',
        referrer: body.referrer || 'direct',
        utm_source: body.utmSource || '',
        utm_medium: body.utmMedium || '',
        utm_campaign: body.utmCampaign || '',
        page_url: body.pageUrl || '',
      }
    }

    // Send to Make.com webhook
    const webhookUrl = 'https://hook.us2.make.com/tnhws7oviers9q1gp2uh4rhffluikksx'

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
