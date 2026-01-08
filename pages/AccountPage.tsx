
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CURRENT_USER } from '../constants';

const AccountPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    window.dispatchEvent(new Event('authChange'));
    navigate('/');
  };

  // Dummy account data
  const membershipData = {
    createdDate: "October 14, 2023",
    lastLogin: "Today, 10:24 AM",
    plan: "Elite Creator",
    status: "Verified"
  };

  return (
    <div className="pt-10 md:pt-20 pb-24 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-purple-500 rounded-full blur-[60px] opacity-20"></div>
          <img 
            src={CURRENT_USER.avatar} 
            className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-white/10 object-cover shadow-2xl relative z-10" 
            alt={CURRENT_USER.name} 
          />
          <button className="absolute bottom-2 right-2 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center border-4 border-black z-20 hover:scale-110 transition-transform">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path></svg>
          </button>
        </div>

        <h1 className="text-4xl md:text-5xl font-black mb-2 tracking-tight">{CURRENT_USER.name}</h1>
        <p className="text-purple-400 font-bold uppercase tracking-widest text-sm mb-8">{CURRENT_USER.role}</p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-10 py-4 bg-white text-black font-black rounded-2xl hover:bg-purple-600 hover:text-white transition-all active:scale-95 shadow-xl">Edit Profile</button>
          <button onClick={handleLogout} className="px-10 py-4 bg-white/5 text-white border border-white/10 font-bold rounded-2xl hover:bg-red-500/20 hover:text-red-400 hover:border-red-400/50 transition-all active:scale-95">Log Out</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Membership Info Card */}
        <div className="p-8 rounded-[2.5rem] glass border border-white/10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-3.067-1.443 1 1 0 01-.285-1.05l1.738-5.42-1.233-.616a1 1 0 01.894-1.79l1.599.8L11 5.323V3a1 1 0 01-1-1zm-5 4a2 2 0 110-4 2 2 0 010 4zm0 2a4 4 0 100-8 4 4 0 000 8zM1 10a1 1 0 011-1h1a1 1 0 110 2H2a1 1 0 01-1-1zm14 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
          </div>
          <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            Membership Details
          </h3>
          <div className="space-y-6">
            <div className="flex flex-col gap-1 border-b border-white/5 pb-4">
              <span className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">Member Since</span>
              <span className="text-lg font-bold text-gray-200">{membershipData.createdDate}</span>
            </div>
            <div className="flex flex-col gap-1 border-b border-white/5 pb-4">
              <span className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">Last Session</span>
              <span className="text-lg font-bold text-gray-200">{membershipData.lastLogin}</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <div className="flex flex-col gap-1">
                <span className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">Account Status</span>
                <span className="text-sm font-black text-green-400 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  {membershipData.status}
                </span>
              </div>
              <div className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-black text-purple-400 uppercase tracking-widest">
                {membershipData.plan}
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Overview Card */}
        <div className="p-8 rounded-[2.5rem] glass border border-white/10">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            Analytics Overview
          </h3>
          <div className="space-y-6">
            <div className="flex justify-between items-end border-b border-white/5 pb-4">
              <span className="text-gray-400 text-sm font-medium uppercase tracking-widest">Total Views</span>
              <span className="text-2xl font-black">2.8M</span>
            </div>
            <div className="flex justify-between items-end border-b border-white/5 pb-4">
              <span className="text-gray-400 text-sm font-medium uppercase tracking-widest">Growth</span>
              <span className="text-2xl font-black text-green-400">+14%</span>
            </div>
            <div className="flex justify-between items-end pb-2">
              <span className="text-gray-400 text-sm font-medium uppercase tracking-widest">Studio Rank</span>
              <span className="text-2xl font-black gradient-text">Master</span>
            </div>
          </div>
        </div>

        {/* Studio Settings Card */}
        <div className="p-8 rounded-[2.5rem] glass border border-white/10 md:col-span-2">
          <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
            Studio Preferences
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex flex-col">
                <span className="font-bold">Privacy Mode</span>
                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-tight">Hide activity from fans</span>
              </div>
              <div className="w-10 h-5 bg-purple-600 rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex flex-col">
                <span className="font-bold">4K Rendering</span>
                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-tight">Max quality output</span>
              </div>
              <div className="w-10 h-5 bg-purple-600 rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
