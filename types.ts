export interface Notice {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  url: string;
  category: string;
}

export interface DownloadItem {
  id: string;
  title: string;
  category: string;
  url: string; // In a real app this is a path, here just a placeholder string
}

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
}

export interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  classInterested: string;
  message: string;
  date: string;
  status: 'New' | 'Contacted';
}

export interface SchoolSettings {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  email: string;
  facebook: string;
  instagram: string;
  youtube: string;
}

export interface SiteContent {
  aboutText: string;
  visionText: string;
  missionText: string;
  academicsText: string;
  facilitiesText: string;
}

export interface SchoolContextType {
  notices: Notice[];
  events: Event[];
  gallery: GalleryItem[];
  downloads: DownloadItem[];
  blogPosts: BlogPost[];
  enquiries: Enquiry[];
  settings: SchoolSettings;
  content: SiteContent;
  
  // Actions
  addNotice: (notice: Omit<Notice, 'id'>) => void;
  deleteNotice: (id: string) => void;
  addEvent: (event: Omit<Event, 'id'>) => void;
  deleteEvent: (id: string) => void;
  addGalleryItem: (item: Omit<GalleryItem, 'id'>) => void;
  deleteGalleryItem: (id: string) => void;
  addDownload: (item: Omit<DownloadItem, 'id'>) => void;
  deleteDownload: (id: string) => void;
  addBlogPost: (post: Omit<BlogPost, 'id'>) => void;
  deleteBlogPost: (id: string) => void;
  addEnquiry: (enquiry: Omit<Enquiry, 'id' | 'status' | 'date'>) => void;
  updateEnquiryStatus: (id: string, status: 'New' | 'Contacted') => void;
  updateSettings: (settings: SchoolSettings) => void;
  updateContent: (content: SiteContent) => void;
}