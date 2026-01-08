
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

declare const gsap: any;
declare const ScrollTrigger: any;

const LandingPage: React.FC = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Ensure elements remain visible by default
    // Inline styles ensure visibility even if GSAP doesn't load
    
    const initAnimations = () => {
      if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Hero Entrance - animate from hidden to visible
        const heroTitle = document.querySelector('.hero-title');
        const heroSubs = document.querySelectorAll('.hero-sub');
        const heroCta = document.querySelector('.hero-cta');

        if (heroTitle && heroSubs.length > 0) {
          // Use fromTo with immediateRender: false to prevent initial state from being applied
          // This keeps elements visible until animation actually starts
          const tl = gsap.timeline({ defaults: { immediateRender: false } });
          
          tl.fromTo('.hero-title', 
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out' }
          )
          .fromTo('.hero-sub',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
            '-=0.8'
          )
          .fromTo('.hero-cta',
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', stagger: 0.2 },
            '-=0.4'
          );
        }

        // Feature Reveal Sequence - animate when scrolled into view
        sectionsRef.current.forEach((section, i) => {
          if (section) {
            // Check if section is already in viewport (85% threshold)
            const rect = section.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const isInView = rect.top < viewportHeight * 0.85 && rect.bottom > 0;
            
            if (!isInView) {
              // Section not yet in view - set hidden state and animate on scroll
              // Use immediateRender: false to prevent hiding elements that are visible on slow loads
              gsap.set(section, { y: 80, opacity: 0, scale: 0.98, immediateRender: false });
              
              gsap.to(section, {
                scrollTrigger: {
                  trigger: section,
                  start: 'top 85%',
                  toggleActions: 'play none none none',
                  once: true
                },
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1.2,
                ease: 'expo.out',
                immediateRender: false
              });
            } else {
              // Section already in view - ensure it's visible, no animation needed
              gsap.set(section, { opacity: 1, y: 0, scale: 1, immediateRender: false });
            }
          }
        });

        // Parallax effect on background elements
        gsap.to('.bg-blob', {
          scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 2
          },
          y: 200,
          rotation: 45,
          scale: 1.2
        });
      }
    };

    // Initialize animations with retry logic
    let attempts = 0;
    const maxAttempts = 20; // Try for up to 1 second (20 * 50ms)
    
    const checkGSAP = () => {
      attempts++;
      if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        // Use requestAnimationFrame to ensure DOM is ready
        requestAnimationFrame(() => {
          initAnimations();
        });
      } else if (attempts < maxAttempts) {
        // Retry after a short delay if GSAP isn't loaded yet
        setTimeout(checkGSAP, 50);
      }
      // If GSAP never loads, elements remain visible due to inline styles
    };

    // Start checking for GSAP
    checkGSAP();

    return () => {
      // Cleanup ScrollTriggers
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      }
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="relative pt-20 md:pt-24 pb-20 px-4 md:px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="bg-blob absolute top-[-10%] left-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-600/10 rounded-full blur-[80px] md:blur-[120px] -z-10"></div>
      <div className="bg-blob absolute bottom-[10%] right-[-5%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-indigo-600/10 rounded-full blur-[80px] md:blur-[120px] -z-10"></div>

      {/* Hero Section */}
      <section className="min-h-[70vh] md:min-h-[85vh] flex flex-col items-center justify-center text-center max-w-6xl mx-auto">
        <div className="hero-sub inline-block px-3 py-1 mb-6 md:mb-8 glass rounded-full text-[10px] md:text-xs font-bold tracking-[0.2em] text-purple-400 uppercase border border-purple-500/20" style={{ opacity: 1 }}>
          The New Era of Vlogging
        </div>
        <h1 className="hero-title text-4xl sm:text-6xl md:text-9xl font-extrabold mb-6 md:mb-8 tracking-tighter leading-[1.1] md:leading-[0.95] max-w-5xl" style={{ opacity: 1 }}>
          Cinema in <br />
          <span className="gradient-text">Every Story.</span>
        </h1>
        <p className="hero-sub text-base md:text-2xl text-gray-400 mb-8 md:mb-12 max-w-2xl font-light leading-relaxed px-4" style={{ opacity: 1 }}>
          A boutique platform for world-class creators and fans who demand the highest production quality.
        </p>
        <div className="hero-cta flex justify-center w-full sm:w-auto" style={{ opacity: 1 }}>
          <Link to="/login" className="group relative bg-white text-black px-8 md:px-12 py-4 md:py-5 rounded-full text-lg md:text-xl font-bold hover:bg-purple-600 hover:text-white transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] active:scale-95 text-center">
            Get Started
            <div className="absolute inset-0 rounded-full bg-white group-hover:blur-md -z-10 transition-all opacity-0 group-hover:opacity-30"></div>
          </Link>
        </div>
      </section>

      {/* Philosophy Section - Updated to be text-focused and centered */}
      <section ref={addToRefs} className="max-w-4xl mx-auto py-24 md:py-48 text-center" style={{ opacity: 1 }}>
        <div className="px-2">
          <h2 className="text-4xl md:text-7xl font-bold mb-8 md:mb-12 leading-tight">Beyond the <br/><span className="text-purple-500 italic">Algorithm.</span></h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 md:mb-16 font-light leading-relaxed">
            VlogVibe isn't a social network—it's a curated gallery. We've removed the noise to focus on what matters: the art of visual storytelling.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 text-left max-w-3xl mx-auto">
            {[
              "8K Raw Streaming Capability",
              "Exclusive 1-on-1 Creator Access",
              "Ad-Free Immersive Experience",
              "Professional Color Grading Tools"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 md:gap-4 text-base md:text-lg font-medium text-gray-200 glass p-5 rounded-2xl border border-white/5">
                <div className="w-6 h-6 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section ref={addToRefs} className="max-w-7xl mx-auto py-16 md:py-32 border-t border-white/5" style={{ opacity: 1 }}>
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6">Experience the <span className="gradient-text">Elite.</span></h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4">Accessing the world's best content requires just one simple step.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          {[
            { step: "01", title: "Apply/Join", desc: "Create your premium account to join the circle of visual artists.", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
            { step: "02", title: "Discover", desc: "Once inside, explore our hand-vetted library of cinematic vlogs.", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
            { step: "03", title: "Interact", desc: "Engage in private conversations with the storytellers behind the lens.", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" }
          ].map((item, i) => (
            <div key={i} className="p-8 md:p-10 rounded-2xl md:rounded-[3rem] glass border border-white/5 relative group hover:bg-white/5 transition-all">
              <div className="text-6xl md:text-7xl font-black text-white/5 absolute top-4 md:top-6 right-6 md:right-10 group-hover:text-purple-500/10 transition-colors">{item.step}</div>
              <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-600/10 rounded-xl md:rounded-2xl flex items-center justify-center text-purple-400 mb-6 md:mb-8">
                <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path></svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section ref={addToRefs} className="max-w-5xl mx-auto py-16 md:py-32 text-center px-2" style={{ opacity: 1 }}>
        <div className="p-10 md:p-20 rounded-3xl md:rounded-[4rem] bg-gradient-to-b from-purple-900/20 to-transparent border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          <h2 className="text-3xl md:text-6xl font-extrabold mb-6 md:mb-8 leading-tight">Unlock the Gallery.</h2>
          <p className="text-gray-300 text-lg md:text-xl mb-8 md:mb-12 font-light">Sign in to begin your cinematic journey through the world's finest vlogs.</p>
          <Link to="/login" className="inline-block bg-white text-black px-10 md:px-16 py-4 md:py-6 rounded-full text-xl md:text-2xl font-black hover:bg-purple-600 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-2xl">
            Enter Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
