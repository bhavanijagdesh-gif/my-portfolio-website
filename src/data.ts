import { ProjectItem, SkillCategory, AchievementItem, EducationItem } from './types';

export const PERSONAL_INFO = {
  name: 'Bhavani J.',
  tagline: 'Computer Science Engineering Student | Aspiring Data Scientist | AI/ML Learner',
  quote: 'Building with code. Learning with curiosity. Leading with purpose.',
  philosophy: 'Technology is only one part of my journey. I also enjoy public speaking, leadership, teamwork and extracurricular activities. My goal is to combine technical knowledge with communication and leadership to create meaningful solutions.',
  bio: "I'm a 3rd-semester Computer Science Engineering student passionate about technology, programming, data science, AI/ML and problem solving. I enjoy building projects, learning new technologies and transforming ideas into practical solutions.",
  analyticalMindset: "My technical exploration spans foundational data structures to applied artificial intelligence. At REVA University, I pair rigorous classroom theory with rapid prototyping, building software that addresses real-world resource constraints and automation challenges.",
  phone: '+91 7019194328',
  email: 'bhavanijagdesh@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  university: 'REVA University, Bengaluru',
  degree: 'B.Tech in Computer Science',
  semester: '3rd Semester',
  cgpa: '9.3',
  seniorSecondaryScore: '93%',
  highSchoolScore: '88%',
  statusBadge: 'Available for Internships',
  avatarUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1XOmVBFxQhg202n7_BF7XZUfMjYFiOZF2MWldOjoijwTfmpdjnig0Qdbc6Qlo2DzQOb4XaW-8Ab_-lBihmKtKW0i_VRKdyPWATZ4saQ1IDHFKSFyyKaFqT-jm6f6mzfFid8iF1QDb7ti24V4T_e6leFYMZjvb1FozOuOsdRF7LWshdYI7u2YCkZ2qOJGygSR2R9TFPhvK9ythTiMvHxwjwJmsYiEU7CZCksWXEEqt4uvKfjss2Iy-9MPQ',
};

export const TELEMETRY_METRICS = [
  {
    label: 'CURRENT',
    value: '3rd Sem',
    subtext: 'CSE • REVA Univ.',
    icon: 'school',
    color: 'secondary',
  },
  {
    label: 'CGPA',
    value: '9.3',
    subtext: 'Academic Standing',
    icon: 'grade',
    color: 'primary',
  },
  {
    label: 'SENIOR SEC.',
    value: '93%',
    subtext: '12th Standard Board',
    icon: 'workspace_premium',
    color: 'tertiary',
  },
  {
    label: 'HIGH SCHOOL',
    value: '88%',
    subtext: '10th Standard ICSE',
    icon: 'history_edu',
    color: 'secondary',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    name: 'Programming',
    icon: 'code',
    accentColor: 'primary',
    skills: [
      { name: 'C', level: 'Intermediate' },
      { name: 'C++', level: 'Intermediate' },
      { name: 'Python', level: 'Advanced', featured: true },
    ],
  },
  {
    id: 'cs-core',
    name: 'Computer Science',
    icon: 'account_tree',
    accentColor: 'secondary',
    skills: [
      { name: 'Data Structures & Algorithms', level: 'Core' },
      { name: 'Object-Oriented Programming', level: 'Core' },
      { name: 'Problem Solving', level: 'High Aptitude' },
    ],
  },
  {
    id: 'web-dev',
    name: 'Web Development',
    icon: 'web',
    accentColor: 'tertiary',
    skills: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript' },
      { name: 'Responsive UI Design' },
    ],
  },
  {
    id: 'tools',
    name: 'Tools & Workflow',
    icon: 'handyman',
    accentColor: 'secondary',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
    ],
  },
  {
    id: 'interests',
    name: 'Core Interests',
    icon: 'auto_awesome',
    accentColor: 'primary',
    skills: [
      { name: 'Data Science', featured: true },
      { name: 'Artificial Intelligence', featured: true },
      { name: 'Machine Learning', featured: true },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'preservx',
    title: 'PreservX',
    category: 'Smart Food Monitoring',
    categoryBadge: 'SMART FOOD MONITORING',
    badgeColor: 'primary',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnW5c0SmXlGfaO-EXV4QVlQ-2xP3Y3P3B5adTYXUAJMQktANcv3cwhVS7_BVTE46dGLCrPWFdhm_4mHlLb8W2cL5LkQrgr6w-rX2NzZTNfQccMdt5N5Pu-sbiFrzHbwDdyjm7BrCY5g2UVMTG63KWvaE5dSYcYtolIlv8__OPannu-A7v4i8Y_m3fZQCgZXy-w9xgOKBVTeK1F5AWYffh3AEDTdYdAnWgKSHpbQUdY1XBeBoUBI2Qv',
    altText: 'Futuristic glowing dashboard mock-up for food expiry tracking PreservX with dark indigo aesthetic, clean bar telemetry, and smart alert notifications on an obsidian glass surface.',
    description: 'A smart food monitoring concept designed to help users track food items, monitor expiry information and reduce food wastage through intelligent alerts and recommendations.',
    detailedDescription: 'PreservX addresses domestic and commercial food wastage through automated expiration tracking and rule-based priority alert systems. By calculating dynamic shelf-life decay factors and analyzing grocery turnover frequencies, the system sends proactive push alerts before fresh produce and dairy perish.',
    tags: ['Python', 'Data Tracking', 'Alert Algorithms', 'UI Prototype'],
    icon: 'inventory_2',
    highlightStat: 'Reduces food waste up to 40% with automated reminder cycles',
    type: 'software',
    features: [
      'Proactive Expiration Forecasting based on grocery category parameters',
      'Intelligent Batch Telemetry and priority consumption queue',
      'Inventory Categorization with rapid bar-code & manual logging',
      'Recipe Recommendation engine prioritizing items nearing expiry'
    ],
    techStack: ['Python', 'Pandas', 'Flask API', 'Modern Responsive UI']
  },
  {
    id: 'smart-soil',
    title: 'Smart Soil & Auto Irrigation',
    category: 'IoT & Automation',
    categoryBadge: 'IOT & AUTOMATION',
    badgeColor: 'secondary',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXanpy8_YU4dRMnqJj1KmXi4WPM8sN7lyaADqnT9LEDuni7wlslUmHDDwWXfyHyMiBzvnlxfTcYRcpUTUdl_42YnEHY6EODCwypoj1A8UAVd9HDMJ_otDYHkm5vF8iA5W6usyvDHwJq4mEqB3u84wt6tVXwdzlkea8V0lD7f6QQcxYMkrIBtIpbJtArp6rkapZQNpcMzC71AKFz0n1Iw0oQm8LdV-e6io9kjye8nLy2Zp7AKQ-Wl5w',
    altText: 'Microcontroller circuit board integrated with soil moisture probes, automated drip irrigation solenoids, and glowing blue sensor readout displays in a smart greenhouse setup.',
    description: 'An IoT-based system designed to monitor soil conditions and automate irrigation dynamically based on real-time soil moisture levels to conserve water.',
    detailedDescription: 'Engineered using embedded microcontrollers, analog soil hygrometer probes, and relay-controlled DC water pumps. The system establishes a closed-loop feedback mechanism: real-time moisture readings are continuously sampled, filtered through threshold hysteresis to prevent pump chatter, and activate targeted root-zone hydration.',
    tags: ['IoT Sensors', 'Arduino / Embedded C', 'Moisture Sensing', 'Automation'],
    icon: 'water_drop',
    highlightStat: 'Saves up to 60% irrigation water over timed sprinkler setups',
    type: 'iot',
    features: [
      'Continuous Soil Moisture Sampling with analog-to-digital calibration',
      'Hysteresis-governed relay trigger preventing pump cycling wear',
      'Live Sensor Telemetry Display with real-time moisture & status output',
      'Manual override controls alongside fail-safe water level detection'
    ],
    techStack: ['Arduino / Embedded C', 'Capacitive Soil Sensor v1.2', '5V Relay Module', '12V DC Solenoid Pump']
  },


{
    id: 'foodgrid',
    title: 'FoodGrid',
    category: 'AI & Sustainability',
    categoryBadge: 'AI FOOD WASTE REDUCTION',
    badgeColor: 'primary',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80',
    altText: 'Fresh food and sustainable food management concept representing food waste reduction and redistribution.',
    description: 'An AI-powered ecosystem designed to predict food demand, detect surplus early, and intelligently redistribute excess food to nearby organizations in need.',
    detailedDescription: 'FoodGrid is a smart food waste reduction and sustainable redistribution ecosystem for institutional kitchens and food processing units. It combines demand forecasting, waste intelligence, surplus detection, dynamic recipient matching, and sustainability tracking to reduce avoidable food waste.',
    tags: ['AI/ML', 'Python', 'Data Analytics', 'Sustainability'],
    icon: 'recycling',
    highlightStat: 'Predicts surplus early and supports intelligent food redistribution',
    type: 'software',
    features: [
      'AI-powered food demand and surplus forecasting',
      'Waste root-cause analysis to identify recurring waste patterns',
      'Dynamic surplus matching based on quantity, distance, and urgency',
      'Sustainability dashboard tracking waste prevented and environmental impact'
    ],
    techStack: ['Python', 'AI/ML', 'Data Analytics', 'React', 'MySQL']
  },

];


export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'head-girl',
    title: 'Head Girl / Student Council Captain',
    subtitle: 'Grade 10 • Executive Student Leadership',
    icon: 'diversity_3',
    color: 'primary',
    description: 'Led a student council team of 20+ prefects and house captains; successfully organized major cultural fests, sports meets, and school-wide assemblies with seamless delegation.',
  },
  {
    id: 'oratory-gold',
    title: '1st Rank & Gold Medalist',
    subtitle: 'Oratory, Extempore & Debate',
    icon: 'military_tech',
    color: 'secondary',
    description: 'Recognized for exceptional articulation, rapid extemporaneous reasoning, stage command, and winning competitive inter-school declamation and debate championships.',
  },
  {
    id: 'throwball-sports',
    title: 'Throwball Sports Certification',
    subtitle: 'Athletics & Team Sports',
    icon: 'sports_volleyball',
    color: 'tertiary',
    description: 'Demonstrated physical agility, team coordination, strategic play, and athletic discipline through inter-house and regional throwball tournament participation.',
  },
];

export const EDUCATION_HISTORY: EducationItem[] = [
  {
    id: 'btech',
    degree: 'B.Tech in Computer Science',
    period: '2023 - PRESENT',
    status: 'CURRENT',
    institution: 'REVA University, Bengaluru',
    scoreHighlight: 'Currently 3rd Semester • 9.3 CGPA',
    color: 'primary',
  },
  {
    id: '12th',
    degree: '12th Standard (PUC / Senior Secondary)',
    period: 'COMPLETED',
    status: 'COMPLETED',
    institution: 'State Board / Pre-University',
    scoreHighlight: 'Score: 93% Distinction',
    color: 'secondary',
  },
  {
    id: '10th',
    degree: '10th Standard – ICSE',
    period: 'COMPLETED',
    status: 'COMPLETED',
    institution: 'ICSE Board Curriculum',
    scoreHighlight: 'Score: 88% First Class with Distinction',
    color: 'tertiary',
  },
];
