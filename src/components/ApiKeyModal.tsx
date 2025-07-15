import React, { useState } from 'react';
import { X, Key, AlertCircle, CheckCircle } from 'lucide-react';
import { validateApiKey } from '../utils/zhipuApi';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (apiKey: string) => void;
  currentApiKey?: string;
}

const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ 
  isOpen, 
  onClose, 
  onSave, 
  currentApiKey = '' 
}) => {
  const [apiKey, setApiKey] = useState(currentApiKey);
  const [isValid, setIsValid] = useState(false);
  const [showKey, setShowKey] = useState(false);

  const handleApiKeyChange = (value: string) => {
    setApiKey(value);
    setIsValid(validateApiKey(value));
  };

  const handleSave = () => {
    if (isValid) {
      onSave(apiKey);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <Key className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-slate-800">配置API密钥</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors duration-300"
          >
            <X className="w-5 h-5 text-slate-600" />
          </button>
        </div>

        <div className="mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-blue-800">
                <p className="font-semibold mb-2">如何获取API密钥：</p>
                <ol className="list-decimal list-inside space-y-1 text-blue-700">
                  <li>访问 <a href="https://open.bigmodel.cn" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900">智谱AI开放平台</a></li>
                  <li>注册并登录账户</li>
                  <li>前往API Keys页面获取密钥</li>
                  <li>密钥格式为：{'{id}.{secret}'}</li>
                </ol>
              </div>
            </div>
          </div>

          <label className="block text-sm font-semibold text-slate-700 mb-2">
            智谱AI API密钥
          </label>
          <div className="relative">
            <input
              type={showKey ? 'text' : 'password'}
              value={apiKey}
              onChange={(e) => handleApiKeyChange(e.target.value)}
              placeholder="请输入您的API密钥 (格式: id.secret)"
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-20"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowKey(!showKey)}
                className="text-slate-400 hover:text-slate-600 text-sm"
              >
                {showKey ? '隐藏' : '显示'}
              </button>
              {apiKey && (
                <div className="flex items-center">
                  {isValid ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-red-500" />
                  )}
                </div>
              )}
            </div>
          </div>
          {apiKey && !isValid && (
            <p className="text-red-500 text-sm mt-2">
              API密钥格式不正确，请检查格式是否为 id.secret
            </p>
          )}
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors duration-300 font-semibold"
          >
            取消
          </button>
          <button
            onClick={handleSave}
            disabled={!isValid}
            className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 font-semibold"
          >
            保存配置
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApiKeyModal;