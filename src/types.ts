export type NavTab = 'home' | 'skills' | 'projects' | 'milestones' | 'contact';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  categoryBadge: string;
  badgeColor: 'primary' | 'secondary' | 'tertiary';
  image: string;
  altText: string;
  description: string;
  detailedDescription?: string;
  tags: string[];
  icon: string;
  highlightStat?: string;
  features?: string[];
  techStack?: string[];
  type: 'software' | 'iot';
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  accentColor: 'primary' | 'secondary' | 'tertiary';
  skills: {
    name: string;
    level?: string;
    featured?: boolean;
  }[];
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: 'primary' | 'secondary' | 'tertiary';
  description: string;
  year?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  period: string;
  status: 'CURRENT' | 'COMPLETED';
  institution: string;
  scoreHighlight: string;
  color: 'primary' | 'secondary' | 'tertiary';
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}
