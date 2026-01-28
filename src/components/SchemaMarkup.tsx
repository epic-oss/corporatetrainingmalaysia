interface SchemaMarkupProps {
  schema: Record<string, unknown>
}

export default function SchemaMarkup({ schema }: SchemaMarkupProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Common schema generators
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CorporateTrainingMY',
    description: "Malaysia's directory of corporate training providers. Compare 109+ HRDF-approved trainers across Kuala Lumpur, Selangor, Penang, and Johor.",
    url: 'https://corporatetrainingmalaysia.com',
  }
}

export function generateLocalBusinessListSchema(providers: { name: string; location: string }[], listName: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: listName,
    numberOfItems: providers.length,
    itemListElement: providers.map((provider, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'LocalBusiness',
        name: provider.name,
        address: {
          '@type': 'PostalAddress',
          addressLocality: provider.location,
          addressCountry: 'MY',
        },
      },
    })),
  }
}

export function generateWebApplicationSchema(name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'MYR',
    },
  }
}

export function generateArticleSchema(title: string, description: string, datePublished: string, dateModified: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished,
    dateModified,
    author: {
      '@type': 'Organization',
      name: 'CorporateTrainingMY',
    },
    publisher: {
      '@type': 'Organization',
      name: 'CorporateTrainingMY',
      url: 'https://corporatetrainingmalaysia.com',
    },
  }
}
