import React, { useState } from 'react';
import { ArrowLeft, Clock, User, MapPin, Search, ChevronDown } from 'lucide-react';

interface HistoryStoriesProps {
  onBack: () => void;
}

interface Story {
  id: string;
  title: string;
  period: string;
  dynasty: string;
  description: string;
  content: string;
  image: string;
}

interface Celebrity {
  id: string;
  name: string;
  period: string;
  title: string;
  description: string;
  image: string;
  stories: string[];
}

interface SpringStory {
  id: string;
  springName: string;
  title: string;
  description: string;
  image: string;
  legend: string;
}

const HistoryStories: React.FC<HistoryStoriesProps> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [selectedDynasty, setSelectedDynasty] = useState('全部');
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [selectedCelebrity, setSelectedCelebrity] = useState<Celebrity | null>(null);
  const [selectedSpring, setSelectedSpring] = useState<SpringStory | null>(null);

  const dynasties = ['全部', '春秋战国', '秦汉', '魏晋南北朝', '隋唐', '宋元', '明清', '近现代'];

  const stories: Story[] = [
    {
      id: '1',
      title: '齐国建都临淄',
      period: '公元前859年',
      dynasty: '春秋战国',
      description: '齐太公姜子牙受封齐地，建都临淄，开启了齐国800年的辉煌历史',
      content: '详细故事内容待补充...',
      image: '/images/107dc429b50fa05c235432d21ac07ea.png'
    },
    {
      id: '2',
      title: '济南府的设立',
      period: '金代',
      dynasty: '宋元',
      description: '金代设立济南府，济南正式成为重要的政治文化中心',
      content: '详细故事内容待补充...',
      image: '/images/107dc429b50fa05c235432d21ac07ea.png'
    }
  ];

  const celebrities: Celebrity[] = [
    {
      id: '1',
      name: '李清照',
      period: '1084-1155',
      title: '宋代女词人',
      description: '号易安居士，济南章丘人，宋代著名女词人，婉约词派代表',
      image: '/images/5ade9a4c426e1195338e59ec226d58f.png',
      stories: ['《声声慢》的创作背景', '与赵明诚的爱情故事', '南渡后的颠沛生活']
    },
    {
      id: '2',
      name: '辛弃疾',
      period: '1140-1207',
      title: '南宋豪放派词人',
      description: '字幼安，号稼轩，济南历城人，南宋豪放派词人，抗金英雄',
      image: '/images/5ade9a4c426e1195338e59ec226d58f.png',
      stories: ['青年时期的抗金经历', '《青玉案·元夕》的创作', '晚年的田园生活']
    },
    {
      id: '3',
      name: '孔子',
      period: '公元前551-479',
      title: '春秋时期思想家',
      description: '名丘，字仲尼，春秋时期鲁国人，儒家学派创始人',
      image: '/images/5ade9a4c426e1195338e59ec226d58f.png',
      stories: ['周游列国的经历', '教育思想的形成', '与济南的历史渊源']
    }
  ];

  const springSories: SpringStory[] = [
    {
      id: '1',
      springName: '趵突泉',
      title: '天下第一泉的传说',
      description: '相传趵突泉是龙王的三个儿子化身而成',
      image: '/images/91bd5551087c7221a74800e6e7314f5.png',
      legend: '详细传说内容待补充...'
    },
    {
      id: '2',
      springName: '黑虎泉',
      title: '黑虎救泉的故事',
      description: '传说有黑虎卧于泉边，保护泉水不被污染',
      image: '/images/91bd5551087c7221a74800e6e7314f5.png',
      legend: '详细传说内容待补充...'
    }
  ];

  const greatWallStories = [
    {
      id: '1',
      title: '齐长城的修建',
      period: '春秋战国时期',
      description: '齐国为防御楚、鲁等国入侵而修建的军事防御工程',
      image: '/images/91bd5551087c7221a74800e6e7314f5.png'
    },
    {
      id: '2',
      title: '孟姜女哭长城',
      period: '秦代传说',
      description: '虽然传说发生在秦长城，但在齐长城也有相似的民间故事',
      image: '/images/91bd5551087c7221a74800e6e7314f5.png'
    }
  ];

  const filteredStories = selectedDynasty === '全部' 
    ? stories 
    : stories.filter(story => story.dynasty === selectedDynasty);

  if (selectedStory) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <button
              onClick={() => setSelectedStory(null)}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              返回历史长廊
            </button>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-4">{selectedStory.title}</h1>
            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />{selectedStory.period}</span>
              <span>{selectedStory.dynasty}</span>
            </div>
            <p className="text-lg leading-relaxed">{selectedStory.content}</p>
          </div>
        </div>
      </div>
    );
  }

  if (selectedCelebrity) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <button
              onClick={() => setSelectedCelebrity(null)}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              返回名士风流
            </button>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-64">
              <img src={selectedCelebrity.image} alt={selectedCelebrity.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <h1 className="text-3xl font-bold mb-2">{selectedCelebrity.name}</h1>
                  <p className="text-lg">{selectedCelebrity.title}</p>
                  <p className="text-sm opacity-90">{selectedCelebrity.period}</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed mb-6">{selectedCelebrity.description}</p>
              <h3 className="text-xl font-bold mb-4">相关故事</h3>
              <div className="space-y-2">
                {selectedCelebrity.stories.map((story, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    {story}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedSpring) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <button
              onClick={() => setSelectedSpring(null)}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              返回泉城记忆
            </button>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-64">
              <img src={selectedSpring.image} alt={selectedSpring.springName} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <h1 className="text-3xl font-bold mb-2">{selectedSpring.springName}</h1>
                  <p className="text-lg">{selectedSpring.title}</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed mb-6">{selectedSpring.description}</p>
              <h3 className="text-xl font-bold mb-4">传说故事</h3>
              <p className="text-gray-700 leading-relaxed">{selectedSpring.legend}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (activeSection === 'history') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <button
              onClick={() => setActiveSection(null)}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              返回济南故事
            </button>
            <h1 className="text-3xl font-bold text-gray-900">历史长廊</h1>
            <p className="text-gray-600 mt-2">千年春秋，见证济南历史变迁</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="mb-6">
            <div className="relative">
              <select
                value={selectedDynasty}
                onChange={(e) => setSelectedDynasty(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {dynasties.map(dynasty => (
                  <option key={dynasty} value={dynasty}>{dynasty}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedStory(story)}
              >
                <div className="relative h-48">
                  <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                      {story.dynasty}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {story.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (activeSection === 'celebrities') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <button
              onClick={() => setActiveSection(null)}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              返回济南故事
            </button>
            <h1 className="text-3xl font-bold text-gray-900">名士风流</h1>
            <p className="text-gray-600 mt-2">探访名士，感受文人风骨</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {celebrities.map((celebrity) => (
              <div
                key={celebrity.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedCelebrity(celebrity)}
              >
                <div className="relative h-48">
                  <img src={celebrity.image} alt={celebrity.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{celebrity.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{celebrity.title}</p>
                  <p className="text-gray-600 mb-4 line-clamp-2">{celebrity.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-1" />
                    {celebrity.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (activeSection === 'springs') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <button
              onClick={() => setActiveSection(null)}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              返回济南故事
            </button>
            <h1 className="text-3xl font-bold text-gray-900">泉城记忆</h1>
            <p className="text-gray-600 mt-2">泉韵往事，聆听泉水的故事</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {springSories.map((spring) => (
              <div
                key={spring.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedSpring(spring)}
              >
                <div className="relative h-64">
                  <img src={spring.image} alt={spring.springName} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{spring.springName}</h3>
                      <p className="text-lg">{spring.title}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{spring.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (activeSection === 'greatwall') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <button
              onClick={() => setActiveSection(null)}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              返回济南故事
            </button>
            <h1 className="text-3xl font-bold text-gray-900">长城往事</h1>
            <p className="text-gray-600 mt-2">齐边风云，追忆长城岁月</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="space-y-6">
            {greatWallStories.map((story, index) => (
              <div key={story.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img src={story.image} alt={story.title} className="w-full h-48 md:h-full object-cover" />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{story.title}</h3>
                        <p className="text-gray-500">{story.period}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{story.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <button
            onClick={onBack}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            返回主页
          </button>
          <h1 className="text-4xl font-bold text-gray-900">济南故事</h1>
          <p className="text-xl text-gray-600 mt-2">流动的历史，活着的记忆</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 历史长廊 */}
          <div
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
            onClick={() => setActiveSection('history')}
          >
            <div className="relative h-64">
              <img 
                src="/images/107dc429b50fa05c235432d21ac07ea.png" 
                alt="历史长廊" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">历史长廊</h2>
                  <p className="text-lg opacity-90">穿越千年时光，探寻济南历史足迹</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                从春秋战国到近现代，济南见证了中华文明的兴衰更替。在这里，您可以按朝代检索，深入了解每个历史时期的重要事件和文化变迁。
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center gap-2">
                千年春秋
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          {/* 名士风流 */}
          <div
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
            onClick={() => setActiveSection('celebrities')}
          >
            <div className="relative h-64">
              <img 
                src="/images/5ade9a4c426e1195338e59ec226d58f.png" 
                alt="名士风流" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">名士风流</h2>
                  <p className="text-lg opacity-90">文人墨客，风流千古</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                李清照的婉约词章，辛弃疾的豪放情怀，孔子的儒家思想...济南孕育了无数文化名人，他们的故事至今传颂不衰。
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center gap-2">
                探访名士
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          {/* 泉城记忆 */}
          <div
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
            onClick={() => setActiveSection('springs')}
          >
            <div className="relative h-64">
              <img 
                src="/images/91bd5551087c7221a74800e6e7314f5.png" 
                alt="泉城记忆" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">泉城记忆</h2>
                  <p className="text-lg opacity-90">七十二泉的传说与故事</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                每一眼泉水都有自己的故事，从趵突泉的龙王传说到黑虎泉的神兽守护，这些美丽的传说构成了济南独特的泉水文化。
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center gap-2">
                泉韵往事
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          {/* 长城往事 */}
          <div
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
            onClick={() => setActiveSection('greatwall')}
          >
            <div className="relative h-64">
              <img 
                src="/images/91bd5551087c7221a74800e6e7314f5.png" 
                alt="长城往事" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">长城往事</h2>
                  <p className="text-lg opacity-90">齐长城的历史变迁</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                作为中国最古老的长城，齐长城见证了春秋战国的烽火岁月。从修建到废弃，从军事要塞到文化遗产，每一段城墙都诉说着历史的沧桑。
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center gap-2">
                齐边风云
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryStories;