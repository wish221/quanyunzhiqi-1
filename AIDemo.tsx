import React, { useState, useEffect } from 'react';
import { Brain, MessageCircle } from 'lucide-react';

const AIDemo = () => {
  const [typingText, setTypingText] = useState('');
  const fullText = '您好！我是您的泉城文化向导。您可以问我关于济南的任何文化问题，例如："趵突泉为什么被称为天下第一泉？" 或 "请介绍一下济南的齐长城遗迹"。';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypingText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="ai-demo" className="py-20 bg-gradient-to-b from-blue-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 relative inline-block">
            AI文化向导体验
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-yellow-600 rounded-full"></div>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-8">
            与懂济南的AI向导对话，获取权威、生动的文化解读
          </p>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1 p-12">
              <h3 className="text-3xl font-bold text-slate-800 mb-6">
                与泉城AI向导对话
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                我们的AI文化向导经过济南地方志、历史文献和专业研究的深度训练，能够以自然对话方式解答您的各类文化问题。
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                无论是趵突泉的历史变迁、曲水亭街的典故传说，还是济南特色美食的由来，AI向导都能在15秒内提供图文并茂的生动解答。
              </p>
              <button className="bg-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                开始对话
              </button>
            </div>

            <div className="flex-1 bg-gradient-to-br from-blue-800 to-slate-800 p-12 flex items-center justify-center relative overflow-hidden">
              {/* Floating Animation */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-16 h-16 bg-yellow-400 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-blue-300 rounded-full animate-pulse delay-500"></div>
              </div>

              <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl relative animate-float">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-slate-800">泉城AI向导</span>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-4 mb-4">
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {typingText}
                    <span className="animate-pulse">|</span>
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-blue-800 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-800 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-blue-800 rounded-full animate-bounce delay-200"></div>
                  </div>
                  <span className="text-xs text-slate-500">AI正在思考...</span>
                </div>

                {/* Chat bubble tail */}
                <div className="absolute -bottom-2 left-12 w-4 h-4 bg-white transform rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDemo;