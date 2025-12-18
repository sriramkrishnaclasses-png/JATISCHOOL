import React, { useState } from 'react';
import { useSchoolStore } from '../context/SchoolContext';
import { useNavigate, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, FileText, Calendar, Image as ImageIcon, 
  Download, Settings, LogOut, MessageSquare, BookOpen, Trash2, Plus, Edit,
  Users, Bell, CheckCircle, Clock, Search, ChevronRight, MoreHorizontal,
  PenTool, FolderOpen
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
  const { notices, enquiries, events, downloads } = useSchoolStore();
  
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

const ManageNotices: React.FC = () => {
  const { notices, addNotice, deleteNotice } = useSchoolStore();
  const [form, setForm] = useState({ title: '', date: '', category: 'General', description: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addNotice(form);
    setForm({ title: '', date: '', category: 'General', description: '' });
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader title="Create Notice" />
        <CardContent>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <InputGroup label="Notice Title">
              <Input required placeholder="Ex: Summer Vacation" value={form.title} onChange={e => setForm({...form, title: e.target.value})} />
            </InputGroup>
            
            <InputGroup label="Publish Date">
              <Input required type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})} />
            </InputGroup>
            
            <InputGroup label="Category">
              <Select value={form.category} onChange={e => setForm({...form, category: e.target.value})}>
                <option>General</option><option>Holiday</option><option>Exam</option><option>Fee</option><option>Events</option><option>Academics</option>
              </Select>
            </InputGroup>
            
            <InputGroup label="Short Description">
              <Input required placeholder="Brief detail about the notice" value={form.description} onChange={e => setForm({...form, description: e.target.value})} />
            </InputGroup>
            
            <div className="md:col-span-2 pt-2 flex justify-end">
               <Button type="submit"><Plus size={18} /> Publish Notice</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card className="border-none shadow-none bg-transparent">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-gray-50/50 border-b border-gray-200 text-gray-500 uppercase text-xs tracking-wider font-semibold">
                <tr>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Title</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Description</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {notices.map(n => (
                  <tr key={n.id} className="hover:bg-blue-50/30 transition-colors group">
                    <td className="px-6 py-4 text-gray-500 font-medium font-mono text-xs">{n.date}</td>
                    <td className="px-6 py-4 font-bold text-gray-800">{n.title}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                        {n.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500 max-w-xs truncate">{n.description}</td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={() => deleteNotice(n.id)} 
                        className="text-gray-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg transition-all"
                        title="Delete Notice"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
                {notices.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-gray-400">
                      <div className="flex flex-col items-center gap-2">
                        <FileText size={40} className="opacity-10" />
                        <p>No notices found.</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </div>
  );
};

const ManageEvents: React.FC = () => {
    const { events, addEvent, deleteEvent } = useSchoolStore();
    const [form, setForm] = useState({ title: '', date: '', time: '', location: '', description: '' });
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      addEvent(form);
      setForm({ title: '', date: '', time: '', location: '', description: '' });
    };
  
    return (
      <div className="space-y-8">
        <Card>
          <CardHeader title="Schedule Event" />
          <CardContent>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <InputGroup label="Event Title">
                <Input required placeholder="Ex: Annual Sports Day" value={form.title} onChange={e => setForm({...form, title: e.target.value})} />
              </InputGroup>
              
              <InputGroup label="Date">
                <Input required type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})} />
              </InputGroup>

              <InputGroup label="Time">
                <Input required type="time" value={form.time} onChange={e => setForm({...form, time: e.target.value})} />
              </InputGroup>
              
              <InputGroup label="Location">
                <Input required placeholder="Ex: School Auditorium" value={form.location} onChange={e => setForm({...form, location: e.target.value})} />
              </InputGroup>
              
              <div className="md:col-span-2">
                <InputGroup label="Event Details">
                  <Input required placeholder="Describe the event..." value={form.description} onChange={e => setForm({...form, description: e.target.value})} />
                </InputGroup>
              </div>
              
              <div className="md:col-span-2 pt-2 flex justify-end">
                 <Button type="submit"><Plus size={18} /> Add Event</Button>
              </div>
            </form>
          </CardContent>
        </Card>
  
        <Card className="border-none shadow-none bg-transparent">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-gray-50/50 border-b border-gray-200 text-gray-500 uppercase text-xs tracking-wider font-semibold">
                  <tr>
                    <th className="px-6 py-4">When</th>
                    <th className="px-6 py-4">Event</th>
                    <th className="px-6 py-4">Location</th>
                    <th className="px-6 py-4">Description</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {events.map(ev => (
                    <tr key={ev.id} className="hover:bg-blue-50/30 transition-colors group">
                      <td className="px-6 py-4">
                          <div className="font-bold text-gray-800 text-xs bg-gray-100 px-2 py-1 rounded inline-block mb-1">{ev.date}</div>
                          <div className="text-xs text-gray-500 flex items-center gap-1"><Clock size={12}/> {ev.time}</div>
                      </td>
                      <td className="px-6 py-4 font-bold text-gray-800">{ev.title}</td>
                      <td className="px-6 py-4 text-gray-500 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-400"></span>
                        {ev.location}
                      </td>
                      <td className="px-6 py-4 text-gray-500 max-w-xs truncate">{ev.description}</td>
                      <td className="px-6 py-4 text-right">
                        <button 
                          onClick={() => deleteEvent(ev.id)} 
                          className="text-gray-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg transition-all"
                          title="Remove Event"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {events.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-6 py-12 text-center text-gray-400">
                        <div className="flex flex-col items-center gap-2">
                          <Calendar size={40} className="opacity-10" />
                          <p>No events scheduled.</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      </div>
    );
};

const ManageBlog: React.FC = () => {
  const { blogPosts, addBlogPost, deleteBlogPost } = useSchoolStore();
  const [form, setForm] = useState({ title: '', author: '', date: '', image: '', excerpt: '', content: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addBlogPost(form);
    setForm({ title: '', author: '', date: '', image: '', excerpt: '', content: '' });
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader title="Write Blog Post" />
        <CardContent>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <InputGroup label="Article Title">
              <Input required placeholder="Title of the post" value={form.title} onChange={e => setForm({...form, title: e.target.value})} />
            </InputGroup>
            
            <InputGroup label="Author">
               <Input required placeholder="E.g. Principal, Sports Desk" value={form.author} onChange={e => setForm({...form, author: e.target.value})} />
            </InputGroup>

            <InputGroup label="Publish Date">
              <Input required type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})} />
            </InputGroup>

            <InputGroup label="Featured Image URL">
              <Input placeholder="https://..." value={form.image} onChange={e => setForm({...form, image: e.target.value})} />
            </InputGroup>
            
            <div className="md:col-span-2">
               <InputGroup label="Short Excerpt">
                  <Input required placeholder="Short summary for the card view..." value={form.excerpt} onChange={e => setForm({...form, excerpt: e.target.value})} />
               </InputGroup>
            </div>

            <div className="md:col-span-2">
              <InputGroup label="Content">
                <TextArea required rows={6} placeholder="Full content of the article..." value={form.content} onChange={e => setForm({...form, content: e.target.value})} />
              </InputGroup>
            </div>
            
            <div className="md:col-span-2 pt-2 flex justify-end">
               <Button type="submit"><Plus size={18} /> Publish Article</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card className="border-none shadow-none bg-transparent">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-gray-50/50 border-b border-gray-200 text-gray-500 uppercase text-xs tracking-wider font-semibold">
                <tr>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Title</th>
                  <th className="px-6 py-4">Author</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {blogPosts.map(post => (
                  <tr key={post.id} className="hover:bg-blue-50/30 transition-colors group">
                    <td className="px-6 py-4 text-gray-500 font-medium font-mono text-xs">{post.date}</td>
                    <td className="px-6 py-4 font-bold text-gray-800">{post.title}</td>
                    <td className="px-6 py-4 text-gray-600">{post.author}</td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={() => deleteBlogPost(post.id)} 
                        className="text-gray-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg transition-all"
                        title="Delete Post"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
                {blogPosts.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-gray-400">
                      <div className="flex flex-col items-center gap-2">
                        <PenTool size={40} className="opacity-10" />
                        <p>No blog posts found.</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </div>
  );
};

const ManageDownloads: React.FC = () => {
    const { downloads, addDownload, deleteDownload } = useSchoolStore();
    const [form, setForm] = useState({ title: '', category: 'General', url: '' });
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      addDownload(form);
      setForm({ title: '', category: 'General', url: '' });
    };
  
    return (
      <div className="space-y-8">
        <Card>
          <CardHeader title="Add New Resource" />
          <CardContent>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <InputGroup label="Resource Title">
                <Input required placeholder="Ex: Academic Calendar 2025" value={form.title} onChange={e => setForm({...form, title: e.target.value})} />
              </InputGroup>
              
              <InputGroup label="Category">
                <Select value={form.category} onChange={e => setForm({...form, category: e.target.value})}>
                  <option>General</option>
                  <option>Prospectus</option>
                  <option>Syllabus</option>
                  <option>Homework</option>
                  <option>Forms</option>
                </Select>
              </InputGroup>
              
              <div className="md:col-span-2">
                <InputGroup label="File Link / URL">
                  <Input required placeholder="https://..." value={form.url} onChange={e => setForm({...form, url: e.target.value})} />
                </InputGroup>
              </div>
              
              <div className="md:col-span-2 pt-2 flex justify-end">
                 <Button type="submit"><Plus size={18} /> Add to Downloads</Button>
              </div>
            </form>
          </CardContent>
        </Card>
  
        <Card className="border-none shadow-none bg-transparent">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-gray-50/50 border-b border-gray-200 text-gray-500 uppercase text-xs tracking-wider font-semibold">
                  <tr>
                    <th className="px-6 py-4">Title</th>
                    <th className="px-6 py-4">Category</th>
                    <th className="px-6 py-4">Link</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {downloads.map(dl => (
                    <tr key={dl.id} className="hover:bg-blue-50/30 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                           <div className="p-2 bg-gray-50 text-gray-400 group-hover:text-primary group-hover:bg-blue-50 rounded transition-colors">
                              <FileText size={16} />
                           </div>
                           <span className="font-bold text-gray-800">{dl.title}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-gray-100 text-gray-600 uppercase tracking-tighter">
                          {dl.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-400 text-xs truncate max-w-[150px]">{dl.url}</td>
                      <td className="px-6 py-4 text-right">
                        <button 
                          onClick={() => deleteDownload(dl.id)} 
                          className="text-gray-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg transition-all"
                          title="Remove Resource"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {downloads.length === 0 && (
                    <tr>
                      <td colSpan={4} className="px-6 py-12 text-center text-gray-400">
                        <div className="flex flex-col items-center gap-2">
                          <Download size={40} className="opacity-10" />
                          <p>No downloads available.</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      </div>
    );
};

const ManageEnquiries: React.FC = () => {
  const { enquiries, updateEnquiryStatus } = useSchoolStore();

  return (
    <div className="space-y-6">
      <Card className="border-none shadow-none bg-transparent">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 bg-white">
                <h3 className="font-bold text-gray-800 text-lg">Web Enquiries</h3>
            </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-gray-50/50 border-b border-gray-200 text-gray-500 uppercase text-xs tracking-wider font-semibold">
                <tr>
                  <th className="px-6 py-4">Applicant</th>
                  <th className="px-6 py-4">Interested In</th>
                  <th className="px-6 py-4">Message</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {enquiries.map(e => (
                  <tr key={e.id} className="hover:bg-blue-50/30 transition-colors">
                    <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                                {e.name.charAt(0)}
                            </div>
                            <div>
                                <div className="font-bold text-gray-900">{e.name}</div>
                                <div className="text-gray-500 text-xs">{e.email}</div>
                            </div>
                        </div>
                    </td>
                    <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs font-semibold text-gray-600">
                            Class {e.classInterested}
                        </span>
                    </td>
                    <td className="px-6 py-4">
                        <div className="max-w-xs truncate text-gray-600" title={e.message}>
                            {e.message}
                        </div>
                    </td>
                    <td className="px-6 py-4 text-gray-500 text-xs font-mono">{e.date}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="relative inline-block w-32">
                          <Select 
                              className={`py-1.5 pl-2 pr-8 text-xs font-bold border-none shadow-sm ring-1 ring-inset transition-all ${
                                  e.status === 'New' 
                                  ? 'bg-red-50 text-red-700 ring-red-200 focus:ring-red-300' 
                                  : 'bg-green-50 text-green-700 ring-green-200 focus:ring-green-300'
                              }`}
                              value={e.status}
                              onChange={(ev) => updateEnquiryStatus(e.id, ev.target.value as 'New' | 'Contacted')}
                          >
                              <option value="New">New</option>
                              <option value="Contacted">Contacted</option>
                          </Select>
                      </div>
                    </td>
                  </tr>
                ))}
                {enquiries.length === 0 && (
                  <tr>
                      <td colSpan={5} className="px-6 py-12 text-center text-gray-400">
                          <div className="flex flex-col items-center gap-2">
                          <MessageSquare size={40} className="opacity-10" />
                          <p>No enquiries received yet.</p>
                          </div>
                      </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </div>
  );
};

const ManagePages: React.FC = () => {
  const { content, updateContent } = useSchoolStore();
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
        <CardHeader title="About Us Details" />
        <CardContent className="space-y-6">
            <InputGroup label="Main About Text">
                <TextArea 
                  rows={6} 
                  value={localContent.aboutText} 
                  onChange={e => setLocalContent({...localContent, aboutText: e.target.value})} 
                  placeholder="Describe the school..."
                />
            </InputGroup>
            <div className="grid md:grid-cols-2 gap-6">
                <InputGroup label="Our Vision">
                    <TextArea 
                      rows={4} 
                      value={localContent.visionText} 
                      onChange={e => setLocalContent({...localContent, visionText: e.target.value})}
                      placeholder="School vision..."
                    />
                </InputGroup>
                <InputGroup label="Our Mission">
                    <TextArea 
                      rows={4} 
                      value={localContent.missionText} 
                      onChange={e => setLocalContent({...localContent, missionText: e.target.value})}
                      placeholder="School mission..."
                    />
                </InputGroup>
            </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="Section Descriptions" />
        <CardContent className="space-y-6">
            <InputGroup label="Academics Section Intro">
                <TextArea 
                  rows={3} 
                  value={localContent.academicsText} 
                  onChange={e => setLocalContent({...localContent, academicsText: e.target.value})}
                  placeholder="Brief intro for academics section..."
                />
            </InputGroup>
            <InputGroup label="Facilities Section Intro">
                <TextArea 
                  rows={3} 
                  value={localContent.facilitiesText} 
                  onChange={e => setLocalContent({...localContent, facilitiesText: e.target.value})}
                  placeholder="Brief intro for facilities section..."
                />
            </InputGroup>
        </CardContent>
      </Card>

      <div className="flex justify-end pt-2 pb-8">
        <Button onClick={handleSave} className="px-8 py-3 text-base shadow-xl shadow-blue-900/20">
            {isSaved ? <CheckCircle size={20} /> : <CheckCircle size={20} />} 
            {isSaved ? "Saved Successfully!" : "Save Content Changes"}
        </Button>
      </div>
    </div>
  );
};

const ManageSettings: React.FC = () => {
  const { settings, updateSettings } = useSchoolStore();
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

// --- Main Admin Layout ---

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
    <div className="min-h-screen bg-gray-50 flex font-sans text-gray-800 selection:bg-primary/20">
      {/* Sidebar */}
      <aside className="w-72 bg-[#0f172a] text-white flex flex-col fixed h-full z-30 shadow-2xl transition-all duration-300">
        <div className="h-20 flex items-center px-6 border-b border-gray-800 bg-[#020617]">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center font-bold mr-4 shadow-lg shadow-blue-900/40 text-lg">JIS</div>
          <div>
            <h2 className="text-base font-bold tracking-tight text-white">Admin Portal</h2>
            <div className="flex items-center gap-1.5 mt-0.5">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Online</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-8 px-4 space-y-1">
          <div className="px-4 mb-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Main Menu</div>
          {navItems.map(item => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 group relative overflow-hidden
                  ${isActive 
                    ? 'bg-primary text-white shadow-lg shadow-blue-900/30' 
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
              >
                {isActive && <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-400"></div>}
                <item.icon size={20} className={`transition-colors ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-white'}`} />
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-gray-800 bg-[#020617]">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all mb-2 group">
             <div className="p-1.5 rounded-md border border-gray-700 group-hover:border-gray-500 transition-colors"><ChevronRight size={14} /></div>
             Visit Public Site
          </Link>
          <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 w-full text-sm font-medium text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-xl transition-all">
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-72">
        {/* Top Header */}
        <header className="h-20 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 sticky top-0 z-20 px-8 flex justify-between items-center transition-all">
           <div>
               <h1 className="text-2xl font-bold text-gray-800 tracking-tight">{currentPathLabel}</h1>
               <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                  <span className="hover:text-primary cursor-pointer transition-colors">Admin</span>
                  <ChevronRight size={10} />
                  <span className="font-medium text-gray-700">{currentPathLabel}</span>
               </div>
           </div>

           <div className="flex items-center gap-6">
             <div className="relative group cursor-pointer">
                <div className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <Bell size={20} className="text-gray-500 group-hover:text-primary transition-colors" />
                </div>
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
             </div>
             <div className="h-8 w-px bg-gray-200"></div>
             <div className="flex items-center gap-3 cursor-pointer p-1.5 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
               <div className="text-right hidden sm:block">
                 <div className="text-sm font-bold text-gray-800">Administrator</div>
                 <div className="text-xs text-gray-500">Super User</div>
               </div>
               <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-blue-500 text-white flex items-center justify-center font-bold shadow-md ring-2 ring-white">
                 A
               </div>
             </div>
           </div>
        </header>

        {/* Scrollable Content Area */}
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