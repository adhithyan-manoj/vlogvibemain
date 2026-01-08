
import React, { useState } from 'react';
import VlogCard from '../components/VlogCard';
import { MOCK_VLOGS } from '../constants';

const VlogsPage: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Travel', 'Lifestyle', 'Tutorial', 'Technology'];

  const filteredVlogs = filter === 'All' 
    ? MOCK_VLOGS 
    : MOCK_VLOGS.filter(v => v.category === filter);

  return (
    <div className="pt-8 md:pt-16 pb-20 px-4 md:px-8 max-w-7xl">
      <div className="mb-10">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-6">Explore</h1>
        
        <div className="flex flex-wrap gap-2 md:gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all border ${
                filter === cat 
                ? 'bg-white text-black border-white' 
                : 'bg-white/5 text-gray-400 border-white/5 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {filteredVlogs.map(vlog => (
          <VlogCard key={vlog.id} vlog={vlog} />
        ))}
      </div>

      {filteredVlogs.length === 0 && (
        <div className="py-40 text-center">
          <p className="text-gray-500 text-lg">No vlogs found in this category yet.</p>
        </div>
      )}
    </div>
  );
};

export default VlogsPage;
