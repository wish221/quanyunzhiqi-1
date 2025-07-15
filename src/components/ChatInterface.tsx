import React, { useState, useRef, useEffect } from 'react';
import { Send, ArrowLeft, Brain, User, Sparkles, Settings, AlertCircle } from 'lucide-react';
import { callZhipuAI } from '../utils/zhipuApi';
import ApiKeyModal from './ApiKeyModal';

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
  const [apiKey, setApiKey] = useState('c1d9bfb8f56a4a4d9589dc1633b1f184.3TEagIYOhMTQ6llq');
  const [showApiModal, setShowApiModal] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
    setError(null);

    try {
      // 准备发送给AI的消息历史
      const aiMessages = messages
        .filter(msg => !msg.id.startsWith('error_'))
        .slice(-10) // 只保留最近10条消息作为上下文
        .map(msg => ({
          role: msg.isUser ? 'user' as const : 'assistant' as const,
          content: msg.content
        }));

      // 添加当前用户消息
      aiMessages.push({
        role: 'user',
        content: inputValue
      });

      // 调用智谱AI API
      const aiResponse = await callZhipuAI(aiMessages, apiKey);

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('AI调用失败:', error);
      
      let errorMessage = '抱歉，AI服务暂时不可用。';
      if (error instanceof Error) {
        if (error.message.includes('401') || error.message.includes('403')) {
          errorMessage = 'API密钥无效或已过期，请重新配置。';
        } else if (error.message.includes('429')) {
          errorMessage = 'API调用频率过高，请稍后再试。';
        } else if (error.message.includes('network') || error.message.includes('fetch')) {
          errorMessage = '网络连接失败，请检查网络连接。';
        }
      }

      const errorMsg: Message = {
        id: `error_${Date.now()}`,
        content: `❌ ${errorMessage}\n\n您可以：\n• 检查API密钥配置\n• 稍后重试\n• 或继续浏览其他功能`,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMsg]);
      setError(errorMessage);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleApiKeySave = (newApiKey: string) => {
    setApiKey(newApiKey);
    localStorage.setItem('zhipu_api_key', newApiKey);
    setError(null);
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
                <p className="text-sm text-slate-600">
                  {apiKey ? '已连接智谱AI' : '需要配置API密钥'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowApiModal(true)}
              className="flex items-center gap-2 px-3 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-300"
            >
              <Settings className="w-4 h-4" />
              <span className="text-sm">设置</span>
            </button>
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
                      : message.id.startsWith('error_')
                      ? 'bg-red-500 text-white'
                      : 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white'
                  }`}>
                    {message.isUser ? <User className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                  </div>
                  <div className={`rounded-2xl px-4 py-3 ${
                    message.isUser
                      ? 'bg-blue-600 text-white'
                      : message.id.startsWith('error_')
                      ? 'bg-red-50 text-red-800 border border-red-200'
                      : 'bg-gradient-to-br from-blue-50 to-slate-50 text-slate-800 border border-blue-100'
                  }`}>
                    <div className="whitespace-pre-wrap text-sm leading-relaxed">
                      {message.content}
                    </div>
                    <div className={`text-xs mt-2 ${
                      message.isUser 
                        ? 'text-blue-100' 
                        : message.id.startsWith('error_')
                        ? 'text-red-600'
                        : 'text-slate-500'
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
                  disabled={isTyping || !apiKey}
                  className="text-xs bg-white text-blue-700 px-3 py-2 rounded-full border border-blue-200 hover:bg-blue-50 hover:border-blue-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
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
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none disabled:bg-slate-50 disabled:text-slate-500"
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

      {/* API Key Modal */}
      <ApiKeyModal
        isOpen={showApiModal}
        onClose={() => setShowApiModal(false)}
        onSave={handleApiKeySave}
        currentApiKey={apiKey}
      />
    </div>
  );
};

export default ChatInterface;