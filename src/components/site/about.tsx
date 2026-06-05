import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section className="about-section" id="about">
      <SectionHeading title="关于智医康" subtitle="连接生命，赋能健康" />
      <p>
        上海智医康科技有限公司是一家专注于慢病数字化疗法的前沿医疗科技企业。我们深度融合AI大模型能力与医疗级物联网硬件，通过结构化真实世界数据（RWD）赋能医生决策，提升患者生存质量与生存期。
        智医康创始团队由来自平安、哈啰、上海三甲医院的人工智能、医学、物联网专家组成，我们致力于帮助慢病患者科学康复，并坚持以循证医学为底座，助力“健康中国2030”建设。
      </p>
    </section>
  );
}

