export interface Provider {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  location: string
  specializations: string[]
  hrdfApproved: boolean
  priceRange: 'budget' | 'mid-range' | 'premium'
  phone: string
  email: string
  website: string
  image: string
  rating: number
  featured: boolean
  industriesServed: string[]
  programs: string[]
  yearEstablished: number
}

export const providers: Provider[] = [
  {
    id: '1',
    slug: 'apex-leadership-academy',
    name: 'Apex Leadership Academy',
    tagline: 'Transforming Leaders, Transforming Organizations',
    description: 'Apex Leadership Academy is Malaysia\'s premier leadership development organization with over 15 years of experience in executive coaching and corporate training. Our programs are designed by industry veterans and certified coaches who understand the unique challenges of Malaysian businesses. We specialize in developing high-potential leaders through experiential learning, 360-degree assessments, and personalized coaching plans. Our clients include Fortune 500 companies and leading Malaysian conglomerates.',
    location: 'Kuala Lumpur',
    specializations: ['Leadership', 'Executive Coaching', 'Change Management'],
    hrdfApproved: true,
    priceRange: 'premium',
    phone: '+60123456789',
    email: 'info@apexleadership.com.my',
    website: 'https://apexleadership.com.my',
    image: '/images/providers/apex-leadership.jpg',
    rating: 4.9,
    featured: true,
    industriesServed: ['Banking & Finance', 'Manufacturing', 'Technology', 'Healthcare'],
    programs: [
      'Executive Leadership Program',
      'First-Time Manager Training',
      'Strategic Thinking Workshop',
      'Change Leadership Masterclass',
      'Women in Leadership'
    ],
    yearEstablished: 2008
  },
  {
    id: '2',
    slug: 'skillsbridge-malaysia',
    name: 'SkillsBridge Malaysia',
    tagline: 'Bridging Skills Gaps, Building Futures',
    description: 'SkillsBridge Malaysia is a comprehensive corporate training provider offering a wide range of professional development programs. With training centers in KL, Penang, and Johor, we serve organizations across the country with customized training solutions. Our team of 50+ certified trainers delivers programs in multiple languages including English, Bahasa Malaysia, and Mandarin. We pride ourselves on our practical, hands-on approach to learning that ensures immediate application in the workplace.',
    location: 'Selangor',
    specializations: ['Sales', 'Customer Service', 'Communication'],
    hrdfApproved: true,
    priceRange: 'mid-range',
    phone: '+60378901234',
    email: 'training@skillsbridge.my',
    website: 'https://skillsbridge.my',
    image: '/images/providers/skillsbridge.jpg',
    rating: 4.7,
    featured: true,
    industriesServed: ['Retail', 'Hospitality', 'Telecommunications', 'FMCG'],
    programs: [
      'Professional Selling Skills',
      'Customer Experience Excellence',
      'Business Communication Mastery',
      'Presentation Skills Workshop',
      'Negotiation Strategies'
    ],
    yearEstablished: 2012
  },
  {
    id: '3',
    slug: 'techpro-training-solutions',
    name: 'TechPro Training Solutions',
    tagline: 'Empowering Digital Transformation',
    description: 'TechPro Training Solutions specializes in technical and IT training for the modern workforce. As a Microsoft Gold Partner and AWS authorized training partner, we deliver cutting-edge technology training that prepares your team for digital transformation. Our instructors are industry practitioners with real-world experience in enterprise technology implementations. We offer both in-person and virtual training options to accommodate diverse learning preferences.',
    location: 'Kuala Lumpur',
    specializations: ['Technical', 'IT', 'Digital Transformation'],
    hrdfApproved: true,
    priceRange: 'premium',
    phone: '+60321234567',
    email: 'learn@techpro.com.my',
    website: 'https://techpro.com.my',
    image: '/images/providers/techpro.jpg',
    rating: 4.8,
    featured: true,
    industriesServed: ['Technology', 'Banking', 'Government', 'E-commerce'],
    programs: [
      'Cloud Computing Fundamentals',
      'Data Analytics & Visualization',
      'Cybersecurity Essentials',
      'Agile & Scrum Certification',
      'Digital Marketing Bootcamp'
    ],
    yearEstablished: 2015
  },
  {
    id: '4',
    slug: 'compliance-first-consultants',
    name: 'Compliance First Consultants',
    tagline: 'Your Partner in Regulatory Excellence',
    description: 'Compliance First Consultants is the leading compliance training provider in Malaysia, helping organizations navigate complex regulatory requirements. Our team includes former regulators, legal professionals, and industry compliance officers who bring real-world expertise to every training session. We specialize in anti-money laundering, anti-corruption, data protection (PDPA), and industry-specific compliance requirements. All our programs are updated regularly to reflect the latest regulatory changes.',
    location: 'Kuala Lumpur',
    specializations: ['Compliance', 'Anti-Corruption', 'PDPA'],
    hrdfApproved: true,
    priceRange: 'premium',
    phone: '+60326789012',
    email: 'training@compliancefirst.my',
    website: 'https://compliancefirst.my',
    image: '/images/providers/compliance-first.jpg',
    rating: 4.9,
    featured: false,
    industriesServed: ['Banking', 'Insurance', 'Healthcare', 'Government', 'Listed Companies'],
    programs: [
      'Anti-Money Laundering (AML) Training',
      'Anti-Bribery & Corruption Workshop',
      'PDPA Compliance Training',
      'Corporate Governance Essentials',
      'Whistleblower Policy Training'
    ],
    yearEstablished: 2010
  },
  {
    id: '5',
    slug: 'team-dynamics-adventures',
    name: 'Team Dynamics Adventures',
    tagline: 'Building Stronger Teams Through Experience',
    description: 'Team Dynamics Adventures creates memorable team building experiences that foster collaboration, trust, and communication. With outdoor facilities in Cameron Highlands, Port Dickson, and Langkawi, we offer a range of adventure-based and indoor team building programs. Our facilitators are certified in experiential learning methodologies and customize every program to address your team\'s specific challenges and objectives. From half-day workshops to multi-day retreats, we design experiences that create lasting impact.',
    location: 'Selangor',
    specializations: ['Team Building', 'Outdoor Training', 'Employee Engagement'],
    hrdfApproved: false,
    priceRange: 'mid-range',
    phone: '+60341234567',
    email: 'adventures@teamdynamics.my',
    website: 'https://teamdynamics.my',
    image: '/images/providers/team-dynamics.jpg',
    rating: 4.6,
    featured: true,
    industriesServed: ['All Industries'],
    programs: [
      'Amazing Race Team Challenge',
      'Survival Camp Leadership',
      'Indoor Team Building Games',
      'Virtual Team Building',
      'Corporate Retreat Planning'
    ],
    yearEstablished: 2014
  },
  {
    id: '6',
    slug: 'penang-skills-development',
    name: 'Penang Skills Development Centre',
    tagline: 'Northern Region\'s Training Excellence Hub',
    description: 'Penang Skills Development Centre (PSDC) has been serving the manufacturing and industrial sectors of Northern Malaysia for over two decades. As a non-profit organization, we are committed to workforce development and skills upgrading for the region\'s industries. Our state-of-the-art training facility in Bayan Lepas offers programs in technical skills, soft skills, and management development. We work closely with multinational corporations and SMEs to develop customized training solutions.',
    location: 'Penang',
    specializations: ['Technical', 'Manufacturing', 'Quality Management'],
    hrdfApproved: true,
    priceRange: 'budget',
    phone: '+60456789012',
    email: 'training@psdc.org.my',
    website: 'https://psdc.org.my',
    image: '/images/providers/psdc.jpg',
    rating: 4.5,
    featured: false,
    industriesServed: ['Manufacturing', 'Electronics', 'Semiconductor', 'Aerospace'],
    programs: [
      'Lean Manufacturing Workshop',
      'Six Sigma Green Belt',
      'Quality Management Systems',
      'Industrial Safety Training',
      'Supervisory Skills Development'
    ],
    yearEstablished: 1998
  },
  {
    id: '7',
    slug: 'southern-corporate-training',
    name: 'Southern Corporate Training',
    tagline: 'Johor\'s Premier Training Partner',
    description: 'Southern Corporate Training is the leading corporate training provider in Johor Bahru and the southern region of Malaysia. We understand the unique needs of businesses operating in the Iskandar Malaysia economic zone and bordering Singapore. Our bilingual trainers deliver programs in English and Mandarin, catering to the diverse workforce in the region. We specialize in cross-cultural communication, sales excellence, and leadership development for regional businesses.',
    location: 'Johor',
    specializations: ['Sales', 'Leadership', 'Cross-Cultural Communication'],
    hrdfApproved: true,
    priceRange: 'mid-range',
    phone: '+60712345678',
    email: 'info@southerntraining.my',
    website: 'https://southerntraining.my',
    image: '/images/providers/southern-training.jpg',
    rating: 4.4,
    featured: false,
    industriesServed: ['Logistics', 'Manufacturing', 'Retail', 'Property Development'],
    programs: [
      'Cross-Cultural Business Communication',
      'Sales Excellence Program',
      'Leadership for New Managers',
      'Customer Service Excellence',
      'Business Mandarin'
    ],
    yearEstablished: 2011
  },
  {
    id: '8',
    slug: 'mindshift-learning',
    name: 'MindShift Learning',
    tagline: 'Transforming Mindsets, Elevating Performance',
    description: 'MindShift Learning specializes in soft skills training and personal development programs that transform workplace culture. Our approach combines psychology-based learning with practical business applications. We are known for our engaging, interactive training style that keeps participants motivated and ensures high learning retention. Our flagship programs in emotional intelligence, stress management, and effective communication have helped thousands of Malaysian professionals excel in their careers.',
    location: 'Kuala Lumpur',
    specializations: ['Soft Skills', 'Emotional Intelligence', 'Personal Development'],
    hrdfApproved: true,
    priceRange: 'mid-range',
    phone: '+60398765432',
    email: 'hello@mindshiftlearning.my',
    website: 'https://mindshiftlearning.my',
    image: '/images/providers/mindshift.jpg',
    rating: 4.7,
    featured: true,
    industriesServed: ['All Industries'],
    programs: [
      'Emotional Intelligence at Work',
      'Stress Management & Resilience',
      'Effective Communication Skills',
      'Time Management Mastery',
      'Conflict Resolution Workshop'
    ],
    yearEstablished: 2016
  },
  {
    id: '9',
    slug: 'perak-business-academy',
    name: 'Perak Business Academy',
    tagline: 'Developing Perak\'s Business Leaders',
    description: 'Perak Business Academy is committed to developing the business community in Perak and the northern corridor of Malaysia. Based in Ipoh, we provide accessible, affordable training solutions for SMEs and local enterprises. Our trainers are local business leaders and professionals who understand the regional business landscape. We focus on practical, immediately applicable skills that help businesses grow and compete effectively.',
    location: 'Perak',
    specializations: ['Business Development', 'SME Training', 'Entrepreneurship'],
    hrdfApproved: true,
    priceRange: 'budget',
    phone: '+60512345678',
    email: 'info@perakbusinessacademy.my',
    website: 'https://perakbusinessacademy.my',
    image: '/images/providers/perak-academy.jpg',
    rating: 4.3,
    featured: false,
    industriesServed: ['SME', 'Retail', 'F&B', 'Tourism'],
    programs: [
      'Business Planning Workshop',
      'Financial Management for SMEs',
      'Digital Marketing Basics',
      'Customer Service Fundamentals',
      'Entrepreneurship Bootcamp'
    ],
    yearEstablished: 2013
  },
  {
    id: '10',
    slug: 'melaka-heritage-training',
    name: 'Melaka Heritage Training Centre',
    tagline: 'Preserving Heritage, Building Skills',
    description: 'Melaka Heritage Training Centre combines the rich cultural heritage of Melaka with modern training methodologies. Specializing in hospitality, tourism, and customer service training, we prepare the workforce for the thriving tourism industry in the historical state. Our unique training venue in a restored heritage building provides an inspiring learning environment. We also offer cultural sensitivity and heritage interpretation training for tourism operators.',
    location: 'Melaka',
    specializations: ['Hospitality', 'Tourism', 'Customer Service'],
    hrdfApproved: false,
    priceRange: 'budget',
    phone: '+60612345678',
    email: 'training@melakaheritage.my',
    website: 'https://melakaheritage.my',
    image: '/images/providers/melaka-heritage.jpg',
    rating: 4.2,
    featured: false,
    industriesServed: ['Hospitality', 'Tourism', 'F&B', 'Retail'],
    programs: [
      'Hospitality Excellence Program',
      'Tourism Guide Certification',
      'F&B Service Standards',
      'Cultural Sensitivity Training',
      'Heritage Interpretation Skills'
    ],
    yearEstablished: 2017
  }
]

export function getProviderBySlug(slug: string): Provider | undefined {
  return providers.find(p => p.slug === slug)
}

export function getProvidersByLocation(location: string): Provider[] {
  return providers.filter(p => p.location.toLowerCase() === location.toLowerCase())
}

export function getProvidersBySpecialization(specialization: string): Provider[] {
  return providers.filter(p =>
    p.specializations.some(s => s.toLowerCase().includes(specialization.toLowerCase()))
  )
}

export function getHRDFApprovedProviders(): Provider[] {
  return providers.filter(p => p.hrdfApproved)
}

export function getFeaturedProviders(): Provider[] {
  return providers.filter(p => p.featured)
}

export function filterProviders(options: {
  location?: string
  specialization?: string
  hrdfApproved?: boolean
  priceRange?: string
}): Provider[] {
  let filtered = [...providers]

  if (options.location && options.location !== 'all') {
    filtered = filtered.filter(p => p.location.toLowerCase() === options.location!.toLowerCase())
  }

  if (options.specialization && options.specialization !== 'all') {
    filtered = filtered.filter(p =>
      p.specializations.some(s => s.toLowerCase().includes(options.specialization!.toLowerCase()))
    )
  }

  if (options.hrdfApproved) {
    filtered = filtered.filter(p => p.hrdfApproved)
  }

  if (options.priceRange && options.priceRange !== 'all') {
    filtered = filtered.filter(p => p.priceRange === options.priceRange)
  }

  return filtered
}
