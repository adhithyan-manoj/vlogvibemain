
import React from 'react';
import { Link } from 'react-router-dom';
import { Vlog } from '../types';

interface Props {
  vlog: Vlog;
}

const VlogCard: React.FC<Props> = ({ vlog }) => {
  return (
    <Link 
      to={`/vlog/${vlog.id}`} 
      className="group relative block rounded-3xl overflow-hidden glass border border-white/5 hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(167,139,250,0.15)]"
    >
      <div className="aspect-video w-full overflow-hidden relative">
        <img 
          src={vlog.thumbnail} 
          alt={vlog.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Play Icon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 scale-75 group-hover:scale-100 transition-transform duration-500">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[9px] md:text-[10px] uppercase tracking-widest bg-purple-500/10 text-purple-400 px-2.5 py-1 rounded-md font-black border border-purple-500/20">
            {vlog.category}
          </span>
          <span className="text-gray-500 text-[10px] md:text-xs font-medium uppercase tracking-tight">• {vlog.date}</span>
        </div>
        
        <h3 className="text-base md:text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors leading-tight line-clamp-2">
          {vlog.title}
        </h3>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <img src={vlog.creator.avatar} className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-white/10 object-cover" alt="" />
            <span className="text-[11px] md:text-xs font-semibold text-gray-400 group-hover:text-gray-200 transition-colors">{vlog.creator.name}</span>
          </div>
          <span className="text-[10px] md:text-xs text-gray-500 font-medium">{vlog.views} views</span>
        </div>
      </div>

      {/* Watch Now Button Overlay */}
      <div className="absolute inset-x-0 bottom-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out pointer-events-none">
        <div className="w-full text-center text-xs font-black uppercase tracking-[0.2em] bg-white text-black py-3 rounded-2xl shadow-xl shadow-black/20">
          Watch Now
        </div>
      </div>
    </Link>
  );
};

export default VlogCard;
