import React from 'react';
import { Droplets, Building, Shield, UtensilsCrossed } from 'lucide-react';

const Highlights = () => {
  const highlights = [
    {
      icon: Droplets,
      title: '泉水文化',
      description: '"家家泉水，户户垂杨"的独特景观，72名泉各具特色，构成济南的城市灵魂。',
      color: 'bg-blue-600'
    },
    {
      icon: Building,
      title: '古城风貌',
      description: '保存完好的古城墙、老街巷，见证济南千年历史变迁与城市发展脉络。',
      color: 'bg-amber-600'
    },
    {
      icon: Shield,
      title: '齐长城遗址',
      description: '中国最古老的长城遗迹之一，见证齐鲁大地的历史沧桑与军事智慧。',
      color: 'bg-emerald-600'
    },
    {
      icon: UtensilsCrossed,
      title: '鲁菜美食',
      description: '糖醋黄河鲤鱼、九转大肠等经典鲁菜，展现济南独特的美食文化。',
      color: 'bg-red-600'
    }
  ];

  return (
    <section id="highlight" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 relative inline-block">
            济南文化特色
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-yellow-600 rounded-full"></div>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-8">
            探索泉城独特魅力，感受千年文化底蕴
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group text-center p-8 bg-blue-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3"
            >
              <div className={`w-20 h-20 ${highlight.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <highlight.icon className="w-8 h-8 text-white" />
              </div>
              
              <h4 className="text-2xl font-bold text-slate-800 mb-4">
                {highlight.title}
              </h4>
              
              <p className="text-slate-600 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;