
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_VLOGS } from '../constants';
import ChatWindow from '../components/ChatWindow';

const VlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [showChat, setShowChat] = useState(false);
  
  const vlog = MOCK_VLOGS.find(v => v.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!vlog) {
    return (
      <div className="pt-40 text-center px-4">
        <h2 className="text-2xl font-bold">Vlog not found</h2>
        <Link to="/vlogs" className="text-purple-400 mt-4 inline-block underline">Back to Discovery</Link>
      </div>
    );
  }

  return (
    <div className="pt-20 md:pt-24 pb-20">
      {/* Video Area */}
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 mb-8 md:mb-12">
        <div className="aspect-video w-full rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/10 relative group bg-black shadow-2xl">
          <img src={vlog.thumbnail} className="w-full h-full object-cover opacity-80" alt={vlog.title} />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-14 h-14 md:w-20 md:h-20 bg-white text-black rounded-full flex items-center justify-center pl-1 hover:scale-110 transition-transform active:scale-90 shadow-xl">
              <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        <div className="lg:col-span-2">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4 md:mb-6 leading-tight">{vlog.title}</h1>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-y border-white/10 mb-8 gap-6">
            <div className="flex items-center gap-4">
              <img src={vlog.creator.avatar} className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-purple-500/30" alt="" />
              <div>
                <h4 className="font-bold text-base md:text-lg">{vlog.creator.name}</h4>
                <p className="text-gray-500 text-xs md:text-sm">{vlog.creator.role}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 justify-around sm:justify-start">
              <div className="text-center">
                <div className="text-base md:text-lg font-bold">{vlog.views}</div>
                <div className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest font-bold">Views</div>
              </div>
              <div className="text-center">
                <div className="text-base md:text-lg font-bold">42K</div>
                <div className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest font-bold">Likes</div>
              </div>
            </div>
          </div>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">{vlog.content}</p>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="glass p-5 md:p-6 rounded-2xl md:rounded-[2rem] lg:sticky lg:top-32 border border-white/5">
            <button 
              onClick={() => setShowChat(!showChat)}
              className="w-full bg-purple-600 text-white p-4 rounded-2xl flex items-center justify-center gap-3 font-bold hover:bg-purple-500 transition-all active:scale-95 shadow-lg shadow-purple-900/20 text-base"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
              Chat with Creator
            </button>
            
            <div className="mt-10">
              <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Up Next</h4>
              <div className="space-y-4">
                {MOCK_VLOGS.filter(v => v.id !== id).slice(0, 3).map(v => (
                  <Link key={v.id} to={`/vlog/${v.id}`} className="flex gap-4 group">
                    <div className="w-24 h-16 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={v.thumbnail} className="w-full h-full object-cover group-hover:scale-110 transition-transform" alt="" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold line-clamp-2 group-hover:text-purple-400 transition-colors">{v.title}</h5>
                      <p className="text-[10px] text-gray-500 mt-0.5">{v.creator.name}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showChat && (
        <ChatWindow creator={vlog.creator} onClose={() => setShowChat(false)} />
      )}
    </div>
  );
};

export default VlogDetailPage;
