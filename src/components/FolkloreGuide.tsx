import React, { useState } from 'react';
import { ArrowLeft, Calendar, MapPin, Clock, Users, Star, ChevronRight } from 'lucide-react';

interface FolkloreActivity {
  id: string;
  name: string;
  description: string;
  season: string;
  location: string;
  difficulty: '简单' | '中等' | '困难';
  participants: string;
  image: string;
  rating: number;
  tags: string[];
}

interface FolkloreTheme {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  activities: FolkloreActivity[];
}

interface FolkloreGuideProps {
  onBack: () => void;
}

const FolkloreGuide: React.FC<FolkloreGuideProps> = ({ onBack }) => {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<FolkloreActivity | null>(null);

  const folkloreThemes: FolkloreTheme[] = [
    {
      id: 'spring-culture',
      name: '泉水文化民俗',
      description: '围绕济南72名泉形成的独特民俗文化体验',
      icon: '💧',
      color: 'from-blue-500 to-cyan-600',
      activities: [
        {
          id: 'spring-worship',
          name: '泉神祭祀仪式',
          description: '传承千年的泉水祭祀文化，体验古人对自然的敬畏',
          season: '春季、秋季',
          location: '趵突泉公园',
          difficulty: '简单',
          participants: '10-50人',
          image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg',
          rating: 4.8,
          tags: ['传统祭祀', '文化体验', '历史传承']
        },
        {
          id: 'spring-tea-ceremony',
          name: '泉水茶艺体验',
          description: '用济南名泉水泡制传统茶艺，品味泉城茶文化',
          season: '四季皆宜',
          location: '大明湖、趵突泉',
          difficulty: '中等',
          participants: '5-20人',
          image: 'https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg',
          rating: 4.6,
          tags: ['茶艺文化', '泉水特色', '休闲体验']
        },
        {
          id: 'spring-poetry',
          name: '泉边诗会',
          description: '在名泉旁举办诗词朗诵会，重现古代文人雅集',
          season: '春季、夏季',
          location: '黑虎泉、五龙潭',
          difficulty: '中等',
          participants: '15-30人',
          image: 'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg',
          rating: 4.7,
          tags: ['诗词文化', '文人雅集', '传统艺术']
        }
      ]
    },
    {
      id: 'old-street-culture',
      name: '古城老街民俗',
      description: '体验济南古城区传统街巷的民俗文化',
      icon: '🏮',
      color: 'from-amber-500 to-orange-600',
      activities: [
        {
          id: 'traditional-crafts',
          name: '传统手工艺制作',
          description: '学习济南传统手工艺，如面塑、剪纸、糖画等',
          season: '四季皆宜',
          location: '曲水亭街、芙蓉街',
          difficulty: '中等',
          participants: '8-25人',
          image: 'https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg',
          rating: 4.5,
          tags: ['手工艺', '传统技艺', '文化传承']
        },
        {
          id: 'old-street-tour',
          name: '古街民俗导览',
          description: '深度游览济南古街巷，了解老济南人的生活方式',
          season: '春季、秋季',
          location: '曲水亭街、王府池子',
          difficulty: '简单',
          participants: '10-40人',
          image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg',
          rating: 4.4,
          tags: ['历史导览', '民俗文化', '城市记忆']
        },
        {
          id: 'traditional-opera',
          name: '吕剧表演体验',
          description: '学习济南地方戏曲吕剧的基本唱腔和表演',
          season: '四季皆宜',
          location: '明府城、文化馆',
          difficulty: '困难',
          participants: '5-15人',
          image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
          rating: 4.9,
          tags: ['传统戏曲', '表演艺术', '地方特色']
        }
      ]
    },
    {
      id: 'great-wall-culture',
      name: '齐长城文化民俗',
      description: '探索中国最古老长城的历史文化和民俗传统',
      icon: '🏯',
      color: 'from-emerald-500 to-teal-600',
      activities: [
        {
          id: 'wall-hiking',
          name: '齐长城徒步祭祖',
          description: '沿齐长城遗址徒步，体验古代边防文化',
          season: '春季、秋季',
          location: '长清区齐长城遗址',
          difficulty: '困难',
          participants: '15-30人',
          image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg',
          rating: 4.6,
          tags: ['历史遗迹', '徒步体验', '边防文化']
        },
        {
          id: 'ancient-military',
          name: '古代军事文化体验',
          description: '了解齐国军事制度，体验古代兵器制作',
          season: '四季皆宜',
          location: '齐长城博物馆',
          difficulty: '中等',
          participants: '10-25人',
          image: 'https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg',
          rating: 4.3,
          tags: ['军事文化', '历史体验', '文物制作']
        },
        {
          id: 'beacon-fire',
          name: '烽火台文化节',
          description: '重现古代烽火传递，了解古代通信方式',
          season: '夏季、秋季',
          location: '齐长城烽火台遗址',
          difficulty: '中等',
          participants: '20-50人',
          image: 'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg',
          rating: 4.7,
          tags: ['古代通信', '历史重现', '团队协作']
        }
      ]
    }
  ];

  const getActivityDetails = (activity: FolkloreActivity) => {
    const detailsMap: { [key: string]: any } = {
      'spring-worship': {
        history: {
          title: '历史溯源',
          content: `泉神祭祀仪式起源于春秋战国时期，当时济南地区的先民们认为泉水是天地灵气的汇聚之处，具有神圣的力量。

**历史发展脉络：**
• **春秋时期**：齐国建立最早的泉神祭祀制度
• **汉唐时期**：祭祀仪式逐渐规范化，形成固定的祭祀程序
• **宋元时期**：文人参与，增加了诗词吟诵环节
• **明清时期**：民间祭祀与官方祭祀并存，形成完整体系
• **现代传承**：结合旅游文化，以体验形式传承至今

泉神祭祀不仅是对自然的敬畏，更体现了济南人与泉水和谐共生的文化理念。`
        },
        experience: {
          title: '当代体验形式',
          content: `现代泉神祭祀体验融合了传统仪式与现代文化需求，形成了独特的文化体验项目。

**体验内容包括：**
• **净手礼**：用泉水净手，象征洗去尘埃，心诚意正
• **献花仪式**：向泉神献上鲜花，表达对自然的敬意
• **祈福环节**：参与者可以写下心愿，投入祈福池
• **古乐演奏**：现场演奏古琴、箫等传统乐器
• **诗词朗诵**：朗诵历代文人赞美泉水的诗词

**特色亮点：**
• 穿着汉服参与，增强仪式感
• 专业文化导师讲解历史背景
• 提供祭祀用品和纪念品
• 全程摄影记录，留存美好回忆`
        },
        guide: {
          title: '实操指南',
          content: `**参与准备：**
• **服装要求**：建议穿着素色服装，可租借汉服
• **时间安排**：仪式持续约1.5小时
• **人数限制**：每场10-50人，需提前预约

**具体流程：**
1. **集合签到**（15分钟）
   - 在趵突泉公园正门集合
   - 领取活动手册和祭祀用品
   - 简单介绍活动流程

2. **文化讲解**（20分钟）
   - 了解泉神祭祀的历史背景
   - 学习基本的祭祀礼仪
   - 观看历史文献和图片资料

3. **净手仪式**（10分钟）
   - 在指定泉水处净手
   - 默念祈福词语
   - 整理仪容仪表

4. **正式祭祀**（40分钟）
   - 向泉神行礼
   - 献花祈福
   - 古乐伴奏下的诗词朗诵
   - 集体祈福仪式

5. **文化交流**（15分钟）
   - 分享参与感受
   - 文化问答互动
   - 合影留念

**预约方式：**
• 电话预约：0531-8888-7777
• 微信预约：关注"泉韵志启"公众号
• 现场预约：趵突泉公园游客中心

**费用说明：**
• 成人：88元/人（含汉服租赁）
• 学生：68元/人（凭学生证）
• 儿童：免费（12岁以下，需成人陪同）`
        }
      },
      'spring-tea-ceremony': {
        history: {
          title: '历史溯源',
          content: `济南泉水茶艺文化始于唐代，兴盛于宋明时期。济南独特的泉水资源为茶艺文化的发展提供了得天独厚的条件。

**发展历程：**
• **唐代起源**：茶圣陆羽在《茶经》中提及济南泉水适宜泡茶
• **宋代繁荣**：苏轼、曾巩等文人在济南品茶作诗，推广泉水茶文化
• **明清鼎盛**：形成了独特的"济南泉水茶道"，讲究水质、茶叶、器具的完美结合
• **民国传承**：老舍等文人继续传承和发扬泉水茶文化
• **现代复兴**：结合旅游业发展，泉水茶艺成为济南文化名片

济南的泉水茶艺不仅是一种饮茶方式，更是一种生活哲学和文化传承。`
        },
        experience: {
          title: '当代体验形式',
          content: `现代泉水茶艺体验将传统茶道与济南泉水文化完美结合，形成独具特色的文化体验项目。

**体验内容：**
• **泉水取水仪式**：亲自到名泉取水，了解不同泉水的特点
• **茶艺基础学习**：学习基本的泡茶技巧和茶道礼仪
• **品茶鉴赏**：品尝用不同泉水泡制的茶叶，感受水质差异
• **茶文化讲座**：了解中国茶文化和济南茶文化的特色
• **茶具制作**：体验简单的茶具制作或装饰

**特色服务：**
• 专业茶艺师现场指导
• 提供优质茶叶和精美茶具
• 古典音乐营造氛围
• 茶点搭配，丰富味觉体验
• 茶艺表演欣赏`
        },
        guide: {
          title: '实操指南',
          content: `**活动安排：**
• **时长**：2-3小时
• **地点**：大明湖茶艺馆、趵突泉茶社
• **人数**：5-20人小班制教学

**详细流程：**
1. **文化导入**（30分钟）
   - 济南泉水文化介绍
   - 茶文化历史讲解
   - 茶具认识和使用方法

2. **泉水取水**（20分钟）
   - 前往指定名泉取水
   - 了解泉水的地质成因
   - 学习水质鉴别方法

3. **茶艺学习**（60分钟）
   - 基础泡茶技巧
   - 不同茶类的冲泡方法
   - 茶道礼仪和仪态

4. **品茶体验**（40分钟）
   - 品尝多种茶叶
   - 感受泉水与茶叶的搭配
   - 学习品茶的方法和术语

5. **文化交流**（20分钟）
   - 分享品茶心得
   - 茶文化知识问答
   - 制作个人专属茶包

**预约信息：**
• **预约电话**：0531-8888-7778
• **营业时间**：9:00-17:00
• **预约要求**：需提前1天预约

**收费标准：**
• 基础体验：128元/人
• 精品体验：188元/人（含茶叶礼盒）
• 私人定制：288元/人（一对一指导）

**注意事项：**
• 建议穿着舒适的休闲服装
• 不建议空腹参加
• 孕妇和心脏病患者请谨慎参与`
        }
      },
      'traditional-crafts': {
        history: {
          title: '历史溯源',
          content: `济南传统手工艺历史悠久，可追溯到春秋战国时期。作为齐鲁文化的重要组成部分，济南手工艺在历史长河中不断发展和传承。

**主要工艺发展史：**
• **面塑艺术**：起源于汉代，明清时期达到高峰，以"济南面人"闻名全国
• **剪纸工艺**：始于南北朝，宋代形成独特的"济南剪纸"风格
• **糖画技艺**：明代传入济南，清代在芙蓉街等地广泛流传
• **泥塑工艺**：唐代兴起，以制作各种民俗题材的泥塑著称
• **刺绣技艺**：宋代发展，形成了独特的"鲁绣"风格

这些手工艺不仅是技艺的传承，更承载着济南人民的智慧和文化记忆。`
        },
        experience: {
          title: '当代体验形式',
          content: `现代传统手工艺体验将古老技艺与现代教学方法相结合，让参与者在轻松愉快的氛围中学习传统文化。

**体验项目：**
• **面塑制作**：学习制作传统面塑作品，如十二生肖、戏曲人物等
• **剪纸艺术**：掌握基本剪纸技巧，创作个性化剪纸作品
• **糖画绘制**：体验糖画师的技艺，制作可食用的艺术品
• **泥塑创作**：用陶土制作小型雕塑作品
• **刺绣入门**：学习基础刺绣针法，制作简单绣品

**教学特色：**
• 非遗传承人亲自授课
• 小班制个性化指导
• 提供专业工具和材料
• 作品可带走留念
• 颁发体验证书`
        },
        guide: {
          title: '实操指南',
          content: `**活动详情：**
• **时间**：每周六、日 9:00-16:00
• **地点**：曲水亭街传统文化体验馆
• **时长**：单项体验2小时，全套体验6小时

**具体安排：**
1. **文化讲解**（20分钟）
   - 济南传统手工艺历史介绍
   - 各项工艺的特点和价值
   - 传承人故事分享

2. **技艺学习**（90分钟）
   - 选择1-2项感兴趣的工艺
   - 老师示范基本技法
   - 学员动手实践制作

3. **作品完善**（20分钟）
   - 完善作品细节
   - 老师点评指导
   - 作品包装处理

4. **文化交流**（10分钟）
   - 展示学习成果
   - 经验分享交流
   - 合影留念

**预约方式：**
• **在线预约**：关注"济南传统文化"小程序
• **电话预约**：0531-8888-7779
• **现场报名**：曲水亭街体验馆

**收费标准：**
• 单项体验：68-98元/人/项
• 套餐体验：168元/人（3项）
• 亲子套餐：128元/组（1大1小）
• 团体优惠：10人以上享受8折优惠

**温馨提示：**
• 建议穿着不怕弄脏的衣服
• 儿童需成人陪同参与
• 材料费已包含在体验费中
• 可提前定制个性化体验内容`
        }
      }
    };

    return detailsMap[activity.id] || {
      history: { title: '历史溯源', content: '详细的历史信息正在整理中...' },
      experience: { title: '当代体验形式', content: '体验形式信息正在完善中...' },
      guide: { title: '实操指南', content: '实操指南正在编写中...' }
    };
  };

  if (selectedActivity) {
    const details = getActivityDetails(selectedActivity);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100">
        {/* Header */}
        <div className="bg-white shadow-lg border-b border-blue-100">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <button
              onClick={() => setSelectedActivity(null)}
              className="flex items-center gap-2 text-blue-800 hover:text-blue-900 transition-colors duration-300 mb-4"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">返回活动列表</span>
            </button>
            
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-slate-800 mb-2">{selectedActivity.name}</h1>
                <p className="text-slate-600 mb-4">{selectedActivity.description}</p>
                
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span>{selectedActivity.season}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span>{selectedActivity.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span>{selectedActivity.participants}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>{selectedActivity.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-80">
                <img
                  src={selectedActivity.image}
                  alt={selectedActivity.name}
                  className="w-full h-48 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 历史溯源 */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                📜 {details.history.title}
              </h2>
              <div className="prose prose-slate max-w-none">
                <div className="whitespace-pre-line text-slate-700 leading-relaxed">
                  {details.history.content}
                </div>
              </div>
            </div>

            {/* 当代体验形式 */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                🎭 {details.experience.title}
              </h2>
              <div className="prose prose-slate max-w-none">
                <div className="whitespace-pre-line text-slate-700 leading-relaxed">
                  {details.experience.content}
                </div>
              </div>
            </div>

            {/* 实操指南 */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                📋 {details.guide.title}
              </h2>
              <div className="prose prose-slate max-w-none">
                <div className="whitespace-pre-line text-slate-700 leading-relaxed">
                  {details.guide.content}
                </div>
              </div>
            </div>
          </div>

          {/* 预约按钮 */}
          <div className="mt-8 text-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              立即预约体验
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (selectedTheme) {
    const theme = folkloreThemes.find(t => t.id === selectedTheme);
    if (!theme) return null;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100">
        {/* Header */}
        <div className="bg-white shadow-lg border-b border-blue-100">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <button
              onClick={() => setSelectedTheme(null)}
              className="flex items-center gap-2 text-blue-800 hover:text-blue-900 transition-colors duration-300 mb-4"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">返回主题分类</span>
            </button>
            
            <div className="flex items-center gap-4">
              <div className="text-4xl">{theme.icon}</div>
              <div>
                <h1 className="text-3xl font-bold text-slate-800">{theme.name}</h1>
                <p className="text-slate-600 mt-2">{theme.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Activities Grid */}
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {theme.activities.map((activity) => (
              <div
                key={activity.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer"
                onClick={() => setSelectedActivity(activity)}
              >
                <div className="relative">
                  <img
                    src={activity.image}
                    alt={activity.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-slate-800">
                    {activity.difficulty}
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-semibold text-slate-800">{activity.rating}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{activity.name}</h3>
                  <p className="text-slate-600 mb-4 line-clamp-2">{activity.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Calendar className="w-4 h-4" />
                      <span>{activity.season}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <MapPin className="w-4 h-4" />
                      <span>{activity.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Users className="w-4 h-4" />
                      <span>{activity.participants}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {activity.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-semibold">了解详情</span>
                    <ChevronRight className="w-5 h-5 text-blue-600" />
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-blue-800 hover:text-blue-900 transition-colors duration-300 mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">返回首页</span>
          </button>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              济南民俗体验指南
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              深度体验济南传统民俗文化，感受泉城独特的文化魅力
            </p>
          </div>
        </div>
      </div>

      {/* Theme Categories */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {folkloreThemes.map((theme) => (
            <div
              key={theme.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer"
              onClick={() => setSelectedTheme(theme.id)}
            >
              <div className={`h-32 bg-gradient-to-br ${theme.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-6xl opacity-20 absolute -top-4 -right-4 transform rotate-12">
                  {theme.icon}
                </div>
                <div className="text-4xl z-10">{theme.icon}</div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  {theme.name}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {theme.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    {theme.activities.length} 个体验项目
                  </span>
                  <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all duration-300">
                    <span>探索体验</span>
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FolkloreGuide;