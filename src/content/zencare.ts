import type { LucideIcon } from "lucide-react";
import {
  Activity,
  FileText,
  HeartPulse,
  MessageCircle,
  Pill,
  Utensils,
} from "lucide-react";

export const navItems = [
  { label: "首页", href: "#home" },
  { label: "服务载体", href: "#carrier" },
  { label: "数字疗法", href: "#dtx" },
  { label: "关于我们", href: "#about" },
];

export const carrierItems = [
  {
    title: "智能腕表 (Smart Watch)",
    description:
      "核心中枢，内置4G模组可独立通讯。支持动态血压、心率、血氧饱和度实时监测。",
    image: "/images/zencare/smart-watch.webp",
    imageAlt: "智能腕表",
    points: ["无感采集体征数据", "任务提醒实时通知", "AI智能问卷交互"],
  },
  {
    title: "医疗级物联网外设",
    description:
      "实时监测，异常报警。集成智能血压计、血氧计、体重秤，自动同步数据至云端。",
    image: "/images/zencare/iot-devices.webp",
    imageAlt: "医疗级物联网外设",
    points: ["上臂式医疗级精准测量", "恶液质风险监控 (体重)", "指夹式血氧饱和度监测"],
  },
];

export type TherapyItem = {
  title: string;
  icon: LucideIcon;
  points: string[];
};

export const therapyItems: TherapyItem[] = [
  {
    title: "药物管理",
    icon: Pill,
    points: ["个性化用药方案制定", "居家服药依从性提醒", "药品副作用监测与预警"],
  },
  {
    title: "指标监测",
    icon: Activity,
    points: ["血压、心率、血氧连续追踪", "运动步数与睡眠质量分析", "基线指标异常自动预警"],
  },
  {
    title: "症状跟踪",
    icon: MessageCircle,
    points: ["气促、胸闷、咳嗽评估", "咯血/痰色风险评估", "疼痛量表定期随访评估"],
  },
  {
    title: "复查解读",
    icon: FileText,
    points: ["CT影像/生化报告解读", "根据预后调整复查计划", "肿瘤标志物趋势化分析"],
  },
  {
    title: "膳食营养",
    icon: Utensils,
    points: ["肺癌专病定制化食谱建议", "体重波动风险评估与干预", "营养健康宣教指导"],
  },
  {
    title: "心理/运动",
    icon: HeartPulse,
    points: ["焦虑/抑郁量表定期评估", "术后肺功能康复运动指导", "情感关怀与陪伴交互"],
  },
];

