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
          image: 'https://images.pexels.com/photos/8828786/pexels-photo-8828786.jpeg',
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
          image: 'https://images.pexels.com/photos/5946080/pexels-photo-5946080.jpeg',
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
          image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
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
          image: 'https://images.pexels.com/photos/5946074/pexels-photo-5946074.jpeg',
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
          image: 'https://images.pexels.com/photos/8828786/pexels-photo-8828786.jpeg',
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
          image: 'https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg',
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
          image: 'https://images.pexels.com/photos/8828786/pexels-photo-8828786.jpeg',
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
          image: 'https://images.pexels.com/photos/5946074/pexels-photo-5946074.jpeg',
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
          image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
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
      'spring-poetry': {
        history: {
          title: '历史溯源',
          content: `泉边诗会是济南文人雅集的传统形式，起源于宋代，历经千年传承至今。

**历史发展：**
• **宋代兴起**：苏轼、曾巩等文人在济南任职期间，常在泉边举办诗会
• **元明繁荣**：形成了固定的诗会制度，每月定期在名泉旁聚会
• **清代鼎盛**：蒲松龄、王士禛等著名文人参与，诗会影响力达到顶峰
• **民国传承**：老舍、臧克家等现代文人继续这一传统
• **当代复兴**：结合文化旅游，以体验形式重现古代文人雅集

**文化意义：**
泉边诗会不仅是文学创作活动，更是济南文人精神的体现，展现了泉城深厚的文化底蕴。`
        },
        experience: {
          title: '当代体验形式',
          content: `现代泉边诗会将传统文人雅集与现代文化体验相结合，让参与者感受古代文人的雅致生活。

**活动内容：**
• **古装体验**：穿着汉服或文人服饰，营造古代氛围
• **诗词朗诵**：朗诵历代文人赞美济南的经典诗词
• **即兴创作**：在导师指导下创作关于泉水的诗词
• **古乐伴奏**：古琴、箫等传统乐器现场演奏
• **书法展示**：现场书写诗词作品，可带走留念

**特色环节：**
• 文人雅集礼仪学习
• 古代文学知识问答
• 诗词接龙游戏
• 名泉典故讲解
• 文化名人故事分享`
        },
        guide: {
          title: '实操指南',
          content: `**活动详情：**
• **时间**：每周六下午14:00-17:00
• **地点**：黑虎泉、五龙潭公园
• **季节**：春季、夏季为最佳时节

**活动流程：**
1. **集合准备**（20分钟）
   - 在指定地点集合签到
   - 更换古装服饰
   - 了解活动规则和流程

2. **文化讲解**（30分钟）
   - 济南诗会历史介绍
   - 著名文人与济南的故事
   - 古代文人雅集礼仪

3. **诗词朗诵**（40分钟）
   - 经典诗词集体朗诵
   - 个人才艺展示
   - 古乐伴奏表演

4. **创作体验**（50分钟）
   - 即兴诗词创作指导
   - 书法练习和展示
   - 作品点评和交流

5. **雅集总结**（20分钟）
   - 作品展示和分享
   - 合影留念
   - 颁发参与证书

**预约方式：**
• **微信预约**：搜索"济南诗会体验"小程序
• **电话预约**：0531-8888-7780
• **现场报名**：黑虎泉游客服务中心

**费用标准：**
• 成人：158元/人（含服装租赁）
• 学生：118元/人（凭学生证）
• 家庭套餐：398元/3人

**温馨提示：**
• 建议有一定诗词基础的参与者报名
• 雨天活动改为室内进行
• 可提前准备自己喜欢的诗词作品`
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
      },
      'old-street-tour': {
        history: {
          title: '历史溯源',
          content: `济南古街巷承载着千年历史文化，是老济南人生活方式的真实写照。

**街巷发展史：**
• **唐宋奠基**：曲水亭街、王府池子等古街巷初具规模
• **明清繁荣**：商业发达，形成了独特的街巷文化
• **民国变迁**：西方文化影响下的中西合璧建筑风格
• **现代保护**：政府重视古街巷保护，恢复历史风貌

**文化特色：**
• **建筑风格**：传统四合院、商铺建筑保存完好
• **生活方式**：保持着传统的邻里关系和生活习俗
• **商业文化**：传统手工艺、小吃等延续至今
• **民俗传统**：节庆活动、民间艺术表演等`
        },
        experience: {
          title: '当代体验形式',
          content: `现代古街民俗导览结合历史文化与现代旅游需求，提供深度文化体验。

**导览内容：**
• **历史建筑解读**：详细介绍古建筑的历史和特色
• **民俗文化体验**：参与传统手工艺制作和表演
• **老济南生活重现**：体验传统生活方式和习俗
• **美食文化品尝**：品尝地道的济南传统小吃
• **文化故事讲述**：听取古街巷的历史故事和传说

**特色服务：**
• 专业文化导游讲解
• 提供古装拍照服务
• 赠送文化纪念品
• 制作个人文化护照
• 参与传统游戏活动`
        },
        guide: {
          title: '实操指南',
          content: `**导览安排：**
• **时长**：3-4小时深度游览
• **路线**：曲水亭街→王府池子→芙蓉街→宽厚里
• **最佳时间**：春秋两季，上午9:00或下午14:00出发

**详细行程：**
1. **曲水亭街**（60分钟）
   - 古建筑群参观
   - 传统文化讲解
   - 手工艺体验

2. **王府池子**（45分钟）
   - 泉水文化介绍
   - 古井历史故事
   - 民俗表演观赏

3. **芙蓉街**（90分钟）
   - 传统小吃品尝
   - 商业文化体验
   - 老字号店铺参观

4. **宽厚里**（45分钟）
   - 现代与传统结合
   - 文化创意产品
   - 总结分享交流

**预约信息：**
• **预约电话**：0531-8888-7781
• **集合地点**：曲水亭街入口处
• **团队要求**：10-40人，需提前预约

**收费标准：**
• 成人：98元/人（含导览、小食品尝）
• 学生：78元/人（凭学生证）
• 儿童：免费（12岁以下，需成人陪同）
• 私人定制：200元/人（专属导游）

**注意事项：**
• 穿着舒适的步行鞋
• 携带相机记录美好时光
• 尊重当地居民生活
• 保护古建筑和文物`
        }
      },
      'traditional-opera': {
        history: {
          title: '历史溯源',
          content: `吕剧是山东省的代表性地方戏曲，起源于19世纪中叶的山东东营地区，后传入济南并得到发展。

**发展历程：**
• **起源阶段**（1850-1900）：由民间说唱"坐腔扬琴"发展而来
• **形成时期**（1900-1930）：在济南等地演出，逐渐形成完整的戏曲形式
• **繁荣阶段**（1930-1960）：涌现出郎咸芬、林建华等著名表演艺术家
• **传承发展**（1960至今）：被列为国家级非物质文化遗产

**艺术特色：**
• **唱腔特点**：旋律优美，富有浓郁的山东地方特色
• **表演风格**：朴实自然，贴近生活
• **剧目内容**：多反映农村生活和民间故事
• **音乐伴奏**：以板胡为主要伴奏乐器`
        },
        experience: {
          title: '当代体验形式',
          content: `现代吕剧表演体验将传统戏曲艺术与现代教学相结合，让参与者深度了解这一珍贵的文化遗产。

**体验内容：**
• **基础唱腔学习**：学习吕剧的基本唱腔和发声技巧
• **身段表演训练**：掌握吕剧的基本身段和表演动作
• **化妆体验**：学习传统戏曲化妆技艺
• **服装试穿**：穿着传统戏服，感受角色魅力
• **经典剧目片段**：学习和表演经典吕剧选段

**专业指导：**
• 国家级非遗传承人授课
• 专业戏曲演员示范
• 个性化指导和点评
• 舞台表演实践机会
• 录制个人表演视频`
        },
        guide: {
          title: '实操指南',
          content: `**课程安排：**
• **时长**：单次体验3小时，系统学习10次课
• **地点**：济南市文化馆、明府城戏曲体验中心
• **班型**：小班教学，每班5-15人

**学习流程：**
1. **理论学习**（30分钟）
   - 吕剧历史文化介绍
   - 基本知识和术语
   - 著名演员和经典剧目

2. **发声练习**（45分钟）
   - 呼吸方法训练
   - 发声技巧练习
   - 基础唱腔学习

3. **身段训练**（45分钟）
   - 基本功练习
   - 手眼身法步训练
   - 角色表演技巧

4. **化妆体验**（30分钟）
   - 传统戏曲化妆学习
   - 服装穿戴体验
   - 角色造型完成

5. **表演实践**（30分钟）
   - 经典选段表演
   - 老师指导点评
   - 录制表演视频

**报名方式：**
• **电话报名**：0531-8888-7782
• **现场报名**：济南市文化馆一楼大厅
• **网上报名**：关注"济南吕剧传承"公众号

**收费标准：**
• 体验课：188元/人/次
• 系统课程：1580元/人（10次课）
• 私教课程：300元/人/次
• 团体定制：150元/人（10人以上）

**特别说明：**
• 零基础可参与，无年龄限制
• 提供专业服装和化妆用品
• 结业可获得体验证书
• 优秀学员可参与公开演出`
        }
      },
      'wall-hiking': {
        history: {
          title: '历史溯源',
          content: `齐长城是中国现存最古老的长城，始建于春秋时期的齐国，比秦长城早400多年。

**建设历程：**
• **春秋初期**（公元前7世纪）：齐桓公时期开始修建
• **战国时期**（公元前4-3世纪）：齐威王、齐宣王时期大规模扩建
• **秦汉时期**：部分段落得到维修和加固
• **历代变迁**：经历了2600多年的风雨沧桑

**文化价值：**
• **军事防御**：抵御外敌入侵的重要军事设施
• **文化象征**：齐国强盛时期的历史见证
• **工程奇迹**：古代劳动人民智慧的结晶
• **文物价值**：被列为全国重点文物保护单位

**济南段特色：**
济南境内的齐长城遗址保存相对完好，是了解古代军事文化的重要窗口。`
        },
        experience: {
          title: '当代体验形式',
          content: `现代齐长城徒步体验将历史文化与户外运动相结合，提供独特的文化旅游体验。

**体验项目：**
• **历史遗迹徒步**：沿齐长城遗址进行专业徒步
• **考古体验**：参与模拟考古发掘活动
• **军事文化学习**：了解古代军事防御体系
• **传统祭祖仪式**：缅怀古代建设者的功绩
• **野外生存技能**：学习基本的户外生存知识

**特色活动：**
• 专业导游讲解历史文化
• 提供专业徒步装备
• 制作个人徒步证书
• 品尝传统野餐食品
• 观看日出日落美景`
        },
        guide: {
          title: '实操指南',
          content: `**活动安排：**
• **时长**：1-2天（可选择不同强度路线）
• **地点**：长清区齐长城遗址公园
• **最佳季节**：春季（4-5月）、秋季（9-10月）

**徒步路线：**
1. **入门路线**（半天，5公里）
   - 适合初学者和家庭
   - 平缓路段为主
   - 重点文物点参观

2. **标准路线**（1天，12公里）
   - 适合有一定体能的参与者
   - 包含主要遗址段落
   - 深度文化体验

3. **挑战路线**（2天，25公里）
   - 适合资深徒步爱好者
   - 全程野外露营
   - 完整的长城体验

**活动流程：**
1. **集合准备**（30分钟）
   - 装备检查和分发
   - 安全注意事项说明
   - 路线介绍和分组

2. **历史讲解**（45分钟）
   - 齐长城历史文化介绍
   - 重要遗址点解说
   - 考古发现分享

3. **徒步体验**（根据路线而定）
   - 专业向导带领
   - 定点休息和补给
   - 摄影指导服务

4. **祭祖仪式**（30分钟）
   - 缅怀古代建设者
   - 传统仪式体验
   - 许愿祈福活动

**预约信息：**
• **预约电话**：0531-8888-7783
• **集合地点**：长清区齐长城游客中心
• **装备要求**：提供专业徒步装备租赁

**收费标准：**
• 入门路线：128元/人
• 标准路线：258元/人
• 挑战路线：488元/人（含住宿餐饮）
• 装备租赁：50元/套/天

**安全提醒：**
• 需要一定的体能基础
• 严格遵守安全规定
• 保护文物古迹
• 注意环境保护`
        }
      },
      'ancient-military': {
        history: {
          title: '历史溯源',
          content: `齐国军事文化是春秋战国时期最为发达的军事体系之一，对后世产生了深远影响。

**军事制度发展：**
• **春秋时期**：齐桓公改革，建立了完善的军事制度
• **战国时期**：齐威王、齐宣王时期军事力量达到顶峰
• **兵器发展**：青铜兵器制造技术领先，铁器时代的先驱
• **战术创新**：发展了独特的车战和步战结合战术

**军事文化特色：**
• **兵器制造**：青铜剑、戈、矛等制作工艺精湛
• **军事思想**：《孙子兵法》等军事理论的实践基地
• **防御工程**：齐长城等大型军事防御设施
• **军队组织**：完善的军事等级和指挥体系

**文化价值：**
齐国军事文化体现了古代中国军事智慧的高度发展，是研究古代军事史的重要资料。`
        },
        experience: {
          title: '当代体验形式',
          content: `现代古代军事文化体验通过互动式教学，让参与者深入了解齐国军事文明。

**体验内容：**
• **古代兵器制作**：学习制作青铜剑、木制弓箭等
• **军事阵法演练**：体验古代军队的阵型和战术
• **军事装备试穿**：穿着复原的古代军服和盔甲
• **射箭技艺学习**：学习传统弓箭射击技术
• **军事文物观摩**：近距离观察真实的古代兵器

**教学特色：**
• 考古专家现场讲解
• 专业工匠指导制作
• 互动式体验教学
• 多媒体辅助展示
• 个人作品可带走`
        },
        guide: {
          title: '实操指南',
          content: `**活动详情：**
• **时长**：半天体验（4小时）或全天深度体验（8小时）
• **地点**：齐长城博物馆、军事文化体验基地
• **适合人群**：10岁以上，对历史文化感兴趣的参与者

**体验流程：**
1. **文化导入**（45分钟）
   - 齐国军事历史介绍
   - 古代兵器发展史
   - 军事制度解析

2. **文物观摩**（30分钟）
   - 真实古代兵器展示
   - 考古发现介绍
   - 制作工艺解析

3. **制作体验**（120分钟）
   - 选择制作项目
   - 工匠师傅指导
   - 亲手制作兵器模型

4. **军事演练**（60分钟）
   - 古代阵法学习
   - 射箭技艺练习
   - 团队协作训练

5. **成果展示**（15分钟）
   - 作品展示交流
   - 颁发体验证书
   - 合影留念

**预约方式：**
• **电话预约**：0531-8888-7784
• **网络预约**：齐长城博物馆官网
• **现场预约**：博物馆服务台

**收费标准：**
• 半天体验：168元/人
• 全天体验：298元/人
• 学生优惠：凭学生证享受8折
• 团体优惠：15人以上享受9折

**注意事项：**
• 制作过程需要使用工具，注意安全
• 穿着适合活动的服装
• 儿童需成人陪同参与
• 制作的兵器模型仅供纪念，不可用作他用`
        }
      },
      'beacon-fire': {
        history: {
          title: '历史溯源',
          content: `烽火台是古代重要的军事通信设施，齐长城沿线的烽火台系统是古代通信技术的杰出代表。

**发展历史：**
• **春秋时期**：齐国开始在长城沿线建设烽火台
• **战国时期**：形成了完整的烽火通信网络
• **秦汉时期**：烽火台制度得到进一步完善
• **历代传承**：一直使用到明清时期

**技术特点：**
• **信号传递**：白天燃烟，夜晚举火
• **编码系统**：不同的烟火组合代表不同信息
• **传递速度**：可在数小时内传递千里信息
• **网络覆盖**：形成了覆盖整个边防线的通信网

**文化意义：**
烽火台体现了古代中国在通信技术方面的卓越成就，是古代军事智慧的重要体现。`
        },
        experience: {
          title: '当代体验形式',
          content: `现代烽火台文化节通过情景重现，让参与者体验古代军事通信的神奇魅力。

**活动内容：**
• **烽火点燃仪式**：亲手点燃烽火台，体验古代通信
• **信号编码学习**：学习古代烽火信号的编码规则
• **团队协作游戏**：模拟古代军事信息传递
• **古代通信展示**：了解各种古代通信方式
• **夜间观星活动**：在烽火台上观察星空

**特色体验：**
• 穿着古代军服参与
• 学习古代军事号令
• 制作个人通信密码
• 品尝古代军粮
• 篝火晚会和文艺表演`
        },
        guide: {
          title: '实操指南',
          content: `**活动安排：**
• **时间**：夏秋季节，下午15:00-21:00
• **地点**：齐长城烽火台遗址群
• **参与人数**：20-50人，适合团队建设

**活动流程：**
1. **集合准备**（30分钟）
   - 换装古代军服
   - 分组和角色分配
   - 活动规则说明

2. **历史讲解**（45分钟）
   - 烽火台历史文化
   - 古代通信技术
   - 军事防御体系

3. **技能学习**（60分钟）
   - 烽火信号编码
   - 点火技巧训练
   - 团队协作练习

4. **实战演练**（90分钟）
   - 模拟敌情传递
   - 烽火接力比赛
   - 团队任务挑战

5. **篝火晚会**（120分钟）
   - 烽火点燃仪式
   - 古代军歌学唱
   - 文艺表演和游戏

6. **观星活动**（45分钟）
   - 古代天文知识
   - 星空观察体验
   - 许愿祈福仪式

**预约信息：**
• **预约电话**：0531-8888-7785
• **最佳时间**：夏季7-8月，秋季9-10月
• **天气要求**：晴朗无风天气

**收费标准：**
• 成人：228元/人（含晚餐）
• 学生：188元/人（凭学生证）
• 团体定制：200元/人（20人以上）
• 企业团建：特殊优惠价格面议

**安全提醒：**
• 活动涉及明火，严格遵守安全规定
• 山区活动，注意防滑防跌
• 夜间活动，携带照明设备
• 注意保暖，山区昼夜温差大
• 保护环境，不留垃圾`
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