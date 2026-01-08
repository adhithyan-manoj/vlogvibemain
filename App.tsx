
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Link, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import LandingPage from './pages/LandingPage';
import VlogsPage from './pages/VlogsPage';
import VlogDetailPage from './pages/VlogDetailPage';
import LoginPage from './pages/LoginPage';
import MessagesPage from './pages/MessagesPage';
import ProfilePage from './pages/ProfilePage';
import AccountPage from './pages/AccountPage';

const AppContent: React.FC = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  
  const isLanding = location.pathname === '/';
  const isLogin = location.pathname === '/login';

  // Listen for login changes
  useEffect(() => {
    const checkAuth = () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    };
    window.addEventListener('storage', checkAuth);
    window.addEventListener('authChange', checkAuth);
    return () => {
      window.removeEventListener('storage', checkAuth);
      window.removeEventListener('authChange', checkAuth);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black">
      {/* Background Glows */}
      {!isLanding && !isLogin && (
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/10 rounded-full blur-[120px]"></div>
        </div>
      )}

      {/* Navigation visible only if logged in AND not on landing page */}
      {isLoggedIn && !isLanding && <Navigation />}
      
      <main className={`${isLoggedIn && !isLanding ? 'md:pl-64 pb-20 md:pb-0' : ''}`}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          
          {/* Protected Routes */}
          <Route path="/vlogs" element={isLoggedIn ? <VlogsPage /> : <Navigate to="/login" />} />
          <Route path="/vlog/:id" element={isLoggedIn ? <VlogDetailPage /> : <Navigate to="/login" />} />
          <Route path="/messages" element={isLoggedIn ? <MessagesPage /> : <Navigate to="/login" />} />
          <Route path="/profile/:id" element={isLoggedIn ? <ProfilePage /> : <Navigate to="/login" />} />
          <Route path="/account" element={isLoggedIn ? <AccountPage /> : <Navigate to="/login" />} />
          
          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>

      {isLanding && (
        <footer className="py-20 px-6 border-t border-white/5 mt-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
            <div>
              <div className="text-2xl font-extrabold tracking-tighter flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center rotate-12">V</div>
                <span className="gradient-text italic font-serif">VlogVibe</span>
              </div>
              <p className="text-gray-500 text-sm max-w-xs">
                The world's first premium-only vlogging platform for serious visual artists.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              <div className="space-y-3">
                <h5 className="font-bold text-sm uppercase tracking-widest text-gray-400">Platform</h5>
                <Link to="/vlogs" className="block text-gray-500 hover:text-white transition-colors text-sm">Discover</Link>
                <Link to="/vlogs" className="block text-gray-500 hover:text-white transition-colors text-sm">Trending</Link>
              </div>
              <div className="space-y-3">
                <h5 className="font-bold text-sm uppercase tracking-widest text-gray-400">Support</h5>
                <p className="text-gray-500 hover:text-white transition-colors cursor-pointer text-sm">Help Center</p>
                <p className="text-gray-500 hover:text-white transition-colors cursor-pointer text-sm">Safety</p>
              </div>
              <div className="space-y-3 col-span-2 md:col-span-1">
                <h5 className="font-bold text-sm uppercase tracking-widest text-gray-400">Newsletter</h5>
                <div className="flex gap-2">
                  <input type="text" placeholder="Email" className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-xs w-32 focus:outline-none" />
                  <button className="bg-white text-black text-xs font-bold px-4 py-2 rounded-lg">Join</button>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 text-center text-[10px] text-gray-600 font-bold uppercase tracking-widest">
            © 2024 VlogVibe Inc. All cinematic rights reserved.
          </div>
        </footer>
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
