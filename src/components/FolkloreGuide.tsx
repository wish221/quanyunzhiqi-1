import React, { useState } from 'react';
import { ArrowLeft, MapPin, Clock, Users, Camera, Book, Play } from 'lucide-react';

interface FolkloreGuideProps {
  onBack: () => void;
}

interface Activity {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  location: string;
  duration: string;
  participants: string;
  price: string;
  details: {
    history: {
      title: string;
      content: string;
    };
    experience: {
      title: string;
      content: string;
    };
    guide: {
      title: string;
      content: string;
    };
  };
}

const FolkloreGuide: React.FC<FolkloreGuideProps> = ({ onBack }) => {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  const activities: Activity[] = [
    {
      id: 'Jinan International Spring Festival',
      title: '济南国际泉水节',
      category: '泉水文化民俗',
      image: 'https://pic.baike.soso.com/p/20090109/20090109120000-102238.jpg',
      description: '千泉涌动映古今，一城欢歌向世界',
      location: '济南全城',
      duration: '7-8月',
      participants: '百万人',
      price: '不定',
      details: {
        history: {
          title: '历史溯源',
          content: `济南国际泉水节源于对济南独特泉水文化的挖掘与弘扬。为进一步彰显泉水魅力、传承泉水文化，济南整合各类泉水相关活动，打造出具有国际影响力的泉水节，以泉为媒，联结世界，祈求城市蓬勃发展、泉脉永续传承。

发展历程：
• 初创探索：2013年初步搭建泉水节框架，举办泉水游览、民俗展示等基础活动
• 成长发展：2013-2017泉水节不断丰富活动内容和形式，增加了泉水音乐节、花车巡游等项目
• 升级拓展：2018济南泉水节升级为 “济南国际泉水节” ，泉水节走向国际化
• 创新深化：加强与周边景区、商家的联动，推出一系列个性化、定制化的活动

文化价值：体现了济南人与自然和谐共生的理念，是重要的非物质文化遗产。`
        },
        experience: {
          title: '当代体验形式',
          content: `融合传统与创新，为游客提供深度文化体验：

体验内容：
• 花船巡游：分为护城河游船路线和大明湖游船路线，均有日间和夜航时段。可在码头处购票乘船，护城河游船日间 9：00—17：30 从黑虎泉船站出发，夜航 19：30—21：00 出发；大明湖游船南门码头和超然楼码头日间 9：00—17：30 运营，夜航 17：30—21：00 运营
• 济南国际泉水节夜光欢乐跑：提前关注官方通知，可通过相关报名渠道（具体可关注 “济南泉水节” 小程序或官方媒体公告）报名
• 泉水节诗词擂台赛：直接前往大明湖北岸自然广场（靠近南丰戏楼），现场可参与攻擂，挑战诗词高手。
• 跟着名士看泉水图片展：结合泉视界小程序，游客拍照打卡相关景点后，上传后台，可获得定制 “家家泉水” 文创

特色服务：
• 专业摄影师记录仪式过程
• 提供祭祀用品和纪念品
• 多语言讲解服务
• 团体定制服务`
        },
        guide: {
          title: '实操指南',
          content: `参与准备：
• 服装要求：无特别要求，可租借汉服更沉浸
• 时间安排：每周六上午9:00-11:00
• 人数限制：每场最多30人
• 预约方式：提前3天电话预约

活动流程：
1. 集合签到（8:45-9:00）
2. 文化背景介绍（9:00-9:15）
3. 服装更换（9:15-9:30）
4. 祭祀仪式（9:30-10:30）
5. 自由体验（10:30-11:00）

收费标准：
• 基础体验：免费
• 汉服租借：50元/套
• 专业摄影：100元/次

注意事项：
• 保持仪式庄重，禁止大声喧哗
• 听从工作人员指导
• 爱护文物古迹`
        }
      }
    },
    {
      id: 'spring-tea',
      title: '泉水茶艺体验',
      category: '泉水文化民俗',
      image: 'https://images.pexels.com/photos/5946080/pexels-photo-5946080.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: '用济南名泉水泡制传统茶艺，品味千年茶文化精髓',
      location: '大明湖茶社',
      duration: '1.5小时',
      participants: '5-15人',
      price: '128元/人',
      details: {
        history: {
          title: '历史溯源',
          content: `济南泉水茶艺文化始于唐代，兴盛于宋明时期。济南独特的泉水资源为茶艺文化的发展提供了得天独厚的条件。

发展历程：
• 唐代起源：茶圣陆羽在《茶经》中提及济南泉水适宜泡茶
• 宋代繁荣：文人墨客常在泉边品茶论道
• 明清鼎盛：形成独特的济南泉水茶艺流派
• 现代复兴：21世纪初开始系统性恢复传统茶艺

文化特色：济南泉水茶艺注重"水为茶之母"的理念，强调泉水与茶叶的完美结合。`
        },
        experience: {
          title: '当代体验形式',
          content: `现代泉水茶艺体验融合传统技艺与现代服务：

体验内容：
• 泉水知识：了解不同泉水的特性
• 茶叶品鉴：品尝龙井、铁观音等名茶
• 茶艺表演：观看专业茶艺师表演
• 亲手实践：学习基础泡茶技巧

特色服务：
• 使用趵突泉、黑虎泉等名泉水
• 提供优质茶具和茶叶
• 专业茶艺师一对一指导
• 赠送茶艺体验证书`
        },
        guide: {
          title: '实操指南',
          content: `参与准备：
• 服装要求：建议穿着舒适、雅致的服装
• 时间安排：每日10:00、14:00、16:00三场
• 人数限制：每场5-15人
• 预约方式：微信小程序或电话预约

活动流程：
1. 茶文化介绍（15分钟）
2. 泉水知识讲解（15分钟）
3. 茶艺表演观摩（30分钟）
4. 亲手实践体验（30分钟）

收费标准：
• 标准体验：128元/人
• VIP体验：268元/人（含高档茶叶）
• 团体优惠：10人以上9折

注意事项：
• 体验前请勿饮用浓烈饮品
• 保持安静，专心体验
• 爱护茶具，听从指导`
        }
      }
    },
    {
      id: 'poetry-gathering',
      title: '泉边诗会',
      category: '泉水文化民俗',
      image: 'https://images.pexels.com/photos/8471888/pexels-photo-8471888.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: '在泉水边吟诗作对，重现古代文人雅集的风雅情趣',
      location: '趵突泉、大明湖',
      duration: '2.5小时',
      participants: '8-20人',
      price: '88元/人',
      details: {
        history: {
          title: '历史溯源',
          content: `泉边诗会是济南文人雅集的传统形式，始于唐宋，盛于明清。历代文人墨客常在泉边聚会，吟诗作对，留下了大量脍炙人口的诗篇。

历史名人：
• 李白：曾在济南留下"海右此亭古，济南名士多"
• 杜甫：写下"海右今古亭，济南名士多"
• 辛弃疾：在济南居住期间创作大量词作
• 蒲松龄：《聊斋志异》中多处描写济南风光

文化传承：泉边诗会体现了济南深厚的文学底蕴和人文精神。`
        },
        experience: {
          title: '当代体验形式',
          content: `现代泉边诗会结合传统与创新，为文学爱好者提供雅致体验：

活动内容：
• 古诗词赏析：专业老师讲解经典诗词
• 即兴创作：参与者现场创作诗词
• 书法体验：用毛笔书写自己的作品
• 文化交流：与其他文学爱好者交流心得

特色环节：
• 穿汉服体验古代文人风采
• 古琴伴奏增添雅致氛围
• 专业摄影记录美好时光
• 作品集结成册留作纪念`
        },
        guide: {
          title: '实操指南',
          content: `参与准备：
• 文学基础：有一定古诗词基础更佳
• 服装建议：可租借汉服或穿着雅致服装
• 时间安排：每周日下午14:00-16:30
• 人数限制：8-20人小班制

活动流程：
1. 集合介绍（14:00-14:15）
2. 古诗词赏析（14:15-15:00）
3. 即兴创作（15:00-15:45）
4. 作品分享（15:45-16:15）
5. 合影留念（16:15-16:30）

收费标准：
• 基础体验：88元/人
• 含汉服：138元/人
• 含书法用品：158元/人

注意事项：
• 建议提前了解基础诗词知识
• 带好创作用的笔记本
• 保持文雅氛围`
        }
      }
    },
    {
      id: 'handicraft',
      title: '传统手工艺制作',
      category: '古城老街民俗',
      image: 'https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: '学习济南传统手工艺，体验面塑、剪纸、糖画等非遗技艺',
      location: '芙蓉街、曲水亭街',
      duration: '3小时',
      participants: '6-12人',
      price: '168元/人',
      details: {
        history: {
          title: '历史溯源',
          content: `济南传统手工艺历史悠久，是齐鲁文化的重要组成部分。这些技艺世代传承，体现了济南人民的智慧和创造力。

主要工艺：
• 面塑：始于汉代，济南面塑以精细著称
• 剪纸：唐代传入，形成独特的济南风格
• 糖画：宋代兴起，济南糖画技艺精湛
• 泥塑：明清时期达到高峰

文化价值：这些手工艺不仅是技艺传承，更是文化记忆的载体。`
        },
        experience: {
          title: '当代体验形式',
          content: `现代手工艺体验注重传承与创新并重：

体验项目：
• 面塑制作：学习基础技法，制作小动物
• 剪纸艺术：掌握基本剪法，创作窗花
• 糖画绘制：体验糖画师的神奇技艺
• 泥塑造型：制作简单的泥塑作品

教学特色：
• 非遗传承人亲自授课
• 小班制精品教学
• 提供专业工具材料
• 作品可带走留念`
        },
        guide: {
          title: '实操指南',
          content: `参与准备：
• 年龄要求：8岁以上均可参与
• 服装建议：穿着便于活动的服装
• 时间安排：每日9:00-12:00，14:00-17:00
• 人数限制：每班6-12人

活动流程：
1. 工艺介绍（30分钟）
2. 基础技法学习（60分钟）
3. 实践制作（90分钟）

收费标准：
• 单项体验：168元/人
• 双项组合：298元/人
• 全项体验：498元/人

注意事项：
• 听从老师指导，注意安全
• 保持工作台整洁
• 珍惜材料，避免浪费`
        }
      }
    },
    {
      id: 'street-tour',
      title: '古街民俗导览',
      category: '古城老街民俗',
      image: 'https://images.pexels.com/photos/8828597/pexels-photo-8828597.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: '深度游览济南古街巷，了解老济南的民俗风情和历史故事',
      location: '芙蓉街、曲水亭街、王府池子',
      duration: '2小时',
      participants: '10-25人',
      price: '58元/人',
      details: {
        history: {
          title: '历史溯源',
          content: `济南古街巷承载着千年历史文化，是老济南民俗文化的活化石。这些街巷见证了济南从古至今的变迁。

重要街巷：
• 芙蓉街：明清商业街，有400多年历史
• 曲水亭街：因曲水亭得名，文化底蕴深厚
• 王府池子：清代王府遗址，泉水文化典型
• 起凤桥街：古代文人聚集地

文化特色：这些街巷保持着传统建筑风格，承载着丰富的民俗文化。`
        },
        experience: {
          title: '当代体验形式',
          content: `现代古街导览融合历史文化与现代服务：

导览内容：
• 历史建筑介绍：了解古建筑特色
• 民俗故事讲解：听老济南的传说
• 传统美食品尝：体验地道小吃
• 文化体验活动：参与民俗互动

服务特色：
• 专业导游讲解
• 小团队精品服务
• 多媒体辅助介绍
• 个性化路线定制`
        },
        guide: {
          title: '实操指南',
          content: `参与准备：
• 体力要求：需步行2小时，适合各年龄段
• 服装建议：穿着舒适的步行鞋
• 时间安排：每日9:00、14:00、16:00
• 人数限制：10-25人

导览路线：
1. 芙蓉街（30分钟）
2. 曲水亭街（40分钟）
3. 王府池子（30分钟）
4. 起凤桥街（20分钟）

收费标准：
• 成人：58元/人
• 学生：38元/人（凭学生证）
• 儿童：免费（12岁以下）

注意事项：
• 跟随导游，不要掉队
• 保护古建筑，不要攀爬
• 注意交通安全`
        }
      }
    },
    {
      id: 'opera-experience',
      title: '吕剧表演体验',
      category: '古城老街民俗',
      image: 'https://images.pexels.com/photos/8471888/pexels-photo-8471888.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: '学习山东地方戏曲吕剧，体验传统戏曲的魅力',
      location: '济南市吕剧院',
      duration: '2.5小时',
      participants: '8-15人',
      price: '198元/人',
      details: {
        history: {
          title: '历史溯源',
          content: `吕剧是山东省的主要地方戏曲剧种，起源于19世纪末的山东东营，后在济南等地发展壮大。

发展历程：
• 1900年左右：起源于东营地区
• 1920年代：传入济南，开始职业化
• 1950年代：成为山东省主要剧种
• 2008年：列入国家级非物质文化遗产

艺术特色：吕剧唱腔优美，表演生动，贴近生活，深受山东人民喜爱。`
        },
        experience: {
          title: '当代体验形式',
          content: `现代吕剧体验注重传承与普及：

体验内容：
• 吕剧历史介绍：了解剧种发展历程
• 基础唱腔学习：学习简单唱段
• 身段表演：学习基本表演动作
• 化妆体验：体验戏曲化妆艺术

教学特色：
• 专业演员授课
• 互动式教学
• 提供戏服道具
• 录制表演视频`
        },
        guide: {
          title: '实操指南',
          content: `参与准备：
• 年龄要求：10岁以上
• 服装要求：穿着便于活动的服装
• 时间安排：每周六、日14:00-16:30
• 人数限制：8-15人小班制

活动流程：
1. 吕剧介绍（30分钟）
2. 唱腔学习（60分钟）
3. 身段练习（45分钟）
4. 化妆体验（30分钟）
5. 表演展示（15分钟）

收费标准：
• 基础体验：198元/人
• 深度体验：298元/人（含录像）
• 团体优惠：10人以上8折

注意事项：
• 保护嗓子，适量练习
• 爱护戏服道具
• 认真学习，尊重传统`
        }
      }
    },
    {
      id: 'wall-hiking',
      title: '齐长城徒步祭祖',
      category: '齐长城文化民俗',
      image: 'https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: '徒步齐长城遗址，举行传统祭祖仪式，感受古代军事文化',
      location: '长清区齐长城遗址',
      duration: '4小时',
      participants: '15-30人',
      price: '128元/人',
      details: {
        history: {
          title: '历史溯源',
          content: `齐长城是中国现存最古老的长城，始建于春秋时期，比秦长城早400多年。济南段齐长城承载着深厚的历史文化。

历史价值：
• 春秋战国：齐国为防御楚、鲁等国而建
• 军事意义：古代重要的军事防御工程
• 文化价值：体现了古代劳动人民的智慧
• 祭祖传统：当地民众世代在此祭祀先祖

现状保护：济南段齐长城已被列为全国重点文物保护单位。`
        },
        experience: {
          title: '当代体验形式',
          content: `现代齐长城体验融合徒步与文化：

体验内容：
• 徒步探索：沿古长城遗址徒步
• 历史讲解：了解齐长城历史文化
• 祭祖仪式：体验传统祭祖礼仪
• 文物观赏：近距离观察古代遗迹

路线选择：
• 初级路线：3公里，适合家庭
• 中级路线：5公里，适合青年
• 高级路线：8公里，适合资深徒步者`
        },
        guide: {
          title: '实操指南',
          content: `参与准备：
• 体力要求：需要一定体力，建议平时有运动习惯
• 装备要求：登山鞋、背包、水壶、防晒用品
• 时间安排：每周六、日8:00-12:00
• 人数限制：15-30人

活动流程：
1. 集合出发（8:00-8:30）
2. 徒步探索（8:30-10:30）
3. 祭祖仪式（10:30-11:15）
4. 自由活动（11:15-12:00）

收费标准：
• 成人：128元/人
• 学生：88元/人
• 儿童：68元/人（8-12岁）

注意事项：
• 穿着适合徒步的服装鞋子
• 带足饮用水和简单食物
• 保护文物，不得攀爬
• 听从领队指挥，注意安全`
        }
      }
    },
    {
      id: 'military-culture',
      title: '古代军事文化体验',
      category: '齐长城文化民俗',
      image: 'https://images.pexels.com/photos/8828597/pexels-photo-8828597.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: '体验古代军事训练，学习传统兵器制作和使用',
      location: '齐长城文化园',
      duration: '3小时',
      participants: '12-20人',
      price: '188元/人',
      details: {
        history: {
          title: '历史溯源',
          content: `齐国军事文化是春秋战国时期的重要组成部分，齐长城的建设体现了古代军事防御思想。

军事特色：
• 兵器制作：齐国以青铜兵器制作精良著称
• 军事策略：齐国军事思想影响深远
• 防御工程：齐长城是古代军事工程典范
• 军事训练：齐国军队训练有素，战斗力强

文化传承：古代军事文化体现了中华民族的尚武精神和智慧。`
        },
        experience: {
          title: '当代体验形式',
          content: `现代军事文化体验寓教于乐：

体验项目：
• 兵器制作：学习制作木质刀剑
• 军事训练：体验古代军事操练
• 战术演练：学习古代军事阵法
• 射箭体验：学习传统射箭技艺

安全保障：
• 专业教练指导
• 安全防护设备
• 医疗急救准备
• 保险保障`
        },
        guide: {
          title: '实操指南',
          content: `参与准备：
• 年龄要求：12岁以上
• 体力要求：需要一定体力和协调能力
• 服装建议：运动服装，运动鞋
• 时间安排：每周六、日9:00-12:00

活动流程：
1. 军事文化介绍（30分钟）
2. 兵器制作（60分钟）
3. 军事训练（60分钟）
4. 射箭体验（30分钟）

收费标准：
• 标准体验：188元/人
• VIP体验：288元/人（含纪念品）
• 团体优惠：15人以上8.5折

注意事项：
• 严格遵守安全规定
• 听从教练指导
• 爱护体验设备
• 注意团队协作`
        }
      }
    },
    {
      id: 'beacon-festival',
      title: '烽火台文化节',
      category: '齐长城文化民俗',
      image: 'https://images.pexels.com/photos/8471888/pexels-photo-8471888.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: '参与烽火台点火仪式，体验古代军事通信文化',
      location: '齐长城烽火台遗址',
      duration: '2小时',
      participants: '20-50人',
      price: '98元/人',
      details: {
        history: {
          title: '历史溯源',
          content: `烽火台是古代军事通信系统的重要组成部分，齐长城沿线设有多座烽火台，形成了完整的通信网络。

历史功能：
• 军事通信：白天举烟，夜晚点火传递军情
• 预警系统：快速传递敌情信息
• 指挥协调：协调各段长城的防御
• 文化象征：代表古代军事智慧

技术特点：烽火台选址科学，通信效率高，是古代通信技术的杰作。`
        },
        experience: {
          title: '当代体验形式',
          content: `现代烽火台文化节重现古代通信场景：

活动内容：
• 点火仪式：体验古代烽火点燃过程
• 通信演练：学习古代军事通信方法
• 团队协作：多台联动传递信息
• 文化表演：古代军事文化展示

特色环节：
• 古装体验：穿着古代士兵服装
• 角色扮演：扮演古代守台士兵
• 互动游戏：烽火传递竞赛
• 夜间活动：夜晚点火更具震撼力`
        },
        guide: {
          title: '实操指南',
          content: `参与准备：
• 年龄要求：8岁以上
• 体力要求：需要爬台阶，适合大部分人群
• 时间安排：每月第二、四个周六19:00-21:00
• 人数限制：20-50人

活动流程：
1. 集合介绍（19:00-19:15）
2. 历史讲解（19:15-19:45）
3. 点火仪式（19:45-20:15）
4. 互动体验（20:15-20:45）
5. 合影留念（20:45-21:00）

收费标准：
• 成人：98元/人
• 学生：68元/人
• 家庭套票：268元/3人

注意事项：
• 注意防火安全
• 听从工作人员指挥
• 穿着防滑鞋子
• 带好手电筒等照明设备`
        }
      }
    }
  ];

  if (selectedActivity) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <button
              onClick={() => setSelectedActivity(null)}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              返回活动列表
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-64 md:h-80">
              <img
                src={selectedActivity.image}
                alt={selectedActivity.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <span className="inline-block px-3 py-1 bg-blue-600 rounded-full text-sm font-medium mb-2">
                    {selectedActivity.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">
                    {selectedActivity.title}
                  </h1>
                  <p className="text-lg opacity-90">
                    {selectedActivity.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                  <div>
                    <div className="text-sm text-gray-500">地点</div>
                    <div className="font-medium">{selectedActivity.location}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-600 mr-2" />
                  <div>
                    <div className="text-sm text-gray-500">时长</div>
                    <div className="font-medium">{selectedActivity.duration}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-blue-600 mr-2" />
                  <div>
                    <div className="text-sm text-gray-500">人数</div>
                    <div className="font-medium">{selectedActivity.participants}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="w-5 h-5 text-blue-600 mr-2 text-lg">¥</span>
                  <div>
                    <div className="text-sm text-gray-500">价格</div>
                    <div className="font-medium">{selectedActivity.price}</div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Book className="w-6 h-6 mr-2 text-blue-600" />
                    {selectedActivity.details.history.title}
                  </h2>
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {selectedActivity.details.history.content}
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Play className="w-6 h-6 mr-2 text-blue-600" />
                    {selectedActivity.details.experience.title}
                  </h2>
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {selectedActivity.details.experience.content}
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Camera className="w-6 h-6 mr-2 text-blue-600" />
                    {selectedActivity.details.guide.title}
                  </h2>
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {selectedActivity.details.guide.content}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t">
                <button className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  立即预约体验
                </button>
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
        <div className="max-w-6xl mx-auto px-4 py-6">
          <button
            onClick={onBack}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            返回主页
          </button>
          <h1 className="text-3xl font-bold text-gray-900">济南民俗体验指南</h1>
          <p className="text-gray-600 mt-2">深度体验济南传统文化，感受千年古城的民俗魅力</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedActivity(activity)}
            >
              <div className="relative h-48">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
                    {activity.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{activity.description}</p>
                
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {activity.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {activity.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    {activity.participants}
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t flex items-center justify-between">
                  <span className="text-lg font-bold text-blue-600">{activity.price}</span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    了解详情
                  </button>
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