import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { SchoolProvider } from './context/SchoolContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Facilities from './pages/Facilities';
import Gallery from './pages/Gallery';
import Downloads from './pages/Downloads';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import SinglePost from './pages/SinglePost';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import PrivacyPolicy from './pages/PrivacyPolicy';
import SiteMap from './pages/SiteMap';
import TermsAndConditions from './pages/TermsAndConditions';
import MandatoryDisclosures from './pages/MandatoryDisclosures';
import CBSEAffiliation from './pages/CBSEAffiliation';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAdminAuthenticated') === 'true';
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

const App: React.FC = () => {
  return (
    <SchoolProvider>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          {/* Public Routes with Layout */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<SinglePost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/mandatory-disclosures" element={<MandatoryDisclosures />} />
            <Route path="/cbse-affiliation" element={<CBSEAffiliation />} />
            <Route path="/site-map" element={<SiteMap />} />
          </Route>

          {/* Auth & Admin Routes */}
          <Route path="/login" element={<Login />} />
          <Route 
            path="/admin/*" 
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
          
          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </SchoolProvider>
  );
};

export default App;