const saasSolutions = [
  {
    id: 0,
    name: 'TaskMaster',
    description: 'TaskMaster is a versatile task management solution designed to boost productivity for individuals and teams. Key features include task creation, assignment, progress tracking, and collaborative workspaces.',
    keywords: ['task', 'management', 'productivity', 'organization', 'projects', 'collaboration', 'workflow', 'planning', 'tracking', 'gantt', 'kanban', 'scrum', 'teamwork', 'efficiency', 'scheduling', 'time management', 'project management', 'task automation', 'goal setting', 'resource allocation', 'deadline tracking', 'remote work', 'task prioritization', 'team collaboration', 'agile', 'lean', 'milestones', 'task dependencies', 'checklists', 'reminders', 'task sharing'],
    features: ['task creation', 'assignment', 'progress tracking', 'collaborative workspaces'],
    pricing: 'Monthly Subscription - $15',
    category: 'Project Management'
  },
  {
    id: 1,
    name: 'FinanceFlow',
    description: 'FinanceFlow is a comprehensive finance management solution tailored for small businesses. Key features include automated invoicing, expense tracking, budget planning, and detailed financial reporting.',
    keywords: ['finance', 'accounting', 'budget', 'invoicing', 'expenses', 'payments', 'reporting', 'small business', 'money', 'salary', 'software', 'financial planning', 'cash flow', 'profit', 'expense management', 'bookkeeping', 'taxes', 'accounting software', 'financial management', 'budgeting', 'forecasting', 'financial analysis', 'investment', 'cost accounting', 'managerial accounting', 'gaap', 'ifrs', 'accounting standards', 'financial statement analysis', 'balance sheet', 'income statement', 'cash flow statement', 'statement of changes in equity', 'financial ratio analysis', 'accounting principles', 'financial reporting', 'financial modeling', 'financial planning and analysis', 'fp&a', 'financial data analysis', 'accounting information system', 'erp', 'enterprise resource planning', 'financial management system', 'fms'],
    features: ['automated invoicing', 'expense tracking', 'budget planning', 'financial reporting'],
    pricing: 'One-Time Purchase - $99',
    category: 'Finance'
  },
  {
    id: 2,
    name: 'CustomerConnect',
    description: 'CustomerConnect is a CRM solution designed to help businesses manage customer relationships effectively. Key features include lead management, customer communication, sales tracking, and marketing automation.',
    keywords: ['crm', 'customer', 'sales', 'marketing', 'support', 'leads', 'engagement', 'automation', 'service', 'pipeline', 'contact', 'relationship', 'retention', 'customer satisfaction', 'client management', 'customer experience', 'salesforce automation', 'client retention', 'market analysis', 'prospect tracking', 'customer insights', 'loyalty programs', 'business growth', 'customer interaction', 'data management', 'crm integration', 'crm analytics', 'crm software', 'crm tools', 'customer data', 'crm strategy', 'crm solutions', 'customer feedback', 'crm system'],
    features: ['lead management', 'customer communication', 'sales tracking', 'marketing automation'],
    pricing: 'Monthly Subscription - $25',
    category: 'CRM'
  },
  {
    id: 3,
    name: 'TimeTrack Pro',
    description: 'TimeTrack Pro is an advanced time tracking solution for freelancers and businesses. Key features include timesheet management, project time tracking, billing and invoicing, productivity analysis, and attendance reporting.',
    keywords: ['time', 'timesheet', 'billing', 'productivity', 'reporting', 'attendance', 'project', 'salary', 'management', 'invoicing', 'work hours', 'efficiency', 'freelance', 'time tracking', 'project management', 'task scheduling', 'workforce management', 'payroll', 'expense tracking', 'time sheets', 'resource allocation', 'time analysis', 'client billing', 'project billing', 'time management', 'profitability', 'time logging', 'employee monitoring', 'compliance', 'budgeting', 'cost estimation'],
    features: ['timesheet management', 'project time tracking', 'billing and invoicing', 'productivity analysis', 'attendance reporting'],
    pricing: 'Monthly Subscription - $10',
    category: 'Time Tracking'
  },
  {
    id: 4,
    name: 'ProjectZen',
    description: 'ProjectZen is a project management solution that helps teams stay organized and on track. Key features include task management, project planning, scheduling, resource allocation, collaboration tools, and progress tracking.',
    keywords: ['project', 'management', 'collaboration', 'planning', 'scheduling', 'resources', 'agile', 'task', 'tracking', 'gantt', 'kanban', 'scrum', 'team', 'productivity', 'workflow', 'project lifecycle', 'milestone tracking', 'resource management', 'time management', 'project execution', 'team coordination', 'goal setting', 'risk management', 'stakeholder engagement', 'project scope', 'quality assurance', 'budgeting', 'timeline', 'project deliverables', 'change management', 'communication', 'status reporting', 'project documentation', 'project strategy'],
    features: ['task management', 'project planning', 'scheduling', 'resource allocation', 'collaboration tools', 'progress tracking'],
    pricing: 'One-Time Purchase - $149',
    category: 'Project Management'
  },
  {
    id: 5,
    name: 'InvoiceEasy',
    description: 'InvoiceEasy is a simple and easy-to-use invoicing solution for small businesses. Key features include customizable invoice templates, automated payment reminders, expense tracking, and financial reporting.',
    keywords: ['invoice', 'billing', 'payments', 'accounting', 'finance', 'clients', 'templates', 'reminders', 'small business', 'money','cash flow', 'receivables', 'accounts payable', 'accounts receivable', 'financial management', 'tax compliance', 'bookkeeping', 'business accounting', 'financial reporting', 'profit and loss', 'balance sheets', 'general ledger'],
    features: ['customizable invoice templates', 'automated payment reminders', 'expense tracking', 'financial reporting'],
    pricing: 'Monthly Subscription - $5',
    category: 'Finance'
  },
  {
    id: 6,
    name: 'MeetingMagic',
    description: 'MeetingMagic is a meeting management solution that helps teams schedule and run effective meetings. Key features include meeting scheduling, agenda creation, minute taking, collaboration tools, and action item tracking.',
    keywords: ['meeting management', 'scheduling', 'agenda', 'minutes', 'collaboration', 'productivity', 'communication', 'teamwork', 'coordination', 'efficiency', 'meeting software', 'video conferencing', 'virtual meetings', 'remote work', 'time management', 'project planning', 'team collaboration', 'meeting notes', 'action items'],
    features: ['meeting scheduling', 'agenda creation', 'minute taking', 'collaboration tools', 'action item tracking'],
    pricing: 'Monthly Subscription - $12',
    category: 'Collaboration'
  },
  {
    id: 7,
    name: 'SocialBoost',
    description: 'SocialBoost is a social media management solution that helps businesses grow their social media presence. Key features include social media scheduling, content creation, engagement tracking, analytics, and social listening.',
    keywords: ['social media', 'marketing', 'engagement', 'analytics', 'scheduling', 'followers', 'content creation', 'social listening', 'brand management', 'advertising', 'influencers', 'promotion', 'social networking', 'digital marketing', 'community management', 'content strategy', 'social media tools', 'public relations'],
    features: ['social media scheduling', 'content creation', 'engagement tracking', 'analytics', 'social listening'],
    pricing: 'Monthly Subscription - $18',
    category: 'Marketing'
  },
  {
    id: 8,
    name: 'FileCloud',
    description: 'FileCloud is a secure file storage and sharing solution for businesses. Key features include secure file storage, file sharing, version control, collaboration tools, and access control.',
    keywords: ['file storage', 'file sharing', 'security', 'collaboration', 'cloud', 'documents', 'version control', 'data management', 'backup', 'safety', 'accessibility', 'encryption', 'data protection', 'remote access', 'document management', 'file management', 'data sharing', 'secure storage', 'online collaboration'],
    features: ['secure file storage', 'file sharing', 'version control', 'collaboration tools', 'access control'],
    pricing: 'Monthly Subscription - $30',
    category: 'File Management'
  },
  {
    id: 9,
    name: 'HR Central',
    description: 'HR Central is an HR management solution that helps businesses manage their employees effectively. Key features include employee management, payroll processing, benefits administration, recruiting and onboarding, and performance management.',
    keywords: ['human resources', 'hr management', 'employees', 'payroll', 'benefits', 'recruiting', 'onboarding', 'performance management', 'workforce management', 'money', 'talent management', 'hr software', 'employee engagement', 'compliance', 'hr analytics', 'employee training', 'hr services', 'personnel management', 'hr solutions'],
    features: ['employee management', 'payroll processing', 'benefits administration', 'recruiting and onboarding', 'performance management'],
    pricing: 'One-Time Purchase - $299',
    category: 'HR Management'
  },
  {
    id: 10,
    name: 'CodeCollab',
    description: 'CodeCollab is a collaborative coding platform for developers to work together in real-time. Key features include code sharing, real-time editing, version control, code review, and integrated communication tools.',
    keywords: ['coding', 'collaboration', 'development', 'programming', 'code review', 'version control', 'real-time editing', 'software development', 'teamwork', 'peer programming', 'github integration', 'source code management', 'developer tools', 'agile development', 'continuous integration', 'devops'],
    features: ['code sharing', 'real-time editing', 'version control', 'code review', 'integrated communication tools'],
    pricing: 'Monthly Subscription - $22',
    category: 'Development'
  },
  {
    id: 11,
    name: 'DesignSpark',
    description: 'DesignSpark is a design tool that helps users create stunning graphics and visuals. Key features include graphic design templates, image editing tools, illustration tools, and collaboration features.',
    keywords: ['design', 'graphics', 'visuals', 'illustration', 'photography', 'image editing', 'graphic design', 'creativity', 'art', 'media', 'branding', 'design software', 'visual communication', 'creative tools', 'digital design', 'design collaboration', 'vector graphics', 'graphic editing'],
    features: ['graphic design templates', 'image editing tools', 'illustration tools', 'collaboration features'],
    pricing: 'Monthly Subscription - $8',
    category: 'Design'
  },
  {
    id: 12,
    name: 'MarketWise',
    description: 'MarketWise is a market research tool that provides insights into consumer behavior and market trends. Key features include survey creation, data analysis, reporting, and visualization.',
    keywords: ['market research', 'analytics', 'consumer behavior', 'trends', 'data analysis', 'business intelligence', 'survey tools', 'reporting', 'market insights', 'forecasting', 'strategic planning', 'consumer insights', 'market analysis', 'data visualization', 'competitive analysis', 'market segmentation'],
    features: ['survey creation', 'data analysis', 'reporting', 'visualization'],
    pricing: 'Monthly Subscription - $27',
    category: 'Market Research'
  },
  {
    id: 13,
    name: 'SalesForce Pro',
    description: 'SalesForce Pro is a sales automation tool that helps sales teams close more deals. Key features include lead management, contact management, sales pipeline tracking, email marketing automation, and reporting.',
    keywords: ['sales automation', 'crm', 'leads', 'prospects', 'deals', 'sales pipeline', 'email marketing', 'business growth', 'money', 'customer acquisition', 'conversion', 'salesforce automation', 'sales reporting', 'sales strategy', 'sales management', 'customer relationship management', 'sales tools'],
    features: ['lead management', 'contact management', 'sales pipeline tracking', 'email marketing automation', 'reporting'],
    pricing: 'One-Time Purchase - $499',
    category: 'Sales Automation'
  },
  {
    id: 14,
    name: 'LearnFast',
    description: 'LearnFast is an e-learning platform that provides access to a wide range of online courses. Key features include course creation, content management, student tracking, assessment tools, and certification.',
    keywords: ['e-learning', 'online courses', 'education', 'training', 'skills development', 'knowledge', 'content management', 'assessment', 'certification', 'learning management system', 'professional development', 'virtual classroom', 'teaching tools', 'online education', 'learning platform'],
    features: ['course creation', 'content management', 'student tracking', 'assessment tools', 'certification'],
    pricing: 'Monthly Subscription - $17',
    category: 'E-Learning'
  }
];

export default saasSolutions;
