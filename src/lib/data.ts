import { Admin, Certificate, ContactMessage, Project, Skill, SocialLink, UserProfile } from './types';

// Export userData as profile to match what components are expecting
export const profile = {
  firstName: 'Bona',
  lastName: 'Bekele',
  title: 'Video Editor, Graphics Designer',
  bio: 'I use video editing to craft engaging visual stories from raw footage. By cutting scenes, adding effects, and syncing audio, I bring ideas to life and create content that connects with viewers emotionally and visually.By combining color, typography, and layout, I create designs that communicate messages clearly and creatively.',
  email: 'bekelebona058@gmail.com',
  phone: '+251 (969) 676-523',
  location: 'Addis Ababa, Arada',
  avatar: '/placeholder.svg',
};

// Also keep the original userData export for backward compatibility
export const userData: UserProfile = profile;

// Export education directly since it's being imported in About.tsx
export const education = [
  {
    id: '1',
    institution: 'Addis Ababa University(AAiT), the best university in Ethiopia',
    degree: 'Bachelor of Science',
    field: 'BME',
    startDate: '2021',
    endDate: '2025',
    description: 'Studyin in BME as my major and also doing my Thesis on machine learning to solve health issues. Thesis on "Liver Image Classification with CNN." GPA: 3.5/4.0',
  },
  {
    id: '2',
    institution: 'Alpha College University',
    degree: 'Bachelor of Science',
    field: 'Management',
    startDate: '2022',
    endDate: '2026',
    description: 'Minor in Management. I am studying this program in private institution during my free time. GPA: 3.88/4.0',
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'CNN based Image Classification',
    description: 'An application that uses machine CNN to classify ultrasound images after image is analysed. Built with Pytorch, TensorFlow.js, and integrated with OpenAI API.',
    shortDescription: 'Classify Ultrasound images',
    category: 'AI',
    image: '/v-logo.png',
    images: ['/placeholder.svg', '/placeholder.svg'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com',
    technologies: ['React', 'TensorFlow.js', 'OpenAI API', 'Node.js'],
    featured: true,
  },
  {
    id: '2',
    title: 'Electronic Medical Record(EMR)',
    description: 'A comprehensive dashboard for e-commerce store owners to track sales, inventory, and customer data. Features real-time analytics and customizable reports.',
    shortDescription: 'Complete dashboard solution for online store management',
    category: 'Web Development',
    image: '/laptop.png',
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
    featured: true,
  },
  {
    id: '3',
    title: 'Graphics Design',
    description: 'A complete brand identity solution for a tech startup, including logo design, color palette, typography, and brand guidelines document.',
    shortDescription: 'Comprehensive branding solution for a tech startup',
    category: 'Graphic Design',
    image: '/food-poster.png',
    demoUrl: 'https://drive.google.com/drive/folders/11RRwKUnmdhKU9hi5dKhhC9r7J9MGsGeh',
    projectUrl: 'https://drive.google.com/drive/folders/11RRwKUnmdhKU9hi5dKhhC9r7J9MGsGeh',
    technologies: ['Adobe Illustrator', 'Adobe InDesign', 'Figma'],
    featured: true,
  },
  {
    id: '4',
    title: 'YouTube and TikTok Videos',
    description: 'A promotional video for a corporate client showcasing their services and company culture. Includes custom animations and professional voice-over.',
    shortDescription: 'Engaging promotional video with custom animations',
    category: 'Video Editing',
    image: '/orange.png',
    demoUrl: 'https://drive.google.com/drive/folders/1NZWsYwZIwnA0roYOCGFQaMS2OBnGbvyY',
    technologies: ['Adobe Premiere Pro','CapCut', 'After Effects', 'Audition'],
    featured: false,
  },
  {
    id: '5',
    title: 'Sentiment Analysis Tool',
    description: 'A web application that analyzes customer reviews and social media mentions to determine sentiment and identify key themes.',
    shortDescription: 'AI-powered sentiment analysis for customer feedback',
    category: 'AI',
    image: '/hexag.png',
    githubUrl: 'https://github.com',
    technologies: ['Python', 'NLTK', 'React', 'FastAPI'],
    featured: false,
  },
  {
    id: '6',
    title: 'Responsive Portfolio Website',
    description: 'A modern, responsive portfolio website template designed for creative professionals to showcase their work.',
    shortDescription: 'Modern portfolio website template for creatives',
    category: 'Web Development',
    image: '/ui-3.png',
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com',
    technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    featured: false,
  },
];

export const skills: Skill[] = [
  { id: '1', name: 'React', level: 5, category: 'Frontend' },
  { id: '2', name: 'Node.js', level: 4, category: 'Backend' },
  { id: '3', name: 'Python', level: 4, category: 'Programming' },
  { id: '4', name: 'Adobe Creative Suite', level: 5, category: 'Design' },
  { id: '5', name: 'UI/UX Design', level: 4, category: 'Design' },
  { id: '6', name: 'Machine Learning', level: 3, category: 'AI' },
  { id: '7', name: 'Video Editing', level: 5, category: 'Media' },
  { id: '8', name: 'TypeScript', level: 4, category: 'Programming' },
  { id: '9', name: 'PostgreSQL', level: 3, category: 'Backend' },
  { id: '10', name: 'Next.js', level: 4, category: 'Frontend' },
  { id: '11', name: 'Docker', level: 3, category: 'DevOps' },
  { id: '12', name: 'MongoDB', level: 4, category: 'Database' },
];

export const resumeData = {
  profile: profile,
  workExperience: [
    {
      id: '1',
      position: 'AI Learner',
      company: 'Online Google Self-Tutor',
      location: 'Addis Ababa, Ethiopia',
      startDate: 'January 2025',
      endDate: 'Present',
      description: 'Lead development of AI and ML applications and services, managing a team of developers. I am doing my Thesis projects on this area with a group of 5.',
    },
    {
      id: '2',
      position: 'Graphics Designer',
      company: 'Remote Internee',
      location: 'Addis Ababa, Arada',
      startDate: 'March 2024',
      endDate: 'Present',
      description: 'Oversaw the creative direction for 15+ client projects. Created logos, Social media contents, flyers,brochures and high-quality visual content. Increased client satisfaction by 35% through improved project design processes.',
    },
    {
      id: '3',
      position: 'Video Editing',
      company: 'Upwork',
      location: 'Addis Ababa, Arada',
      startDate: 'January 2024',
      endDate: 'Present',
      description: 'Edited videos for Tiktok, YouTube and other social medias in tools and softwares like Adobe premiere pro, CapCut, Canva, Davinci.',
    },
  ],
  education: education,
  skills: skills,
  languages: ['Afaan Oromoo(Native), English (Fluent)', 'Amharic (Fluent)', 'Chinese(Beginner), German(Beginner)'],
  interests: ['Photography', 'Hiking', 'Music Production', 'Machine Learning Research', 'Traveling'],
};

export const certificates: Certificate[] = [
  {
    id: '1',
    title: 'Awash Tatariwoch Business competition',
    issuer: 'Awash Bank at National level',
    date: 'May 2024',
    url: 'https://example.com/cert1',
  },
  {
    id: '2',
    title: 'Summer Volunteer programs',
    issuer: 'Ethiopian Ministry of Education',
    date: 'April 2025',
    url: 'https://example.com/cert2',
  },
  {
    id: '3',
    title: 'Udacity certified Coding Certificates',
    issuer: 'Ethiopian Ministry of Innovation and UAE government',
    date: 'September 2024',
    url: 'https://drive.google.com/file/d/13Ug1i1KY-lNSJRmTULWwcVmft6cTaNEs/view',
  },
];

export const socialLinks: SocialLink[] = [
  {
    id: '1',
    platform: 'GitHub',
    url: 'https://github.com/bonabekele',
    icon: 'github',
  },
  {
    id: '2',
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/bonabekele/',
    icon: 'linkedin',
  },
  {
    id: '3',
    platform: 'Twitter',
    url: 'https://x.com/bekele_bona?t=5kUuPsZqxjMHFHwCyXC6PQ&s=09',
    icon: 'twitter',
  },
  {
    id: '4',
    platform: 'Instagram',
    url: 'https://www.instagram.com/bonabekele058?igsh=YzljYTk1ODg3Zg==',
    icon: 'instagram',
  },
];

export const contactMessages: ContactMessage[] = [
  {
    id: '1',
    name: 'Bona Bekele',
    email: 'bekelebona058@gmail.com',
    message: 'Hi, I would like to discuss a potential project for my company.',
    date: '2025-06-15T14:30:00Z',
    read: false,
  },
  {
    id: '2',
    name: 'Bona Bekele',
    email: 'bonabekele800@gmail.com',
    message: 'I am impressed by your portfolio. Would you be available for a freelance project next month?',
    date: '2024-06-10T09:15:00Z',
    read: true,
  },
];

export const admins: Admin[] = [
  {
    id: '1',
    username: 'admin',
    password: 'hashed_password_here', // This would be hashed in a real application
    role: 'admin',
  },
];

// Gallery data for the new gallery page
export const galleryData = [
  {
    id: '1',
    title: 'Client Meeting in Progress',
    date: 'May 15, 2021',
    imageUrl: 'https://images.unsplash.com/photo-1573166364839-1bfe9196c23e',
    description: 'Productive brainstorming session with a new client about their upcoming web application project. We discussed user experience priorities and technical requirements.'
  },
  {
    id: '2',
    title: 'Design Exploration',
    date: 'June 3, 2022',
    imageUrl: 'https://media.istockphoto.com/id/1202227531/photo/beautiful-emerald-colored-glacial-rivers-of-iceland-taken-from-a-helicopter.webp?a=1&b=1&s=612x612&w=0&k=20&c=JUyCVOXDboXLSepcDy7xOTjMNH1UKyLabgFWkAOtaiU=',
    description: 'Exploring new design concepts for an upcoming mobile app. Testing different color schemes and typography options to create the perfect user interface.'
  },
  {
    id: '3',
    title: 'Code Review Session',
    date: 'June 20, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q29kZSUyMHJldmlld3xlbnwwfHwwfHx8MA%3D%3D',
    description: 'Conducting a thorough code review with the development team. Identifying optimization opportunities and discussing best practices for maintainable code.'
  },
  {
    id: '4',
    title: 'Video Editing in Progress',
    date: 'July 5, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1596725858508-70543890c732',
    description: 'Working on a promotional video for a client\'s new product launch. Editing footage, adding special effects, and synchronizing with the perfect soundtrack.'
  },
  {
    id: '5',
    title: 'AI Model Training',
    date: 'May 22, 2025',
    imageUrl: 'https://media.istockphoto.com/id/1387900612/photo/automation-data-analytic-with-robot-and-digital-visualization-for-big-data-scientist.webp?a=1&b=1&s=612x612&w=0&k=20&c=2iILS0WPh_D-MDMJiIw_14bg6IgJarMUYtDH4D0nIho=',
    description: 'Setting up and training a new machine learning model for image recognition. Fine-tuning parameters to achieve optimal accuracy and performance.'
  },
  {
    id: '6',
    title: 'Project Planning',
    date: 'March 10, 2024',
    imageUrl: 'https://media.istockphoto.com/id/2148861850/photo/businessman-meeting-and-discussion-with-office-boardroom-and-collaboration-or-workshop-leader.webp?a=1&b=1&s=612x612&w=0&k=20&c=Nf53kQRRQND6i64gvgWJzB70pbPCts_190A5PtOyUEU=',
    description: 'Mapping out project milestones and task assignments for a new web development project. Creating a detailed timeline to ensure on-time delivery.'
  }
];

// Services data for the new services page
export const servicesData = [
  {
    id: '1',
    title: 'Web Development',
    shortDescription: 'Modern, responsive web applications',
    description: 'I create custom web applications tailored to your specific business needs. From simple landing pages to complex web platforms, I deliver high-quality, responsive websites that work beautifully across all devices.',
    technologies: ['React', 'Node.js', 'TypeScript', 'Next.js', 'MongoDB', 'PostgreSQL', 'GraphQL', 'REST API']
  },
  {
    id: '2',
    title: 'AI Solutions',
    shortDescription: 'Intelligent automation and insights',
    description: 'Harness the power of artificial intelligence for your business. I develop custom AI solutions including natural language processing, computer vision applications, recommendation systems, and data analysis tools.',
    technologies: ['Machine Learning', 'TensorFlow', 'PyTorch', 'Computer Vision', 'NLP', 'Python', 'Data Analysis']
  },
  {
    id: '3',
    title: 'Graphic Design',
    shortDescription: 'Eye-catching visual identity',
    description: 'Stand out with professionally designed visuals. From logos and brand identity to marketing materials and social media graphics, I create compelling designs that communicate your message effectively.',
    technologies: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Figma', 'Brand Identity', 'Typography', 'Color Theory']
  },
  {
    id: '4',
    title: 'Video Production',
    shortDescription: 'Engaging video content',
    description: 'Tell your story through powerful video content. I offer end-to-end video production services including concept development, filming, editing, animation, and post-production for promotional videos, explainers, and more.',
    technologies: ['Adobe Premiere Pro', 'After Effects', 'Motion Graphics', 'Story Boarding', 'Audio Editing', 'Color Grading']
  },
  {
    id: '5',
    title: 'UI/UX Design',
    shortDescription: 'Intuitive user experiences',
    description: 'Create seamless, intuitive user experiences that delight your customers. I specialize in designing user interfaces that are not only beautiful but also functional, accessible, and aligned with business goals.',
    technologies: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'Information Architecture', 'Figma', 'Sketch']
  },
  {
    id: '6',
    title: 'Technical Consulting',
    shortDescription: 'Expert guidance and problem-solving',
    description: 'Get expert advice on technology decisions and implementation strategies. I provide technical consulting services to help you navigate complex technical challenges, select appropriate technologies, and plan effective solutions.',
    technologies: ['System Architecture', 'Technology Selection', 'Performance Optimization', 'Security Best Practices', 'Code Reviews', 'Technical Documentation']
  }
];