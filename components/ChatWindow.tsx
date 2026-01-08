
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Message } from '../types';

interface Props {
  creator: User;
  onClose: () => void;
}

const ChatWindow: React.FC<Props> = ({ creator, onClose }) => {
  const navigate = useNavigate();
  
  const getInitialMessages = (): Message[] => {
    const now = Date.now();
    return [
      {
        id: 'pre-1',
        senderId: creator.id,
        text: `Hey Jordan! Thanks for checking out the new edit. I was really pushing the limits with the low-light shots this time.`,
        timestamp: new Date(now - 1000 * 60 * 60 * 4)
      },
      {
        id: 'pre-2',
        senderId: 'me',
        text: `The noise reduction you did was flawless. What ISO were you pushing?`,
        timestamp: new Date(now - 1000 * 60 * 60 * 3.5)
      },
      {
        id: 'pre-3',
        senderId: creator.id,
        text: `Believe it or not, I was at 12800 for some of those forest scenes. The new sensor is a beast!`,
        timestamp: new Date(now - 1000 * 60 * 60 * 3.2)
      },
      {
        id: '1',
        senderId: creator.id,
        text: `Anyway, welcome to my private studio space. I'm excited to hear more of your thoughts as I wrap up the next project!`,
        timestamp: new Date(now - 1000 * 60 * 15)
      }
    ];
  };

  const [messages, setMessages] = useState<Message[]>(getInitialMessages());
  const [inputText, setInputText] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'instant'
      });
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages]);

  const handleSend = () => {
    if (!inputText.trim()) return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      senderId: 'me',
      text: inputText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputText('');
    
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        senderId: creator.id,
        text: "That's a really interesting point. I'll definitely keep it in mind for the next one! 🙌",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, response]);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[300] w-full h-[100dvh] flex flex-col bg-black md:bg-black/95 backdrop-blur-3xl animate-in slide-in-from-right duration-300">
      
      {/* Premium Sticky Header */}
      <div className="sticky top-0 z-10 px-4 py-3 flex items-center justify-between border-b border-white/5 bg-black/80 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <button 
            onClick={onClose} 
            className="p-1 text-white hover:text-gray-400 transition-all"
            aria-label="Back"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate(`/profile/${creator.id}`)}>
            <div className="relative">
              <img src={creator.avatar} className="w-10 h-10 rounded-full object-cover ring-1 ring-white/10" alt="" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-black rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <h4 className="text-sm font-bold text-white leading-tight">{creator.name}</h4>
              <span className="text-[10px] text-gray-500 font-medium">Active now</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-5 text-white/90">
          <button className="hover:text-purple-400 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </button>
          <button className="hover:text-purple-400 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 00-2 2z" />
            </svg>
          </button>
          <button className="hover:text-purple-400 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Message List */}
      <div 
        ref={scrollRef} 
        className="flex-1 overflow-y-auto px-4 py-6 space-y-1 scrollbar-hide flex flex-col max-w-3xl mx-auto w-full"
      >
        <div className="flex flex-col items-center py-12 mb-6">
          <img src={creator.avatar} className="w-20 h-20 rounded-full mb-3 border border-white/10" alt="" />
          <h5 className="text-lg font-bold text-white">{creator.name}</h5>
          <p className="text-gray-500 text-xs font-medium mb-4 uppercase tracking-wider">{creator.role}</p>
          <button 
            onClick={() => navigate(`/profile/${creator.id}`)}
            className="text-xs font-bold text-white bg-white/10 px-4 py-1.5 rounded-lg hover:bg-white/20 transition-all"
          >
            View Profile
          </button>
        </div>

        {messages.map((msg, index) => {
          const isMe = msg.senderId === 'me';
          const prevMsg = messages[index - 1];
          const nextMsg = messages[index + 1];
          
          const isFirstInGroup = !prevMsg || prevMsg.senderId !== msg.senderId;
          const isLastInGroup = !nextMsg || nextMsg.senderId !== msg.senderId;

          return (
            <div key={msg.id} className={`flex flex-col ${isMe ? 'items-end' : 'items-start'} ${isLastInGroup ? 'mb-3' : 'mb-0.5'}`}>
              <div className={`flex items-end gap-2 max-w-[80%] md:max-w-[70%] group`}>
                {!isMe && isLastInGroup && (
                  <img src={creator.avatar} className="w-7 h-7 rounded-full mb-0.5" alt="" />
                )}
                {!isMe && !isLastInGroup && (
                  <div className="w-7 h-7" />
                )}
                
                <div className={`px-4 py-2.5 text-sm md:text-[15px] transition-all duration-200 ${
                  isMe 
                  ? 'bg-gradient-to-tr from-purple-600 to-indigo-600 text-white' 
                  : 'bg-[#262626] text-white'
                } ${
                  isMe
                    ? `${isFirstInGroup ? 'rounded-t-2xl rounded-bl-2xl' : ''} ${!isFirstInGroup && !isLastInGroup ? 'rounded-l-2xl' : ''} ${isLastInGroup ? 'rounded-b-2xl rounded-tl-2xl' : ''} ${isFirstInGroup && isLastInGroup ? 'rounded-2xl' : ''}`
                    : `${isFirstInGroup ? 'rounded-t-2xl rounded-br-2xl' : ''} ${!isFirstInGroup && !isLastInGroup ? 'rounded-r-2xl' : ''} ${isLastInGroup ? 'rounded-b-2xl rounded-tr-2xl' : ''} ${isFirstInGroup && isLastInGroup ? 'rounded-2xl' : ''}`
                }`}>
                  {msg.text}
                </div>
              </div>
              
              {isLastInGroup && (
                <span className={`text-[10px] text-gray-500 mt-1 ${isMe ? 'mr-2' : 'ml-10'} font-medium uppercase tracking-tighter`}>
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Premium Input Bar */}
      <div className="p-4 bg-black border-t border-white/5 pb-8 md:pb-6">
        <div className="max-w-3xl mx-auto flex items-center gap-3 bg-[#121212] rounded-full px-4 py-2 border border-white/10 focus-within:border-white/20 transition-all">
          <button className="p-2 text-white hover:text-purple-400 transition-colors">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <circle cx="12" cy="13" r="3" strokeWidth="2.5" />
              </svg>
            </div>
          </button>
          
          <input 
            type="text" 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Message..."
            className="flex-1 bg-transparent border-none focus:outline-none text-sm py-2 text-white placeholder-gray-500"
          />

          {inputText.trim() ? (
            <button 
              onClick={handleSend}
              className="text-sm font-bold text-blue-500 hover:text-white transition-all px-2"
            >
              Send
            </button>
          ) : (
            <div className="flex items-center gap-3 pr-1 text-white">
              <button className="hover:text-purple-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </button>
              <button className="hover:text-purple-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
              <button className="hover:text-red-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
