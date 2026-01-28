// Content configuration for category pages
// Edit this file to update category page content without touching code

export interface CategoryContent {
  name: string
  dbValue: string // Value used to query Supabase specializations array
  metaTitle: string
  metaDescription: string
  heading: string
  intro: string
  benefits: string[]
  targetAudience: string
  faqs: Array<{ question: string; answer: string }>
}

export const categories: Record<string, CategoryContent> = {
  'leadership-training': {
    name: 'Leadership Training',
    dbValue: 'Leadership',
    metaTitle: 'Leadership Training Malaysia | Top Providers {{year}}',
    metaDescription: 'Find HRDF-approved leadership training providers in Malaysia. Develop effective leaders with executive coaching and management programs.',
    heading: 'Leadership Training Providers in Malaysia ({{year}})',
    intro: 'Develop effective leaders who can inspire teams, drive results, and navigate change. Malaysia\'s top leadership training providers offer programs ranging from emerging leader development to executive coaching for C-suite professionals.',
    benefits: [
      'Strategic thinking and decision-making skills',
      'Team motivation and employee engagement',
      'Change management and adaptability',
      'Conflict resolution and negotiation',
      'Executive presence and communication',
    ],
    targetAudience: 'Managers, senior executives, high-potential employees being groomed for leadership roles, and entrepreneurs looking to scale their businesses.',
    faqs: [
      {
        question: 'What is covered in leadership training programs?',
        answer: 'Leadership training typically covers strategic thinking, communication, team management, decision-making, emotional intelligence, and change management. Programs are customized based on leadership level and industry.',
      },
      {
        question: 'How long are leadership training programs?',
        answer: 'Leadership programs range from 1-day workshops to multi-month executive development programs. Most corporate workshops are 2-3 days, while comprehensive leadership journeys may span 6-12 months.',
      },
      {
        question: 'Are leadership training programs HRDF claimable?',
        answer: 'Yes, most leadership training programs from registered providers are HRDF claimable. Check with your provider for specific program eligibility.',
      },
      {
        question: 'What\'s the difference between leadership and management training?',
        answer: 'Leadership training focuses on vision, inspiration, and strategic direction, while management training emphasizes operational efficiency, processes, and team coordination. Many programs combine both elements.',
      },
    ],
  },
  'management-training': {
    name: 'Management Training',
    dbValue: 'Management',
    metaTitle: 'Management Training Malaysia | Top Providers {{year}}',
    metaDescription: 'Find HRDF-approved management training providers in Malaysia. Build effective managers with practical skills programs.',
    heading: 'Management Training Providers in Malaysia ({{year}})',
    intro: 'Build competent managers who can effectively lead teams, optimize operations, and deliver results. Management training programs equip supervisors and middle managers with practical skills for day-to-day leadership challenges.',
    benefits: [
      'Performance management and feedback',
      'Time and priority management',
      'Delegation and empowerment skills',
      'Problem-solving and decision-making',
      'Team building and collaboration',
    ],
    targetAudience: 'First-time managers, supervisors, team leads, and middle managers looking to enhance their management capabilities.',
    faqs: [
      {
        question: 'What skills do management training programs develop?',
        answer: 'Management training develops skills in performance management, delegation, time management, team coordination, problem-solving, and effective communication with direct reports.',
      },
      {
        question: 'Is management training suitable for new managers?',
        answer: 'Yes, many programs are specifically designed for first-time managers transitioning from individual contributor roles. These cover fundamental management skills and common challenges.',
      },
      {
        question: 'How do I choose between leadership and management training?',
        answer: 'Choose management training for operational skills and day-to-day team management. Choose leadership training for strategic thinking and organizational influence. Many professionals benefit from both.',
      },
      {
        question: 'Can management training be conducted in-house?',
        answer: 'Yes, most providers offer in-house management training customized to your company culture, policies, and specific challenges.',
      },
    ],
  },
  'sales-training': {
    name: 'Sales Training',
    dbValue: 'Sales Training',
    metaTitle: 'Sales Training Malaysia | Top Providers {{year}}',
    metaDescription: 'Find HRDF-approved sales training providers in Malaysia. Boost your sales team\'s performance with proven techniques.',
    heading: 'Sales Training Providers in Malaysia ({{year}})',
    intro: 'Supercharge your sales team\'s performance with proven techniques and methodologies. From consultative selling to key account management, Malaysia\'s sales trainers help teams close more deals and build lasting customer relationships.',
    benefits: [
      'Consultative and solution selling techniques',
      'Objection handling and negotiation',
      'Pipeline management and forecasting',
      'Customer relationship building',
      'Presentation and pitching skills',
    ],
    targetAudience: 'Sales representatives, account managers, business development executives, sales managers, and anyone in customer-facing revenue roles.',
    faqs: [
      {
        question: 'What sales methodologies are taught in Malaysia?',
        answer: 'Popular methodologies include SPIN Selling, Solution Selling, Challenger Sale, Sandler Training, and consultative selling approaches. Trainers customize based on your industry and sales cycle.',
      },
      {
        question: 'Can sales training be customized for our industry?',
        answer: 'Yes, effective sales training is always customized. Trainers will understand your products, sales cycle, customer profiles, and competitive landscape before designing the program.',
      },
      {
        question: 'How quickly can we see results from sales training?',
        answer: 'Many companies see improved sales behaviors within weeks, with measurable revenue impact within 3-6 months. Ongoing reinforcement and coaching accelerate results.',
      },
      {
        question: 'Do sales trainers provide post-training support?',
        answer: 'Many providers offer post-training coaching, role-play sessions, and reinforcement modules. Ask about ongoing support when selecting a provider.',
      },
    ],
  },
  'communication-training': {
    name: 'Communication Training',
    dbValue: 'Communication',
    metaTitle: 'Communication Training Malaysia | Top Providers {{year}}',
    metaDescription: 'Find HRDF-approved communication training providers in Malaysia. Enhance presentation, writing, and interpersonal skills.',
    heading: 'Communication Training Providers in Malaysia ({{year}})',
    intro: 'Enhance your team\'s ability to communicate clearly, persuasively, and professionally. From presentation skills to business writing, communication training builds the foundation for workplace success and career advancement.',
    benefits: [
      'Public speaking and presentation skills',
      'Business writing and email etiquette',
      'Interpersonal communication',
      'Active listening and feedback',
      'Cross-cultural communication',
    ],
    targetAudience: 'All professionals who need to communicate effectively, especially those in client-facing roles, management positions, or those preparing for career advancement.',
    faqs: [
      {
        question: 'What types of communication training are available?',
        answer: 'Communication training covers presentation skills, public speaking, business writing, email etiquette, interpersonal communication, negotiation, and cross-cultural communication.',
      },
      {
        question: 'Is communication training effective for introverts?',
        answer: 'Yes, effective communication training helps introverts leverage their strengths like listening and thoughtful responses. Many techniques work well for different personality types.',
      },
      {
        question: 'Can communication training help with English proficiency?',
        answer: 'Some providers offer business English programs focusing on professional communication. These combine language skills with business communication best practices.',
      },
      {
        question: 'How is presentation skills training conducted?',
        answer: 'Presentation training typically includes theory, live practice with video recording, peer feedback, and individual coaching. Participants deliver multiple presentations throughout the program.',
      },
    ],
  },
  'hr-training': {
    name: 'HR Training',
    dbValue: 'HR Training',
    metaTitle: 'HR Training Malaysia | Top Providers {{year}}',
    metaDescription: 'Find HRDF-approved HR training providers in Malaysia. Upskill your HR team with best practices and compliance knowledge.',
    heading: 'HR Training Providers in Malaysia ({{year}})',
    intro: 'Equip your HR team with the latest practices, compliance knowledge, and strategic capabilities. From recruitment techniques to employment law, HR training ensures your people function operates at peak effectiveness.',
    benefits: [
      'Recruitment and talent acquisition',
      'Performance management systems',
      'Employment law and compliance',
      'Compensation and benefits strategy',
      'HR analytics and metrics',
    ],
    targetAudience: 'HR executives, HR managers, talent acquisition specialists, HR business partners, and business owners handling HR functions.',
    faqs: [
      {
        question: 'What HR topics are covered in training?',
        answer: 'HR training covers recruitment, performance management, compensation, employee relations, labor law compliance, HR analytics, and strategic HR business partnering.',
      },
      {
        question: 'Is Malaysian employment law training available?',
        answer: 'Yes, many providers offer specialized training on the Employment Act, Industrial Relations Act, and other Malaysian labor regulations.',
      },
      {
        question: 'Are there HR certification programs in Malaysia?',
        answer: 'Yes, providers offer certifications including SHRM, HRCI, and local certifications. Some programs prepare participants for these international credentials.',
      },
      {
        question: 'Can HR training be customized for our company policies?',
        answer: 'Yes, many trainers customize programs to incorporate your company\'s HR policies, systems, and specific challenges.',
      },
    ],
  },
  'safety-compliance-training': {
    name: 'Safety & Compliance Training',
    dbValue: 'Safety & Compliance',
    metaTitle: 'Safety & Compliance Training Malaysia | Top Providers {{year}}',
    metaDescription: 'Find HRDF-approved safety and compliance training providers in Malaysia. Meet regulatory requirements with certified programs.',
    heading: 'Safety & Compliance Training Providers in Malaysia ({{year}})',
    intro: 'Meet regulatory requirements and protect your workforce with certified safety and compliance programs. From OSHA standards to industry-specific regulations, ensure your organization operates safely and legally.',
    benefits: [
      'Workplace safety and hazard prevention',
      'OSHA and DOSH compliance',
      'First aid and emergency response',
      'Industry-specific safety protocols',
      'Risk assessment and management',
    ],
    targetAudience: 'Safety officers, operations managers, factory supervisors, HR personnel responsible for compliance, and all employees requiring safety certification.',
    faqs: [
      {
        question: 'What safety certifications are available in Malaysia?',
        answer: 'Popular certifications include NIOSH safety passport, first aid certification, fire safety, forklift operation, working at heights, and confined space entry.',
      },
      {
        question: 'Are safety training programs mandatory?',
        answer: 'Yes, many industries require mandatory safety training under OSHA 1994 and DOSH regulations. Failure to comply can result in penalties and legal liability.',
      },
      {
        question: 'How often should safety training be renewed?',
        answer: 'Most safety certifications require annual refresher training. Some specialized certifications may have longer validity periods. Check specific requirements for your industry.',
      },
      {
        question: 'Can safety training be conducted at our workplace?',
        answer: 'Yes, most safety training providers offer on-site training. This is often preferred as trainers can address site-specific hazards and procedures.',
      },
    ],
  },
  'digital-skills-training': {
    name: 'Digital Skills Training',
    dbValue: 'Digital Skills',
    metaTitle: 'Digital Skills Training Malaysia | Top Providers {{year}}',
    metaDescription: 'Find HRDF-approved digital skills training providers in Malaysia. Upskill your team in technology, data, and digital tools.',
    heading: 'Digital Skills Training Providers in Malaysia ({{year}})',
    intro: 'Future-proof your workforce with essential digital competencies. From data analytics to digital marketing, digital skills training helps organizations thrive in the technology-driven business landscape.',
    benefits: [
      'Data analytics and visualization',
      'Digital marketing and social media',
      'Microsoft Office advanced skills',
      'Cloud computing fundamentals',
      'Automation and AI basics',
    ],
    targetAudience: 'All professionals looking to enhance their digital literacy, especially those in roles being transformed by technology or seeking career advancement.',
    faqs: [
      {
        question: 'What digital skills are most in-demand?',
        answer: 'High-demand skills include data analytics, digital marketing, cloud computing, cybersecurity basics, automation tools, and AI/machine learning fundamentals.',
      },
      {
        question: 'Do I need technical background for digital skills training?',
        answer: 'Many programs are designed for non-technical professionals. Basic computer literacy is usually sufficient. Trainers adjust complexity based on participant backgrounds.',
      },
      {
        question: 'Are there hands-on components in digital training?',
        answer: 'Yes, effective digital skills training includes hands-on practice with actual tools and platforms. Participants work on real projects and case studies.',
      },
      {
        question: 'Can digital training be conducted online?',
        answer: 'Yes, digital skills training is particularly well-suited for online delivery. Many providers offer live virtual sessions with interactive exercises.',
      },
    ],
  },
  'soft-skills-training': {
    name: 'Soft Skills Training',
    dbValue: 'Soft Skills',
    metaTitle: 'Soft Skills Training Malaysia | Top Providers {{year}}',
    metaDescription: 'Find HRDF-approved soft skills training providers in Malaysia. Develop emotional intelligence, teamwork, and interpersonal skills.',
    heading: 'Soft Skills Training Providers in Malaysia ({{year}})',
    intro: 'Develop the interpersonal abilities that drive workplace success. Soft skills training builds emotional intelligence, adaptability, and collaboration capabilities that complement technical expertise.',
    benefits: [
      'Emotional intelligence and self-awareness',
      'Time management and productivity',
      'Stress management and resilience',
      'Teamwork and collaboration',
      'Conflict resolution and diplomacy',
    ],
    targetAudience: 'All employees at any level, especially those in collaborative environments, customer-facing roles, or preparing for leadership positions.',
    faqs: [
      {
        question: 'Why are soft skills important in the workplace?',
        answer: 'Soft skills directly impact teamwork, customer relationships, leadership effectiveness, and career advancement. Studies show soft skills account for 85% of career success.',
      },
      {
        question: 'Can soft skills really be taught?',
        answer: 'Yes, while some may come naturally, soft skills can definitely be developed through training, practice, and feedback. Behavior change requires commitment and ongoing application.',
      },
      {
        question: 'What soft skills training is best for new graduates?',
        answer: 'New graduates benefit from workplace etiquette, professional communication, time management, and teamwork training to ease their transition from academic to corporate environments.',
      },
      {
        question: 'How do you measure soft skills improvement?',
        answer: 'Improvement is measured through 360-degree feedback, behavioral assessments, peer evaluations, and observable changes in workplace interactions and performance.',
      },
    ],
  },
  'team-building': {
    name: 'Team Building',
    dbValue: 'Team Building',
    metaTitle: 'Team Building Malaysia | Top Providers {{year}}',
    metaDescription: 'Find team building providers in Malaysia. Outdoor activities, workshops, and corporate retreats to strengthen your team.',
    heading: 'Team Building Providers in Malaysia ({{year}})',
    intro: 'Strengthen team cohesion, improve collaboration, and create memorable experiences. From outdoor adventures to strategic workshops, team building programs transform groups into high-performing teams.',
    benefits: [
      'Improved team communication and trust',
      'Enhanced problem-solving as a group',
      'Stronger interpersonal relationships',
      'Increased employee engagement',
      'Better understanding of team dynamics',
    ],
    targetAudience: 'Departments looking to improve collaboration, newly formed teams, organizations going through change, and companies seeking to boost morale and engagement.',
    faqs: [
      {
        question: 'What types of team building activities are available?',
        answer: 'Options include outdoor adventures, escape rooms, cooking challenges, CSR activities, strategic games, creative workshops, and virtual team building for remote teams.',
      },
      {
        question: 'How long should a team building program be?',
        answer: 'Programs range from half-day sessions to multi-day retreats. Half-day is good for quick energizers, while full-day or overnight programs allow deeper team development.',
      },
      {
        question: 'Where can team building be conducted in Malaysia?',
        answer: 'Popular locations include resorts in Langkawi, Port Dickson, Cameron Highlands, and Penang. Urban options include hotels, adventure parks, and specialized team building venues.',
      },
      {
        question: 'Are team building programs HRDF claimable?',
        answer: 'Some structured team building programs with clear learning objectives are HRDF claimable. Check with your provider about program registration and eligibility.',
      },
    ],
  },
}
