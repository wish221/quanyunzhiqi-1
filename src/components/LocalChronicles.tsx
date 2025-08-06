import React, { useState } from 'react';
import { ArrowLeft, Search, Book, Calendar, MapPin, Eye, Download, Filter, Grid, List } from 'lucide-react';

interface LocalChroniclesProps {
  onBack: () => void;
}

interface Chronicle {
  id: string;
  title: string;
  author: string;
  dynasty: string;
  year: string;
  category: string;
  description: string;
  content: string;
  coverImage: string;
  pages: number;
  location: string;
  tags: string[];
}

const LocalChronicles: React.FC<LocalChroniclesProps> = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selectedDynasty, setSelectedDynasty] = useState('全部');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedChronicle, setSelectedChronicle] = useState<Chronicle | null>(null);

  const categories = ['全部', '地理志', '人物志', '风俗志', '建置志', '艺文志', '经济志'];
  const dynasties = ['全部', '明代', '清代', '民国', '现代'];

  const chronicles: Chronicle[] = [
    {
      id: '1',
      title: '历城县志',
      author: '王士禛等',
      dynasty: '清代',
      year: '康熙三十年（1691年）',
      category: '地理志',
      description: '详细记录了历城县的地理环境、行政建置、人文历史等内容，是研究济南历史的重要文献。',
      content: `《历城县志》是清代康熙年间编纂的重要地方志书，由著名文学家王士禛等人主持编修。该志书共分为十二卷，内容涵盖了历城县的地理、建置、田赋、学校、选举、人物、艺文等各个方面。

**地理篇**
历城县位于山东省中部，东临章丘，西接长清，南依泰山，北濒黄河。县境内泉水众多，以趵突泉为首的七十二名泉分布其间，形成了独特的泉水文化景观。

**建置篇**
历城设县始于西汉，历经两千余年的发展变迁。县治所在地即今济南市区，历代均为重要的政治、经济、文化中心。

**人物篇**
历城人才辈出，自古以来涌现出众多杰出人物。如唐代名相房玄龄、宋代女词人李清照、南宋豪放派词人辛弃疾等，都是历城的骄傲。

**艺文篇**
收录了历代文人墨客在历城留下的诗文作品，展现了深厚的文化底蕴。其中不乏传世佳作，如"四面荷花三面柳，一城山色半城湖"等名句。`,
      coverImage: 'https://img1.baidu.com/it/u=2089571600,2951617712&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667',
      pages: 240,
      location: '历城县（今济南市）',
      tags: ['地方志', '历史文献', '济南', '清代']
    },
    {
      id: '2',
      title: '济南府志',
      author: '周永年等',
      dynasty: '明代',
      year: '万历四十年（1612年）',
      category: '建置志',
      description: '明代济南府的官修志书，记录了济南府所辖各县的政治、经济、文化状况。',
      content: `《济南府志》是明代万历年间编纂的重要府志，由时任济南府知府周永年主持编修。该志书详细记录了济南府的建置沿革、地理环境、政治制度、经济发展、文化教育等各个方面的情况。

**府域概况**
济南府辖历城、章丘、邹平、淄川、长山、新城、齐河、齐东、济阳、禹城、临邑、长清、肥城、青城等十四县，地域辽阔，人口众多。

**泉水文化**
志书中详细记录了济南府境内的名泉，特别是趵突泉、黑虎泉、珍珠泉等著名泉水的位置、特点和相关传说，为后世研究济南泉水文化提供了珍贵资料。

**教育文化**
明代济南府教育发达，府学、县学、书院林立。志书记录了各级学校的设置情况、教学内容、师资力量等，反映了当时的教育水平。

**经济发展**
济南府地处交通要道，商业繁荣。志书记录了当时的手工业、商业、农业发展状况，以及赋税征收、仓储管理等经济管理制度。`,
      coverImage: 'https://img2.baidu.com/it/u=3089571600,2951617712&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667',
      pages: 320,
      location: '济南府',
      tags: ['府志', '明代', '政治制度', '经济发展']
    },
    {
      id: '3',
      title: '章丘县志',
      author: '李开先等',
      dynasty: '明代',
      year: '嘉靖二十年（1541年）',
      category: '人物志',
      description: '明代章丘县志，以人物传记见长，记录了众多章丘籍名人的生平事迹。',
      content: `《章丘县志》是明代嘉靖年间编纂的县志，由著名戏曲家李开先等人主持编修。该志书在人物传记方面尤为详实，为研究章丘历史人物提供了重要资料。

**地理环境**
章丘县位于济南府东部，地势南高北低，山川秀美。境内有胡山、危山等名山，以及百脉泉、墨泉等名泉，自然环境优美。

**历史沿革**
章丘设县历史悠久，春秋时期即有建置。历代均为重要的农业县，人口稠密，文化发达。

**杰出人物**
章丘人才辈出，历代涌现出众多杰出人物：
- 李清照：宋代著名女词人，婉约派代表人物
- 辛弃疾：南宋豪放派词人，爱国诗人
- 李开先：明代戏曲家、文学家
- 孟洛川：清代著名商人，瑞蚨祥创始人

**文化教育**
章丘自古重视教育，书院、私塾众多。志书记录了各类教育机构的设置和发展情况，反映了深厚的文化传统。

**民俗风情**
志书详细记录了章丘的民俗风情，包括节庆活动、婚丧嫁娶、服饰饮食等，为研究明代民俗文化提供了珍贵资料。`,
      coverImage: 'https://img0.baidu.com/it/u=1089571600,2951617712&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667',
      pages: 180,
      location: '章丘县',
      tags: ['县志', '人物传记', '李清照', '辛弃疾']
    },
    {
      id: '4',
      title: '长清县志',
      author: '张尔岐等',
      dynasty: '清代',
      year: '乾隆十五年（1750年）',
      category: '风俗志',
      description: '清代长清县志，详细记录了长清地区的风俗习惯、民间传说和文化特色。',
      content: `《长清县志》是清代乾隆年间编纂的县志，由著名学者张尔岐等人主持编修。该志书在记录风俗民情方面尤为详实，是研究清代山东地区民俗文化的重要文献。

**地理位置**
长清县位于济南府西南部，东邻历城，西接肥城，南依泰山，北临黄河。地势南高北低，山川秀美，自然资源丰富。

**历史文化**
长清历史悠久，春秋时期即有建置。境内有齐长城遗址，见证了古代军事防御的历史。灵岩寺、五峰山等名胜古迹众多，文化底蕴深厚。

**民俗风情**
志书详细记录了长清地区的民俗风情：
- 节庆习俗：春节、清明、端午、中秋等传统节日的庆祝方式
- 婚丧嫁娶：详细的婚礼、丧葬仪式和相关习俗
- 服饰饮食：当地特色的服装样式和饮食文化
- 民间信仰：各种神祇崇拜和宗教活动

**农业生产**
长清以农业为主，盛产小麦、玉米、棉花等作物。志书记录了当时的农业生产技术、农具使用、农时安排等情况。

**手工业发展**
长清手工业发达，特别是纺织业、陶瓷业、铁器制造等。志书记录了各种手工业的发展状况和技术水平。`,
      coverImage: 'https://img3.baidu.com/it/u=4089571600,2951617712&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667',
      pages: 200,
      location: '长清县',
      tags: ['县志', '民俗文化', '齐长城', '灵岩寺']
    },
    {
      id: '5',
      title: '济南泉志',
      author: '晏璧等',
      dynasty: '清代',
      year: '光绪八年（1882年）',
      category: '地理志',
      description: '专门记录济南泉水的志书，详细描述了七十二名泉的位置、特点和相关传说。',
      content: `《济南泉志》是清代光绪年间编纂的专门记录济南泉水的志书，由晏璧等人主持编修。该志书是研究济南泉水文化的重要文献，详细记录了济南境内各大名泉的情况。

**泉水概况**
济南素有"泉城"之称，境内泉水众多，其中以七十二名泉最为著名。这些泉水分布在城区各处，形成了独特的城市景观。

**四大泉群**
志书将济南名泉分为四大泉群：
1. 趵突泉泉群：以趵突泉为首，包括金线泉、皇华泉、柳絮泉等
2. 黑虎泉泉群：以黑虎泉为首，包括琵琶泉、九女泉、白石泉等
3. 珍珠泉泉群：以珍珠泉为首，包括濋泉、散水泉、溪亭泉等
4. 五龙潭泉群：以五龙潭为首，包括古温泉、贤清泉、天镜泉等

**泉水特色**
每眼泉水都有其独特的特色：
- 趵突泉：三股水柱喷涌而出，声如雷鸣
- 黑虎泉：泉水从虎头石雕中涌出，声如虎啸
- 珍珠泉：泉底冒出串串气泡，如珍珠滚动
- 五龙潭：五个泉池相连，传说为五龙所化

**文化内涵**
志书不仅记录了泉水的自然特征，还收录了大量与泉水相关的诗词、传说和历史故事，展现了深厚的文化内涵。`,
      coverImage: 'https://img4.baidu.com/it/u=5089571600,2951617712&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667',
      pages: 150,
      location: '济南府城',
      tags: ['泉水文化', '七十二名泉', '趵突泉', '地理志']
    },
    {
      id: '6',
      title: '济南艺文志',
      author: '王苹等',
      dynasty: '民国',
      year: '民国十五年（1926年）',
      category: '艺文志',
      description: '民国时期编纂的济南艺文志，收录了历代文人在济南创作的诗词文章。',
      content: `《济南艺文志》是民国时期编纂的专门收录济南地区文学作品的志书，由王苹等人主持编修。该志书系统收录了历代文人墨客在济南创作或与济南相关的诗词文章，是研究济南文学史的重要资料。

**收录范围**
志书收录的作品时间跨度从汉代到民国初年，包括：
- 古体诗、律诗、绝句
- 词曲作品
- 散文、游记
- 碑铭、序跋
- 对联、题咏

**著名作品**
志书收录了众多传世名作：
- 李清照《如梦令》："常记溪亭日暮，沉醉不知归路"
- 辛弃疾《青玉案·元夕》："众里寻他千百度，蓦然回首，那人却在，灯火阑珊处"
- 元好问《趵突泉》："且向波间看玉虹，淙淙终日响晴空"
- 王士禛《秋柳》："秋来何处最销魂，残照西风白下门"

**文学流派**
志书按照文学流派和时代特色进行分类：
- 唐代：以边塞诗、山水诗为主
- 宋代：以婉约词、豪放词见长
- 明清：以古文、骈文并重
- 近代：融合传统与现代的新文学

**文化价值**
这些文学作品不仅具有很高的艺术价值，也是研究济南历史文化、社会风貌的重要资料，展现了济南深厚的文化底蕴。`,
      coverImage: 'https://img5.baidu.com/it/u=6089571600,2951617712&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667',
      pages: 280,
      location: '济南',
      tags: ['艺文志', '诗词文章', '文学史', '民国']
    }
  ];

  const filteredChronicles = chronicles.filter(chronicle => {
    const matchesSearch = chronicle.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         chronicle.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         chronicle.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '全部' || chronicle.category === selectedCategory;
    const matchesDynasty = selectedDynasty === '全部' || chronicle.dynasty === selectedDynasty;
    
    return matchesSearch && matchesCategory && matchesDynasty;
  });

  if (selectedChronicle) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <button
              onClick={() => setSelectedChronicle(null)}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              返回检索结果
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3 p-8 bg-gradient-to-br from-blue-50 to-slate-50">
                <img
                  src={selectedChronicle.coverImage}
                  alt={selectedChronicle.title}
                  className="w-full max-w-sm mx-auto rounded-lg shadow-lg mb-6"
                />
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">基本信息</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Book className="w-4 h-4 text-blue-600" />
                        <span>页数：{selectedChronicle.pages}页</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-blue-600" />
                        <span>年代：{selectedChronicle.year}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-blue-600" />
                        <span>地区：{selectedChronicle.location}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">标签</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedChronicle.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 pt-4">
                    <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                      <Eye className="w-4 h-4" />
                      在线阅读
                    </button>
                    <button className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      下载PDF
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-2/3 p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{selectedChronicle.title}</h1>
                <div className="flex items-center gap-4 text-gray-600 mb-6">
                  <span>作者：{selectedChronicle.author}</span>
                  <span>•</span>
                  <span>{selectedChronicle.dynasty}</span>
                  <span>•</span>
                  <span>{selectedChronicle.category}</span>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">内容简介</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">{selectedChronicle.description}</p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-4">详细内容</h2>
                  <div className="prose max-w-none">
                    <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {selectedChronicle.content}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <button
            onClick={onBack}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            返回主页
          </button>
          <h1 className="text-3xl font-bold text-gray-900">地方志检索解读</h1>
          <p className="text-gray-600 mt-2">探索济南历史文献，传承千年文化记忆</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* 搜索和筛选区域 */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="搜索书名、作者或内容..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <select
                value={selectedDynasty}
                onChange={(e) => setSelectedDynasty(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {dynasties.map(dynasty => (
                  <option key={dynasty} value={dynasty}>{dynasty}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Filter className="w-4 h-4" />
              <span>找到 {filteredChronicles.length} 本相关文献</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* 书籍展示区域 */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredChronicles.map((chronicle) => (
              <div
                key={chronicle.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedChronicle(chronicle)}
              >
                <div className="relative">
                  <img
                    src={chronicle.coverImage}
                    alt={chronicle.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
                      {chronicle.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black bg-opacity-70 text-white rounded-full text-sm">
                      {chronicle.dynasty}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{chronicle.title}</h3>
                  <p className="text-gray-600 mb-3">作者：{chronicle.author}</p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                    {chronicle.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Book className="w-4 h-4" />
                        {chronicle.pages}页
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {chronicle.year}
                      </span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      查看详情 →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredChronicles.map((chronicle) => (
              <div
                key={chronicle.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedChronicle(chronicle)}
              >
                <div className="flex gap-6">
                  <img
                    src={chronicle.coverImage}
                    alt={chronicle.title}
                    className="w-24 h-32 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{chronicle.title}</h3>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          {chronicle.category}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                          {chronicle.dynasty}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-3">作者：{chronicle.author} • {chronicle.year}</p>
                    <p className="text-gray-700 leading-relaxed mb-4">{chronicle.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Book className="w-4 h-4" />
                          {chronicle.pages}页
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {chronicle.location}
                        </span>
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 font-medium">
                        查看详情 →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredChronicles.length === 0 && (
          <div className="text-center py-16">
            <Book className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">未找到相关文献</h3>
            <p className="text-gray-500">请尝试调整搜索条件或筛选选项</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocalChronicles;