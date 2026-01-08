
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_USERS, MOCK_VLOGS } from '../constants';
import VlogCard from '../components/VlogCard';

const ProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const user = MOCK_USERS[id || ''];
  const userVlogs = MOCK_VLOGS.filter(v => v.creator.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!user) {
    return (
      <div className="pt-40 text-center">
        <h2 className="text-3xl font-bold">User not found</h2>
        <Link to="/vlogs" className="text-purple-400 mt-4 inline-block underline">Discover Creators</Link>
      </div>
    );
  }

  return (
    <div className="pt-10 md:pt-20 pb-20 px-4 md:px-12 max-w-7xl mx-auto">
      {/* Header Profile Area */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 mb-16 border-b border-white/5 pb-16">
        <div className="relative group">
          <div className="absolute inset-0 bg-purple-600 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <img src={user.avatar} className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-white/10 shadow-2xl object-cover relative z-10" alt={user.name} />
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-6">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight">{user.name}</h1>
            <div className="flex gap-3 justify-center md:justify-start">
              <Link to="/messages" className="bg-white text-black px-12 py-3 rounded-2xl font-black hover:bg-purple-600 hover:text-white transition-all active:scale-95 shadow-xl">Message</Link>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-start gap-8 md:gap-12 mb-8">
            <div className="text-center md:text-left">
              <div className="text-xl font-black">{userVlogs.length}</div>
              <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">Vlogs</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-xl font-black">1.4M</div>
              <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">Followers</div>
            </div>
          </div>
          
          <div className="max-w-xl">
            <h3 className="text-lg font-bold text-purple-400 mb-2 uppercase tracking-widest text-xs">{user.role}</h3>
            <p className="text-gray-400 leading-relaxed text-lg font-light">
              Crafting visual narratives that challenge the status quo. Award-winning storyteller focused on the intersection of minimalism and cinematic production.
            </p>
          </div>
        </div>
      </div>

      {/* Grid of Vlogs */}
      <div>
        <div className="flex items-center gap-4 mb-10">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
          <h2 className="text-xl font-black uppercase tracking-[0.2em]">Latest Content</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {userVlogs.map(vlog => (
            <VlogCard key={vlog.id} vlog={vlog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
