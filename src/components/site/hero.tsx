import { FlaskConical } from "lucide-react";

export function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <h1>
          基于AI与智能硬件的
          <br />
          肺癌数字化康复管理
        </h1>
        <p>
          连接患者与医生的数字化桥梁。通过医疗级物联网硬件实现连续体征监测，将院外康复由“盲盒”状态转为精细化管理。
        </p>
        <a className="primary-cta" href="#carrier">
          了解详情
        </a>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="medical-orbit">
          <div className="orbit-core">
            <FlaskConical strokeWidth={2.4} />
          </div>
          <span className="orbit-ring orbit-ring--one">
            <i />
            <i />
          </span>
          <span className="orbit-ring orbit-ring--two">
            <i />
            <i />
          </span>
        </div>
      </div>
    </section>
  );
}

