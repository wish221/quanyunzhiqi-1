import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 overflow-hidden">
      {/* Wave Background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          className="relative block w-full h-32 md:h-40"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-blue-800"
          ></path>
        </svg>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
        <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
          AI赋能济南文化，开启泉城新体验
        </h2>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-4xl mx-auto leading-relaxed">
          探索千年泉城历史，体验智能文化之旅。AI向导带您领略济南独特的泉水文化、历史故事与民俗风情
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => scrollToSection('features')}
            className="group bg-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl shadow-blue-800/30 flex items-center gap-3"
          >
            探索功能
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button
            onClick={() => scrollToSection('ai-demo')}
            className="group border-2 border-blue-800 text-blue-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-800 hover:text-white transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3"
          >
            <Play className="w-5 h-5" />
            体验AI向导
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-200/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-yellow-200/30 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-blue-300/20 rounded-full animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;