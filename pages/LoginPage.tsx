
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Instant login as requested
    localStorage.setItem('isLoggedIn', 'true');
    window.dispatchEvent(new Event('authChange'));
    navigate('/vlogs');
  };

  return (
    <div className="min-h-screen pt-24 pb-12 flex items-center justify-center px-6 relative overflow-hidden bg-[#030014]">
      {/* Back Button */}
      <button 
        onClick={() => navigate('/')}
        className="fixed top-8 left-8 z-50 flex items-center gap-3 text-white/40 hover:text-white transition-all group active:scale-95"
      >
        <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:border-white/20 transition-all">
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <span className="text-xs font-black uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all">Back</span>
      </button>

      {/* Dynamic light effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[150px] animate-pulse"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] animate-pulse"></div>

      <div className="glass-dark w-full max-w-lg p-10 md:p-16 rounded-[4rem] shadow-2xl relative z-10 border border-white/10 backdrop-blur-3xl">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl flex items-center justify-center rotate-12 mx-auto mb-8 text-3xl font-black shadow-lg shadow-purple-500/20">V</div>
          <h1 className="text-4xl font-extrabold mb-4 tracking-tight">Access Granted</h1>
          <p className="text-gray-400 font-light">Enter your credentials to access the studio.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-8">
          <div className="group">
            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-3 group-focus-within:text-purple-400 transition-colors">Email Address</label>
            <div className="relative">
              <input 
                type="email" 
                placeholder="name@studio.com" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-purple-500/50 transition-all font-medium placeholder-gray-600"
                required
              />
              <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206"></path></svg>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="flex justify-between mb-3">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 group-focus-within:text-purple-400 transition-colors">Security Key</label>
              <a href="#" className="text-[10px] font-black uppercase tracking-widest text-purple-400 hover:text-white transition-colors">Recovery</a>
            </div>
            <div className="relative">
              <input 
                type="password" 
                placeholder="••••••••••••" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-purple-500/50 transition-all font-medium placeholder-gray-600"
                required
              />
              <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              </div>
            </div>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-white text-black py-5 rounded-2xl font-black text-xl hover:bg-purple-600 hover:text-white transition-all transform active:scale-[0.98] shadow-2xl hover:shadow-purple-500/20"
          >
            Sign In to Studio
          </button>
        </form>

        <div className="mt-12 pt-10 border-t border-white/10 text-center">
          <p className="text-sm text-gray-500 font-medium">
            New to the platform? <Link to="/login" className="text-purple-400 font-bold hover:text-white transition-colors">Apply for Membership</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
