import { API_BASE_URL } from '../lib/dbConfig';

// Type definitions
interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
  isRead: boolean;
}

interface GalleryItem {
  id: string;
  title: string;
  date?: string;
  imageUrl: string;
  description?: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  category?: string;
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  technologies: string[]; // or Technology[] if you have a specific type
  featured: boolean;
}

interface Service {
  id: string;
  title: string;
  shortDescription?: string;
  description: string;
  technologies: string[];
}

interface Skill {
  id: string;
  name: string;
  level: number;
  category?: string;
}

interface Education {
  id: string;
  institution: string;
  degree?: string;
  field?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
}

interface Profile {
  firstName: string;
  lastName: string;
  title?: string;
  bio?: string;
  email?: string;
  phone?: string;
  location?: string;
  avatar?: string;
}

interface ProfileData {
  profile: Profile;
  skills: Skill[];
  education: Education[];
  projects: Project[];
}

// Generic fetch function with error handling
const fetchFromApi = async <T>(endpoint: string, options?: RequestInit): Promise<T> => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    return await response.json() as T;
  } catch (error) {
    console.error(`Error fetching from ${endpoint}:`, error);
    throw error;
  }
};

// Projects API
export const getProjects = (): Promise<Project[]> => fetchFromApi<Project[]>('/projects');
export const getProjectById = (id: string): Promise<Project> => fetchFromApi<Project>(`/projects/${id}`);
export const getFeaturedProjects = (): Promise<Project[]> => fetchFromApi<Project[]>('/projects/featured');

// Skills API
export const getSkills = (): Promise<Skill[]> => fetchFromApi<Skill[]>('/skills');
export const getSkillsByCategory = (category: string): Promise<Skill[]> => 
  fetchFromApi<Skill[]>(`/skills/category/${category}`);

// Contact Messages API
export const submitContactMessage = (
  message: Omit<ContactMessage, 'id' | 'date' | 'isRead'>
): Promise<{ success: boolean }> => 
  fetchFromApi<{ success: boolean }>('/contact', {
    method: 'POST',
    body: JSON.stringify(message)
  });

// Services API
export const getServices = (): Promise<Service[]> => fetchFromApi<Service[]>('/services');
export const getServiceById = (id: string): Promise<Service> => fetchFromApi<Service>(`/services/${id}`);

// Gallery API
export const getGalleryItems = (): Promise<GalleryItem[]> => fetchFromApi<GalleryItem[]>('/gallery');

// Profile API
export const getProfileData = (): Promise<ProfileData> => 
  fetchFromApi<ProfileData>('/profile');