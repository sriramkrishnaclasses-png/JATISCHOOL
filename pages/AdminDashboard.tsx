import React, { useState } from 'react';
import { useSchoolStore } from '../context/SchoolContext';
import { useNavigate, Routes, Route, Link, useLocation } from 'react-router-dom';
import Logo from '../components/Logo';
// Explicitly import SchoolContextType to resolve type inference issues in sub-components
import { SchoolContextType } from '../types';
import { 
  LayoutDashboard, FileText, Calendar, Image as ImageIcon, 
  Download, Settings, LogOut, MessageSquare, BookOpen, Trash2, Plus, Edit,
  Users, Bell, CheckCircle, Clock, Search, ChevronRight, MoreHorizontal,
  PenTool, FolderOpen, Folder, Filter, ExternalLink, X
} from 'lucide-react';

// --- UI Components Design System ---

interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_8px_16px_-4px_rgba(0,0,0,0.08)] ${className}`}>
    {children}
  </div>
);

interface CardHeaderProps {
  title: string;
  action?: React.ReactNode;
}

const CardHeader: React.FC<CardHeaderProps> = ({ title, action }) => (
  <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-white">
    <h3 className="font-bold text-gray-800 text-lg tracking-tight">{title}</h3>
    {action}
  </div>
);

interface CardContentProps {
  children?: React.ReactNode;
  className?: string;
}

const CardContent: React.FC<CardContentProps> = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

interface InputGroupProps {
  label: string;
  children?: React.ReactNode;
}

const InputGroup: React.FC<InputGroupProps> = ({ label, children }) => (
  <div className="space-y-2">
    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">{label}</label>
    {children}
  </div>
);

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input 
    {...props} 
    className={`w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 shadow-sm placeholder-gray-400
      focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10
      disabled:bg-gray-50 disabled:text-gray-500 transition-all duration-200 ${props.className || ''}`}
  />
);

const Select = (props: React.SelectHTMLAttributes<HTMLSelectElement>) => (
  <select 
    {...props} 
    className={`w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 shadow-sm
      focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 ${props.className || ''}`}
  />
);

const TextArea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea 
    {...props} 
    className={`w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 shadow-sm placeholder-gray-400
      focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 ${props.className || ''}`}
  />
);

const Button = ({ variant = 'primary', className = '', children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'danger' | 'secondary' }) => {
  const variants = {
    primary: 'bg-primary text-white hover:bg-blue-800 shadow-lg shadow-blue-900/20 hover:shadow-xl hover:shadow-blue-900/30',
    danger: 'bg-white text-red-600 border border-red-100 hover:bg-red-50 hover:border-red-200 shadow-sm',
    secondary: 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:text-gray-900 shadow-sm'
  };
  
  return (
    <button 
      {...props} 
      className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

// --- Sub-components for Admin Sections ---

const DashboardHome: React.FC = () => {
  // Explicitly casting useSchoolStore() to SchoolContextType to avoid unknown type inference errors
  const { notices, enquiries, events, downloads } = useSchoolStore() as SchoolContextType;
  
  const stats = [
    { label: 'Total Students', value: '450', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50', ring: 'ring-blue-100' },
    { label: 'Teachers', value: '35', icon: BookOpen, color: 'text-emerald-600', bg: 'bg-emerald-50', ring: 'ring-emerald-100' },
    { label: 'New Enquiries', value: enquiries.filter(e => e.status === 'New').length.toString(), icon: MessageSquare, color: 'text-orange-600', bg: 'bg-orange-50', ring: 'ring-orange-100' },
    { label: 'Active Downloads', value: downloads.length.toString(), icon: Download, color: 'text-purple-600', bg: 'bg-purple-50', ring: 'ring-purple-100' },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-default border-none ring-1 ring-gray-100">
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{stat.label}</p>
                <h3 className="text-3xl font-extrabold text-gray-800 group-hover:text-primary transition-colors">{stat.value}</h3>
              </div>
              <div className={`p-4 rounded-xl ${stat.bg} ${stat.color} ${stat.ring} ring-1 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon size={24} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="h-full flex flex-col">
          <CardHeader 
            title="Recent Notices" 
            action={<Link to="/admin/notices" className="text-xs text-primary font-bold hover:underline flex items-center gap-1">View All <ChevronRight size={12}/></Link>}
          />
          <div className="flex-1 overflow-auto">
            <div className="divide-y divide-gray-50">
              {notices.slice(0, 5).map(n => (
                <div key={n.id} className="p-4 hover:bg-gray-50 transition-colors flex items-start gap-4 group cursor-pointer">
                  <div className="bg-gray-50 group-hover:bg-blue-50 text-gray-500 group-hover:text-primary p-2.5 rounded-lg text-center min-w-[3.5rem] transition-colors border border-gray-100">
                     <span className="block text-xs font-bold uppercase tracking-tighter">{new Date(n.date).toLocaleString('default', { month: 'short' })}</span>
                     <span className="block text-xl font-bold leading-none">{new Date(n.date).getDate()}</span>
                  </div>
                  <div className="flex-1 min-w-0 pt-0.5">
                    <h4 className="text-sm font-bold text-gray-800 line-clamp-1 group-hover:text-primary transition-colors">{n.title}</h4>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">{n.description}</p>
                  </div>
                  <span className="flex-shrink-0 inline-flex items-center px-2 py-1 rounded text-[10px] font-medium bg-gray-100 text-gray-600">
                    {n.category}
                  </span>
                </div>
              ))}
              {notices.length === 0 && <div className="p-8 text-center text-gray-400 text-sm">No notices found</div>}
            </div>
          </div>
        </Card>

        <Card className="h-full flex flex-col">
          <CardHeader 
            title="Recent Enquiries" 
            action={<Link to="/admin/enquiries" className="text-xs text-primary font-bold hover:underline flex items-center gap-1">View All <ChevronRight size={12}/></Link>}
          />
          <div className="flex-1 overflow-auto">
             <div className="divide-y divide-gray-50">
               {enquiries.slice(0, 5).map(e => (
                 <div key={e.id} className="p-4 hover:bg-gray-50 transition-colors flex justify-between items-center group">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 text-gray-600 flex items-center justify-center font-bold text-sm border border-gray-200">
                        {e.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-800 group-hover:text-primary transition-colors">{e.name}</h4>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-xs text-gray-500">{e.classInterested}</span>
                          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                          <span className="text-xs text-gray-400">{e.date}</span>
                        </div>
                      </div>
                   </div>
                   <span className={`text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider ${e.status === 'New' ? 'bg-red-50 text-red-600 ring-1 ring-red-100' : 'bg-green-50 text-green-600 ring-1 ring-green-100'}`}>
                     {e.status}
                   </span>
                 </div>
               ))}
               {enquiries.length === 0 && <div className="p-8 text-center text-gray-400 text-sm">No enquiries received yet.</div>}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

// --- Management Components ---

const ManageNotices: React.FC = () => {
  const { notices, addNotice, deleteNotice } = useSchoolStore() as SchoolContextType;
  const [showAdd, setShowAdd] = useState(false);
  const [formData, setFormData] = useState({ title: '', date: new Date().toISOString().split('T')[0], category: 'General', description: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addNotice(formData);
    setShowAdd(false);
    setFormData({ title: '', date: new Date().toISOString().split('T')[0], category: 'General', description: '' });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Manage Notices</h2>
        <Button onClick={() => setShowAdd(!showAdd)}>
          {showAdd ? <X size={18} /> : <Plus size={18} />}
          {showAdd ? 'Cancel' : 'Add New Notice'}
        </Button>
      </div>

      {showAdd && (
        <Card>
          <CardHeader title="Add New Notice" />
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <InputGroup label="Notice Title">
                  <Input required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
                </InputGroup>
                <InputGroup label="Date">
                  <Input type="date" required value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
                </InputGroup>
              </div>
              <InputGroup label="Category">
                <Select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}>
                  <option value="General">General</option>
                  <option value="Holiday">Holiday</option>
                  <option value="Events">Events</option>
                  <option value="Academics">Academics</option>
                  <option value="Fee">Fee</option>
                </Select>
              </InputGroup>
              <InputGroup label="Description">
                <TextArea rows={4} required value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
              </InputGroup>
              <Button type="submit">Save Notice</Button>
            </form>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-500 uppercase text-[10px] font-bold tracking-wider">
                <tr>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Title</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {notices.map(notice => (
                  <tr key={notice.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium">{notice.date}</td>
                    <td className="px-6 py-4">{notice.title}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 rounded bg-blue-50 text-blue-600 text-[10px] font-bold uppercase">{notice.category}</span>
                    </td>
                    <td className="px-6 py-4">
                      <button onClick={() => deleteNotice(notice.id)} className="text-red-500 hover:text-red-700">
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const ManageEvents: React.FC = () => {
  const { events, addEvent, deleteEvent } = useSchoolStore() as SchoolContextType;
  const [showAdd, setShowAdd] = useState(false);
  const [formData, setFormData] = useState({ title: '', date: '', time: '', location: '', description: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addEvent(formData);
    setShowAdd(false);
    setFormData({ title: '', date: '', time: '', location: '', description: '' });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Manage Events</h2>
        <Button onClick={() => setShowAdd(!showAdd)}>
          {showAdd ? <X size={18} /> : <Plus size={18} />}
          {showAdd ? 'Cancel' : 'Add New Event'}
        </Button>
      </div>

      {showAdd && (
        <Card>
          <CardHeader title="Add New Event" />
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <InputGroup label="Event Title">
                <Input required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
              </InputGroup>
              <div className="grid md:grid-cols-2 gap-4">
                <InputGroup label="Date">
                  <Input type="date" required value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
                </InputGroup>
                <InputGroup label="Time">
                  <Input placeholder="e.g. 10:00 AM" required value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})} />
                </InputGroup>
              </div>
              <InputGroup label="Location">
                <Input required value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} />
              </InputGroup>
              <InputGroup label="Description">
                <TextArea rows={4} required value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
              </InputGroup>
              <Button type="submit">Save Event</Button>
            </form>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-500 uppercase text-[10px] font-bold tracking-wider">
                <tr>
                  <th className="px-6 py-4">Date / Time</th>
                  <th className="px-6 py-4">Event</th>
                  <th className="px-6 py-4">Location</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {events.map(event => (
                  <tr key={event.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="text-gray-800 font-medium">{event.date}</div>
                      <div className="text-xs text-gray-500">{event.time}</div>
                    </td>
                    <td className="px-6 py-4 font-bold text-primary">{event.title}</td>
                    <td className="px-6 py-4 text-gray-600">{event.location}</td>
                    <td className="px-6 py-4">
                      <button onClick={() => deleteEvent(event.id)} className="text-red-500 hover:text-red-700">
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const ManageDownloads: React.FC = () => {
  const { downloads, addDownload, deleteDownload } = useSchoolStore() as SchoolContextType;
  const [showAdd, setShowAdd] = useState(false);
  const [formData, setFormData] = useState({ title: '', category: 'General', url: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addDownload(formData);
    setShowAdd(false);
    setFormData({ title: '', category: 'General', url: '' });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Resources & Downloads</h2>
        <Button onClick={() => setShowAdd(!showAdd)}>
          {showAdd ? <X size={18} /> : <Plus size={18} />}
          {showAdd ? 'Cancel' : 'Add New File'}
        </Button>
      </div>

      {showAdd && (
        <Card>
          <CardHeader title="Add New Resource" />
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <InputGroup label="File Title">
                <Input required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
              </InputGroup>
              <InputGroup label="Category">
                <Select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}>
                  <option value="General">General</option>
                  <option value="Prospectus">Prospectus</option>
                  <option value="Forms">Forms</option>
                  <option value="Syllabus">Syllabus</option>
                  <option value="Homework">Homework</option>
                </Select>
              </InputGroup>
              <InputGroup label="Download URL / File Link">
                <Input placeholder="https://..." required value={formData.url} onChange={e => setFormData({...formData, url: e.target.value})} />
              </InputGroup>
              <Button type="submit">Add Resource</Button>
            </form>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-500 uppercase text-[10px] font-bold tracking-wider">
                <tr>
                  <th className="px-6 py-4">Title</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Link</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {downloads.map(dl => (
                  <tr key={dl.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-bold text-gray-800">{dl.title}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 rounded bg-stone-100 text-stone-600 text-[10px] font-bold uppercase">{dl.category}</span>
                    </td>
                    <td className="px-6 py-4">
                      <a href={dl.url} target="_blank" rel="noreferrer" className="text-primary hover:underline flex items-center gap-1">
                        <ExternalLink size={14} /> View
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <button onClick={() => deleteDownload(dl.id)} className="text-red-500 hover:text-red-700">
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const ManageBlog: React.FC = () => {
  const { blogPosts, addBlogPost, deleteBlogPost } = useSchoolStore() as SchoolContextType;
  const [showAdd, setShowAdd] = useState(false);
  const [formData, setFormData] = useState({ title: '', author: 'Principal', date: new Date().toISOString().split('T')[0], image: '', excerpt: '', content: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addBlogPost(formData);
    setShowAdd(false);
    setFormData({ title: '', author: 'Principal', date: new Date().toISOString().split('T')[0], image: '', excerpt: '', content: '' });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Manage Blog</h2>
        <Button onClick={() => setShowAdd(!showAdd)}>
          {showAdd ? <X size={18} /> : <Plus size={18} />}
          {showAdd ? 'Cancel' : 'New Post'}
        </Button>
      </div>

      {showAdd && (
        <Card>
          <CardHeader title="Create New Blog Post" />
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <InputGroup label="Post Title">
                  <Input required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
                </InputGroup>
                <InputGroup label="Author">
                  <Input required value={formData.author} onChange={e => setFormData({...formData, author: e.target.value})} />
                </InputGroup>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <InputGroup label="Date">
                  <Input type="date" required value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
                </InputGroup>
                <InputGroup label="Featured Image URL">
                  <Input placeholder="https://..." value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} />
                </InputGroup>
              </div>
              <InputGroup label="Short Excerpt">
                <Input required value={formData.excerpt} onChange={e => setFormData({...formData, excerpt: e.target.value})} />
              </InputGroup>
              <InputGroup label="Full Content">
                <TextArea rows={10} required value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} />
              </InputGroup>
              <Button type="submit">Publish Post</Button>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {blogPosts.map(post => (
          <Card key={post.id}>
            <div className="flex gap-4 p-4">
              <div className="w-24 h-24 rounded-lg bg-stone-100 shrink-0 overflow-hidden">
                <img src={post.image || 'https://picsum.photos/200/200'} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-800 line-clamp-1">{post.title}</h3>
                <p className="text-xs text-gray-400 mt-1">{post.date} | By {post.author}</p>
                <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                <div className="flex justify-end mt-2">
                  <button onClick={() => deleteBlogPost(post.id)} className="text-red-500 hover:text-red-700 text-xs font-bold flex items-center gap-1">
                    <Trash2 size={14} /> Delete
                  </button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

const ManagePages: React.FC = () => {
  const { content, updateContent } = useSchoolStore() as SchoolContextType;
  const [localContent, setLocalContent] = useState(content);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    updateContent(localContent);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className="space-y-8 max-w-5xl">
      <Card>
        <CardHeader title="Website Text Content" />
        <CardContent className="space-y-6">
          <InputGroup label="About Us Text">
            <TextArea rows={5} value={localContent.aboutText} onChange={e => setLocalContent({...localContent, aboutText: e.target.value})} />
          </InputGroup>
          <div className="grid md:grid-cols-2 gap-6">
            <InputGroup label="Vision Statement">
              <TextArea rows={4} value={localContent.visionText} onChange={e => setLocalContent({...localContent, visionText: e.target.value})} />
            </InputGroup>
            <InputGroup label="Mission Statement">
              <TextArea rows={4} value={localContent.missionText} onChange={e => setLocalContent({...localContent, missionText: e.target.value})} />
            </InputGroup>
          </div>
          <InputGroup label="Academics Page Text">
            <TextArea rows={4} value={localContent.academicsText} onChange={e => setLocalContent({...localContent, academicsText: e.target.value})} />
          </InputGroup>
          <InputGroup label="Facilities Page Text">
            <TextArea rows={4} value={localContent.facilitiesText} onChange={e => setLocalContent({...localContent, facilitiesText: e.target.value})} />
          </InputGroup>
        </CardContent>
      </Card>
      <div className="flex justify-end pt-2 pb-8">
        <Button onClick={handleSave}>
          {isSaved ? <CheckCircle size={18} /> : <CheckCircle size={18} />} 
          {isSaved ? "Saved Content!" : "Update Website Content"}
        </Button>
      </div>
    </div>
  );
};

const ManageEnquiries: React.FC = () => {
  const { enquiries, updateEnquiryStatus } = useSchoolStore() as SchoolContextType;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Student Enquiries</h2>
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-500 uppercase text-[10px] font-bold tracking-wider">
                <tr>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Student Name</th>
                  <th className="px-6 py-4">Class</th>
                  <th className="px-6 py-4">Contact Details</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {enquiries.map(enquiry => (
                  <tr key={enquiry.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">{enquiry.date}</td>
                    <td className="px-6 py-4 font-bold text-gray-800">{enquiry.name}</td>
                    <td className="px-6 py-4">{enquiry.classInterested}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span>{enquiry.phone}</span>
                        <span className="text-xs text-gray-400">{enquiry.email}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${enquiry.status === 'New' ? 'bg-red-50 text-red-600 ring-1 ring-red-100' : 'bg-green-50 text-green-600 ring-1 ring-green-100'}`}>
                        {enquiry.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {enquiry.status === 'New' && (
                        <Button variant="secondary" onClick={() => updateEnquiryStatus(enquiry.id, 'Contacted')} className="text-[10px] py-1.5 px-3">
                          Mark Contacted
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
                {enquiries.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-gray-400 italic">No student enquiries received yet.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const ManageSettings: React.FC = () => {
  const { settings, updateSettings } = useSchoolStore() as SchoolContextType;
  const [localSettings, setLocalSettings] = useState(settings);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    updateSettings(localSettings);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className="space-y-8 max-w-5xl">
      <Card>
        <CardHeader title="General School Information" />
        <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <InputGroup label="School Name">
                    <Input value={localSettings.name} onChange={e => setLocalSettings({...localSettings, name: e.target.value})} />
                </InputGroup>
                <InputGroup label="Tagline">
                    <Input value={localSettings.tagline} onChange={e => setLocalSettings({...localSettings, tagline: e.target.value})} />
                </InputGroup>
                <InputGroup label="Phone Number">
                    <Input value={localSettings.phone} onChange={e => setLocalSettings({...localSettings, phone: e.target.value})} />
                </InputGroup>
                <InputGroup label="Email Address">
                    <Input value={localSettings.email} onChange={e => setLocalSettings({...localSettings, email: e.target.value})} />
                </InputGroup>
                <div className="md:col-span-2">
                    <InputGroup label="Full Address">
                        <Input value={localSettings.address} onChange={e => setLocalSettings({...localSettings, address: e.target.value})} />
                    </InputGroup>
                </div>
            </div>
        </CardContent>
      </Card>

      <div className="flex justify-end pt-2 pb-8">
        <Button onClick={handleSave} className="px-8 py-3 text-base shadow-xl shadow-blue-900/20">
            {isSaved ? <CheckCircle size={20} /> : <CheckCircle size={20} />} 
            {isSaved ? "Saved Successfully!" : "Save Configuration"}
        </Button>
      </div>
    </div>
  );
};

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    navigate('/login');
  };

  const navItems = [
    { path: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/admin/notices', label: 'Manage Notices', icon: FileText },
    { path: '/admin/events', label: 'Manage Events', icon: Calendar },
    { path: '/admin/downloads', label: 'Downloads', icon: Download },
    { path: '/admin/blog', label: 'Manage Blog', icon: PenTool },
    { path: '/admin/pages', label: 'Manage Content', icon: BookOpen },
    { path: '/admin/enquiries', label: 'Enquiries', icon: MessageSquare },
    { path: '/admin/settings', label: 'Settings', icon: Settings },
  ];

  const currentPathLabel = navItems.find(n => n.path === location.pathname)?.label || 'Dashboard';

  return (
    <div className="min-h-screen bg-stone-50 flex font-sans text-gray-800 selection:bg-primary/20">
      {/* Sidebar */}
      <aside className="w-72 bg-[#020617] text-white flex flex-col fixed h-full z-30 shadow-2xl transition-all duration-300">
        <div className="h-32 flex flex-col items-center justify-center border-b border-white/10 bg-black/20">
          <Logo />
          <h2 className="text-sm font-bold tracking-[0.3em] text-secondary uppercase">Admin Portal</h2>
        </div>

        <div className="flex-1 overflow-y-auto py-8 px-4 space-y-1">
          <div className="px-4 mb-4 text-[10px] font-bold text-stone-500 uppercase tracking-[0.2em]">Navigation</div>
          {navItems.map(item => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 group relative overflow-hidden
                  ${isActive 
                    ? 'bg-secondary text-primary shadow-lg shadow-black/30' 
                    : 'text-stone-400 hover:bg-white/5 hover:text-white'
                  }`}
              >
                {isActive && <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>}
                <item.icon size={18} className={`transition-colors ${isActive ? 'text-primary' : 'text-stone-600 group-hover:text-white'}`} />
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-white/10 bg-black/40">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-stone-500 hover:text-secondary transition-all mb-2 group">
             <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
             Public Website
          </Link>
          <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 w-full text-sm font-bold text-red-400 hover:bg-red-500/10 rounded-xl transition-all">
            <LogOut size={18} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-72">
        <header className="h-20 bg-white/80 backdrop-blur-md shadow-sm border-b border-stone-200 sticky top-0 z-20 px-8 flex justify-between items-center transition-all">
           <div>
               <h1 className="text-xl font-bold text-primary tracking-tight">{currentPathLabel}</h1>
               <div className="flex items-center gap-2 text-[10px] text-stone-400 mt-0.5 uppercase tracking-widest font-bold">
                  <span>Portal</span>
                  <ChevronRight size={10} />
                  <span className="text-stone-600">{currentPathLabel}</span>
               </div>
           </div>

           <div className="flex items-center gap-6">
             <div className="p-2 rounded-full hover:bg-stone-100 transition-colors relative cursor-pointer">
                <Bell size={20} className="text-stone-500" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-secondary rounded-full border-2 border-white"></span>
             </div>
             <div className="h-8 w-px bg-stone-200"></div>
             <div className="flex items-center gap-3 cursor-pointer">
               <div className="text-right hidden sm:block">
                 <div className="text-xs font-bold text-primary uppercase tracking-tighter">Administrator</div>
                 <div className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">Live Session</div>
               </div>
               <div className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-extrabold shadow-sm border-2 border-white">
                 A
               </div>
             </div>
           </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto pb-20">
          <Routes>
            <Route index element={<DashboardHome />} />
            <Route path="notices" element={<ManageNotices />} />
            <Route path="events" element={<ManageEvents />} />
            <Route path="downloads" element={<ManageDownloads />} />
            <Route path="blog" element={<ManageBlog />} />
            <Route path="pages" element={<ManagePages />} />
            <Route path="enquiries" element={<ManageEnquiries />} />
            <Route path="settings" element={<ManageSettings />} />
            <Route path="*" element={<DashboardHome />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;