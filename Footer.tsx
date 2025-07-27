import React from 'react';
import { Mail, Phone, MapPin, Github, MessageCircle, Youtube } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer id="contact" className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6 relative inline-block">
              泉韵志启
              <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-yellow-600"></div>
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              用AI技术传承济南文化，打造智能化文化体验平台，让泉城魅力焕发新生。
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Features Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              功能导航
              <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-yellow-600"></div>
            </h3>
            <ul className="space-y-3">
              {[
                '文化智能问答',
                '文化旅游路线',
                '历史故事讲述',
                '地方志检索',
                '民俗体验指南'
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-300 hover:text-yellow-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cultural Features */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              济南文化
              <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-yellow-600"></div>
            </h3>
            <ul className="space-y-3">
              {[
                '泉水文化',
                '古城老街',
                '齐长城遗址',
                '传统民俗',
                '鲁菜美食'
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-300 hover:text-yellow-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              联系我们
              <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-yellow-600"></div>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-300">
                <Mail className="w-5 h-5 text-yellow-400" />
                contact@quanyunzhiqi.com
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Phone className="w-5 h-5 text-yellow-400" />
                +86 531 8888 7777
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-yellow-400" />
                济南市历下区文化东路
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-yellow-400 transition-colors duration-300">
                  合作伙伴
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-yellow-400 transition-colors duration-300">
                  意见反馈
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-400">
            &copy; 2024 泉韵志启 - AI赋能济南特色文化平台 | 鲁ICP备XXXXXX号
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;