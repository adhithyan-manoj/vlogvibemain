
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_CHATS, CURRENT_USER, MOCK_USERS } from '../constants';
import ChatWindow from '../components/ChatWindow';
import { ChatPreview, User } from '../types';

const MessagesPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedChatUser, setSelectedChatUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<'One-to-One' | 'Groups' | 'Requests'>('One-to-One');
  
  const tabs: ('One-to-One' | 'Groups' | 'Requests')[] = ['One-to-One', 'Groups', 'Requests'];

  const filteredChats = MOCK_CHATS.filter(chat => chat.category === activeTab);

  const getStatusIcon = (icon?: string, unread?: number) => {
    if (unread) {
      return (
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
          {icon === 'camera' && (
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          )}
        </div>
      );
    }

    switch (icon) {
      case 'play':
        return (
          <div className="w-6 h-6 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-500">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          </div>
        );
      case 'camera':
        return (
          <div className="text-gray-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </div>
        );
      case 'dot':
        return <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>;
      default:
        return null;
    }
  };

  const handleSelectChat = (chat: ChatPreview) => {
    const user = MOCK_USERS[chat.creatorId];
    if (user) {
      setSelectedChatUser(user);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col max-w-2xl mx-auto md:border-x md:border-white/5 font-sans">
      <div className="sticky top-0 z-20 bg-black px-4 py-5 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/vlogs')}
            className="p-1 -ml-1 text-white hover:text-gray-400 transition-colors"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div className="flex items-center gap-1.5 cursor-pointer active:opacity-60 transition-opacity">
            <h1 className="text-xl font-extrabold tracking-tight">__{CURRENT_USER.name.split(' ')[0].toLowerCase()}__6x</h1>
            <svg className="w-4 h-4 mt-0.5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 px-4 py-6">
        {tabs.map(tab => {
          const count = MOCK_CHATS.filter(c => c.category === tab).length;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-2xl text-[14px] font-bold transition-all ${
                activeTab === tab ? 'bg-white text-black' : 'bg-[#1a1a1a] text-gray-400 hover:bg-[#262626]'
              }`}
            >
              {tab === 'One-to-One' ? 'Primary' : tab} {count > 0 && <span className="text-[10px] ml-1.5 opacity-40">{count}</span>}
            </button>
          );
        })}
      </div>

      <div className="flex-1 overflow-y-auto pb-24 px-2 sm:px-4">
        {filteredChats.map((chat) => (
          <button
            key={chat.id}
            onClick={() => handleSelectChat(chat)}
            className="w-full flex items-center gap-4 py-4 px-2 rounded-2xl active:bg-white/5 transition-all group"
          >
            <div className="relative flex-shrink-0">
              <div className="p-0.5">
                <img src={chat.avatar} className="w-[64px] h-[64px] rounded-full object-cover border border-white/5" alt="" />
              </div>
              {chat.type === 'personal' && (
                <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-[3.5px] border-black rounded-full"></div>
              )}
            </div>
            <div className="flex-1 text-left min-w-0">
              <h3 className={`text-[17px] font-bold truncate leading-tight ${chat.unreadCount ? 'text-white' : 'text-gray-200'}`}>
                {chat.name}
              </h3>
              <div className="flex items-center gap-1.5 text-[14px] text-gray-500 mt-0.5">
                <span className={`truncate ${chat.unreadCount ? 'text-white font-bold' : ''}`}>
                  {chat.lastMessage}
                </span>
                <span className="opacity-40">•</span>
                <span className="flex-shrink-0 opacity-70">{chat.timestamp}</span>
              </div>
            </div>
            <div className="flex-shrink-0">
              {getStatusIcon(chat.statusIcon, chat.unreadCount)}
            </div>
          </button>
        ))}
        {filteredChats.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-gray-500 text-center px-8">
            <p className="font-bold uppercase tracking-widest text-[11px] opacity-30">No active conversations</p>
          </div>
        )}
      </div>

      {selectedChatUser && (
        <ChatWindow creator={selectedChatUser} onClose={() => setSelectedChatUser(null)} />
      )}
    </div>
  );
};

export default MessagesPage;
