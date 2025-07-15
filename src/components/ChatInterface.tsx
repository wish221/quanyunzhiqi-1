import React, { useState, useRef, useEffect } from 'react';
import { Send, ArrowLeft, Brain, User, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatInterfaceProps {
  onBack: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ onBack }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: '您好！我是您的泉城文化向导。我对济南的历史文化、名胜古迹、民俗传统都非常了解。您可以问我关于济南的任何文化问题，比如：\n\n• 趵突泉为什么被称为"天下第一泉"？\n• 济南有哪些著名的历史人物？\n• 曲水亭街有什么历史典故？\n• 济南的传统美食有哪些特色？\n\n请随时向我提问！',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // 模拟AI回复的文化知识库
  const getCulturalResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes('趵突泉') || lowerQuestion.includes('第一泉')) {
      return '趵突泉被誉为"天下第一泉"有着深厚的历史渊源：\n\n🌊 **历史地位**：趵突泉有2700多年的历史，是济南72名泉之首，自古就有"济南泉水甲天下，趵突为魁"的美誉。\n\n💎 **独特之处**：\n• 泉水常年恒温18℃，清澈甘甜\n• 三股泉水昼夜喷涌，声如隐雷\n• 泉池呈方形，用青石砌成，古朴典雅\n\n📚 **文化底蕴**：历代文人墨客如李白、杜甫、苏轼等都曾为趵突泉题诗作赋，留下了"润泽春茶味更真"等千古佳句。\n\n🏛️ **现代价值**：趵突泉不仅是济南的象征，更是中华泉水文化的重要载体，承载着深厚的历史文化内涵。';
    }
    
    if (lowerQuestion.includes('曲水亭街') || lowerQuestion.includes('老街')) {
      return '曲水亭街是济南最具特色的历史文化街区：\n\n🏮 **历史渊源**：始建于北宋，因街中有曲水亭而得名，是济南现存最完整的明清古街之一。\n\n🌸 **建筑特色**：\n• 青石板路，古色古香\n• 传统四合院建筑群\n• "家家泉水，户户垂杨"的独特景观\n\n📖 **文化典故**：\n• 相传乾隆皇帝南巡时曾在此品茶赏泉\n• 街中的王府池子是古代王府的私家园林\n• 许多老济南的民俗故事都发生在这里\n\n🎭 **现代传承**：如今这里汇集了众多传统手工艺店铺、茶馆和文化展馆，是体验老济南文化的绝佳去处。';
    }
    
    if (lowerQuestion.includes('美食') || lowerQuestion.includes('鲁菜') || lowerQuestion.includes('特色菜')) {
      return '济南作为鲁菜发源地，有着丰富的美食文化：\n\n🍽️ **经典鲁菜**：\n• **糖醋黄河鲤鱼**：选用黄河鲤鱼，外酥内嫩，酸甜适口\n• **九转大肠**：济南名菜，色泽红润，口感丰富\n• **油爆双脆**：考验刀工和火候的经典菜品\n• **奶汤蒲菜**：清淡鲜美，营养丰富\n\n🥟 **特色小吃**：\n• **把子肉**：肥而不腻，入口即化\n• **甜沫**：济南人的早餐最爱\n• **油旋**：酥脆香甜的传统点心\n• **锅贴**：外焦内嫩，汁多味美\n\n🍵 **泉水茶文化**：用趵突泉水泡制的大碗茶，是济南独有的茶文化体验。\n\n这些美食不仅味道独特，更承载着深厚的文化内涵和历史传承。';
    }
    
    if (lowerQuestion.includes('历史人物') || lowerQuestion.includes('名人')) {
      return '济南历史上涌现出众多杰出人物：\n\n👑 **古代名人**：\n• **扁鹊**：春秋战国时期名医，中医学奠基人\n• **房玄龄**：唐朝宰相，贞观之治的重要推动者\n• **李清照**：宋代女词人，"千古第一才女"\n• **辛弃疾**：南宋爱国词人，豪放派代表\n\n🎨 **文化巨匠**：\n• **李攀龙**：明代文学家，"后七子"领袖\n• **王士禛**：清代诗人，神韵派代表\n• **蒲松龄**：清代小说家，《聊斋志异》作者\n\n🏛️ **近现代名人**：\n• **季羡林**：国学大师，东方学泰斗\n• **老舍**：现代文学家，《骆驼祥子》作者\n\n这些杰出人物为济南增添了深厚的文化底蕴，也是泉城文化的重要组成部分。';
    }
    
    if (lowerQuestion.includes('72名泉') || lowerQuestion.includes('名泉')) {
      return '济南"72名泉"是泉城最著名的文化符号：\n\n💧 **四大泉群**：\n• **趵突泉群**：以趵突泉为首，包括金线泉、皇华泉等\n• **黑虎泉群**：以黑虎泉为代表，泉水从虎头口中喷出\n• **珍珠泉群**：泉水如珍珠串串，晶莹剔透\n• **五龙潭泉群**：古木参天，泉水清幽\n\n🌟 **著名名泉**：\n• **趵突泉**：天下第一泉\n• **黑虎泉**：三个虎头昼夜喷水\n• **珍珠泉**：水泡如珠，美不胜收\n• **五龙潭**：传说有五条龙居住\n• **芙蓉泉**：清代被誉为"芙蓉美人"\n\n🏛️ **文化价值**：每一处名泉都有其独特的历史故事和文化内涵，共同构成了济南独特的泉水文化体系。\n\n这些名泉不仅是自然景观，更是济南人精神家园的重要组成部分。';
    }
    
    if (lowerQuestion.includes('齐长城') || lowerQuestion.includes('长城')) {
      return '齐长城是中国最古老的长城，具有重要的历史价值：\n\n🏰 **历史地位**：\n• 建于春秋战国时期（公元前7-3世纪）\n• 比秦长城早400多年，被称为"长城之父"\n• 全长1000多公里，是世界上最古老的长城\n\n🗺️ **济南段特色**：\n• 主要分布在长清、历城等区域\n• 利用山势地形，因地制宜建造\n• 保存相对完好的城墙遗址和烽火台\n\n⚔️ **军事价值**：\n• 齐国抵御外敌入侵的重要防线\n• 体现了古代军事工程的智慧\n• 见证了齐鲁大地的历史变迁\n\n🏛️ **文化意义**：\n• 2006年被列入全国重点文物保护单位\n• 是研究中国古代军事史的重要实物资料\n• 承载着深厚的齐鲁文化内涵\n\n如今的齐长城遗址已成为重要的文化旅游资源和爱国主义教育基地。';
    }
    
    // 默认回复
    return `感谢您的提问！关于"${question}"，这是一个很有意思的济南文化话题。\n\n作为您的泉城文化向导，我建议您可以从以下几个角度来了解：\n\n🏛️ **历史渊源**：了解其历史背景和发展脉络\n🎨 **文化内涵**：探索其深层的文化意义\n🌟 **现代价值**：认识其在当代的重要作用\n\n您还可以问我更具体的问题，比如：\n• 济南的泉水文化有什么特色？\n• 曲水亭街有哪些历史故事？\n• 济南有哪些传统节日和民俗？\n• 鲁菜的特点和代表菜品是什么？\n\n我很乐意为您详细介绍济南的文化魅力！`;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // 模拟AI思考时间
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getCulturalResponse(inputValue),
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const suggestedQuestions = [
    "趵突泉为什么被称为天下第一泉？",
    "济南有哪些著名的历史人物？",
    "曲水亭街有什么历史典故？",
    "济南的传统美食有哪些特色？",
    "72名泉都有哪些著名的泉水？",
    "齐长城在济南有哪些遗址？"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-blue-100">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-blue-800 hover:text-blue-900 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">返回首页</span>
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">泉城AI文化向导</h1>
                <p className="text-sm text-slate-600">专业的济南文化问答助手</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Messages Area */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start gap-3 max-w-3xl ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.isUser 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white'
                  }`}>
                    {message.isUser ? <User className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                  </div>
                  <div className={`rounded-2xl px-4 py-3 ${
                    message.isUser
                      ? 'bg-blue-600 text-white'
                      : 'bg-gradient-to-br from-blue-50 to-slate-50 text-slate-800 border border-blue-100'
                  }`}>
                    <div className="whitespace-pre-wrap text-sm leading-relaxed">
                      {message.content}
                    </div>
                    <div className={`text-xs mt-2 ${
                      message.isUser ? 'text-blue-100' : 'text-slate-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString('zh-CN', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl px-4 py-3 border border-blue-100">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-200"></div>
                      <span className="ml-2 text-sm text-slate-600">AI正在思考...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-slate-50 border-t border-blue-100">
            <p className="text-sm font-semibold text-slate-700 mb-3">💡 推荐问题：</p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setInputValue(question)}
                  className="text-xs bg-white text-blue-700 px-3 py-2 rounded-full border border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white border-t border-slate-200">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="请输入您想了解的济南文化问题..."
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  rows={2}
                  disabled={isTyping}
                />
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                发送
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;