import React, { createContext, useContext, useState, ReactNode } from 'react';
import { 
  SchoolContextType, Notice, Event, GalleryItem, DownloadItem, 
  BlogPost, Enquiry, SchoolSettings, SiteContent 
} from '../types';

const defaultSettings: SchoolSettings = {
  name: "Jati International School",
  tagline: "Nurturing Global Minds with Local Values",
  address: "Salipur, Cuttack, Odisha",
  phone: "+91-9937033007",
  email: "info@jatiinternationalschool.com"
};

const defaultContent: SiteContent = {
  aboutText: "Jati International School is committed to providing a holistic education that fosters intellectual, emotional, and physical growth. We believe in nurturing global citizens who remain rooted in their cultural values.",
  visionText: "To create a learning environment where every child discovers their potential and contributes positively to society.",
  missionText: "To provide world-class education with a focus on discipline, integrity, and innovation.",
  academicsText: "Our academic curriculum is designed to challenge students while providing necessary support. We follow the CBSE curriculum with a focus on activity-based learning.",
  facilitiesText: "We provide state-of-the-art facilities including smart classrooms, well-equipped labs, and extensive sports grounds to ensure all-round development."
};

const initialNotices: Notice[] = [
  { id: '1', title: 'Summer Vacation Announcement', date: '2025-05-01', category: 'Holiday', description: 'School will remain closed for summer vacation from May 15th to June 15th.' },
  { id: '2', title: 'Annual Sports Day', date: '2025-04-20', category: 'Events', description: 'Participation forms are available at the front desk.' },
  { id: '3', title: 'Parent Teacher Meeting', date: '2025-04-10', category: 'General', description: 'PTM for Class X will be held on Saturday.' },
  { id: '4', title: 'Olympiad Registration', date: '2025-03-15', category: 'Academics', description: 'Last date to register for Math Olympiad is March 30th.' },
  { id: '5', title: 'Fee Submission Deadline', date: '2025-03-01', category: 'Fee', description: 'Please submit the quarterly fee by March 10th to avoid late fines.' },
];

const initialEvents: Event[] = [
  { id: '1', title: 'Science Exhibition', date: '2025-08-15', time: '10:00 AM', location: 'Main Auditorium', description: 'Showcasing innovative projects by students.' },
  { id: '2', title: 'Independence Day', date: '2025-08-15', time: '08:00 AM', location: 'School Ground', description: 'Flag hoisting ceremony and cultural program.' },
  { id: '3', title: 'Inter-School Debate', date: '2025-09-05', time: '11:00 AM', location: 'Conference Hall', description: 'Topic: Artificial Intelligence in Education.' },
];

const initialGallery: GalleryItem[] = [
  { id: '1', title: 'School Building', category: 'Campus', url: 'https://picsum.photos/800/600?random=1' },
  { id: '2', title: 'Chemistry Lab', category: 'Labs', url: 'https://picsum.photos/800/600?random=2' },
  { id: '3', title: 'Library', category: 'Facilities', url: 'https://picsum.photos/800/600?random=3' },
  { id: '4', title: 'Sports Day', category: 'Events', url: 'https://picsum.photos/800/600?random=4' },
  { id: '5', title: 'Classroom', category: 'Campus', url: 'https://picsum.photos/800/600?random=5' },
  { id: '6', title: 'Annual Function', category: 'Events', url: 'https://picsum.photos/800/600?random=6' },
  { id: '7', title: 'Computer Lab', category: 'Labs', url: 'https://picsum.photos/800/600?random=7' },
  { id: '8', title: 'Playground', category: 'Sports', url: 'https://picsum.photos/800/600?random=8' },
];

const initialDownloads: DownloadItem[] = [
  { id: '1', title: 'School Prospectus 2025-26', category: 'Prospectus', url: '#' },
  { id: '2', title: 'Academic Calendar', category: 'General', url: '#' },
  { id: '3', title: 'Class X Syllabus', category: 'Syllabus', url: '#' },
  { id: '4', title: 'Holiday Homework - Class V', category: 'Homework', url: '#' },
  { id: '5', title: 'Book List 2025-26', category: 'General', url: '#' },
];

const initialBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Importance of Holistic Education',
    author: 'Principal',
    date: '2025-02-15',
    image: 'https://picsum.photos/800/400?random=100',
    excerpt: 'Education is not just about books and grades. At Jati International School, we focus on the overall development of the child.',
    content: 'Education is not just about books and grades. At Jati International School, we focus on the overall development of the child. Holistic education involves nurturing the physical, emotional, social, and spiritual aspects of a child alongside their intellectual growth. \n\nWe encourage students to participate in sports, arts, and community service. This balanced approach ensures that our students grow up to be well-rounded individuals capable of facing the challenges of the modern world. Our curriculum is designed to integrate these elements seamlessly into the daily routine.'
  },
  {
    id: '2',
    title: 'Annual Sports Meet 2024 Highlights',
    author: 'Sports Dept',
    date: '2025-01-20',
    image: 'https://picsum.photos/800/400?random=101',
    excerpt: 'Our students showcased exceptional talent and sportsmanship at the Annual Sports Meet held last week.',
    content: 'The Annual Sports Meet 2024 was a grand success. Students from all houses participated with great enthusiasm. The event began with a march past followed by the lighting of the torch. \n\nEvents included track and field, relay races, and team sports like kho-kho and kabaddi. The Red House emerged victorious this year, lifting the overall championship trophy. We congratulate all the participants for their dedication and spirit.'
  },
  {
    id: '3',
    title: 'Tips for Exam Preparation',
    author: 'Senior Counselor',
    date: '2025-03-01',
    image: 'https://picsum.photos/800/400?random=102',
    excerpt: 'As the board exams approach, here are some essential tips to help students manage stress and study effectively.',
    content: 'Exam season can be stressful, but with the right approach, success is guaranteed. \n\n1. **Create a Schedule:** Plan your day effectively. Allocate time for each subject.\n2. **Take Breaks:** Study in chunks of 45 minutes followed by a 10-minute break.\n3. **Healthy Diet:** Eat nutritious food and stay hydrated.\n4. **Sleep:** Ensure you get at least 7-8 hours of sleep.\n\nRemember, consistency is key. Good luck to all our students!'
  }
];

const SchoolContext = createContext<SchoolContextType | undefined>(undefined);

export const SchoolProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notices, setNotices] = useState<Notice[]>(initialNotices);
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [gallery, setGallery] = useState<GalleryItem[]>(initialGallery);
  const [downloads, setDownloads] = useState<DownloadItem[]>(initialDownloads);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(initialBlogPosts);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [settings, setSettings] = useState<SchoolSettings>(defaultSettings);
  const [content, setContent] = useState<SiteContent>(defaultContent);

  const addNotice = (notice: Omit<Notice, 'id'>) => {
    setNotices(prev => [{ ...notice, id: Date.now().toString() }, ...prev]);
  };
  const deleteNotice = (id: string) => setNotices(prev => prev.filter(n => n.id !== id));

  const addEvent = (event: Omit<Event, 'id'>) => {
    setEvents(prev => [{ ...event, id: Date.now().toString() }, ...prev]);
  };
  const deleteEvent = (id: string) => setEvents(prev => prev.filter(e => e.id !== id));

  const addGalleryItem = (item: Omit<GalleryItem, 'id'>) => {
    setGallery(prev => [{ ...item, id: Date.now().toString() }, ...prev]);
  };
  const deleteGalleryItem = (id: string) => setGallery(prev => prev.filter(g => g.id !== id));

  const addDownload = (item: Omit<DownloadItem, 'id'>) => {
    setDownloads(prev => [{ ...item, id: Date.now().toString() }, ...prev]);
  };
  const deleteDownload = (id: string) => setDownloads(prev => prev.filter(d => d.id !== id));

  const addBlogPost = (post: Omit<BlogPost, 'id'>) => {
    setBlogPosts(prev => [{ ...post, id: Date.now().toString() }, ...prev]);
  };
  const deleteBlogPost = (id: string) => setBlogPosts(prev => prev.filter(b => b.id !== id));

  const addEnquiry = (enquiry: Omit<Enquiry, 'id' | 'status' | 'date'>) => {
    const newEnquiry: Enquiry = {
      ...enquiry,
      id: Date.now().toString(),
      status: 'New',
      date: new Date().toLocaleDateString()
    };
    setEnquiries(prev => [newEnquiry, ...prev]);
  };

  const updateEnquiryStatus = (id: string, status: 'New' | 'Contacted') => {
    setEnquiries(prev => prev.map(e => e.id === id ? { ...e, status } : e));
  };

  const updateSettings = (newSettings: SchoolSettings) => setSettings(newSettings);
  const updateContent = (newContent: SiteContent) => setContent(newContent);

  return (
    <SchoolContext.Provider value={{
      notices, events, gallery, downloads, blogPosts, enquiries, settings, content,
      addNotice, deleteNotice,
      addEvent, deleteEvent,
      addGalleryItem, deleteGalleryItem,
      addDownload, deleteDownload,
      addBlogPost, deleteBlogPost,
      addEnquiry, updateEnquiryStatus,
      updateSettings, updateContent
    }}>
      {children}
    </SchoolContext.Provider>
  );
};

export const useSchoolStore = () => {
  const context = useContext(SchoolContext);
  if (!context) throw new Error("useSchoolStore must be used within SchoolProvider");
  return context;
};