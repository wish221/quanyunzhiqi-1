import React from 'react';
import { MessageCircle, Route, BookOpen, Search, Zap, Smartphone } from 'lucide-react';

interface FeaturesProps {
  onChatClick: () => void;
}

const Features: React.FC<FeaturesProps> = ({ onChatClick }) => {
  const features = [
    {
      icon: MessageCircle,
      title: '文化智能问答',
      description: '3秒内感知AI文化向导，15秒内获得权威、生动解答。可持续深入探索济南文化各个方面。',
      tag: 'AI驱动',
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: Route,
      title: '文化旅游路线',
      description: '"泉水志"、"古城老街志"、"齐长城"三大主题路线，智能推荐个性化文化探索旅程。',
      tag: '旅游规划',
      color: 'from-emerald-600 to-emerald-800'
    },
    {
      icon: BookOpen,
      title: '历史故事讲述',
      description: '沉浸式互动历史故事体验，支持随时自由提问，让历史人物与事件生动重现。',
      tag: '沉浸体验',
      color: 'from-purple-600 to-purple-800'
    },
    {
      icon: Search,
      title: '地方志检索解读',
      description: '提供济南历代地方志原文多维度检索，AI解读入口让古籍焕发新生。',
      tag: '学术研究',
      color: 'from-orange-600 to-orange-800'
    },
    {
      icon: Zap,
      title: '民俗体验指南',
      description: '了解济南民俗活动历史、体验时间与预约方式，参与传统节日庆典。',
      tag: '民俗体验',
      color: 'from-red-600 to-red-800'
    },
    {
      icon: Smartphone,
      title: 'AR泉水探索',
      description: '通过增强现实技术，在手机上体验济南名泉的历史变迁与地质构造。',
      tag: '互动体验',
      color: 'from-indigo-600 to-indigo-800'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 relative inline-block">
            六大核心功能
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-yellow-600 rounded-full"></div>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-8">
            融合AI技术与济南文化，为您提供沉浸式文化体验
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
            >
              <div className="relative">
                <div className={`h-48 bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                  <feature.icon className="w-16 h-16 text-white" />
                </div>
                <div className="absolute top-4 right-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {feature.tag}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <button 
                  onClick={index === 0 ? onChatClick : undefined}
                  className="text-blue-800 font-semibold hover:text-blue-900 transition-colors duration-300 flex items-center gap-2 group-hover:gap-3"
                >
                  {index === 0 ? '立即体验' : '了解更多'}
                  <span className="transition-transform duration-300">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;