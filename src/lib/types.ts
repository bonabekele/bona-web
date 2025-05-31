export type Category = 'AI' | 'Web Development' | 'Graphic Design' | 'Video Editing' | 'All';

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: Category | Category[];
  image: string;
  images?: string[];
  githubUrl?: string;
  demoUrl?: string;
  projectUrl?: string;
  technologies: string[];
  featured: boolean;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  url?: string;
  image?: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number; // 1-5
  category: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
  read: boolean;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  title: string;
  bio: string;
  email: string;
  phone?: string;
  location: string;
  avatar: string;
}

export interface Admin {
  id: string;
  username: string;
  password: string; // This would be hashed in a real application
  role: 'admin' | 'editor';
}

export interface GalleryItem {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  technologies: string[];
}