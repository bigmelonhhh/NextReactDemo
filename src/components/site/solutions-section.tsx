import Image from "next/image";

import { solutionItems } from "@/content/zhuofan";
import { SectionTitle } from "./section-title";

export function SolutionsSection() {
  return (
    <section className="zf-solutions" id="solutions">
      <SectionTitle title="解决方案" english="SOLUTION" description="为客户提供最优质的服务，我们始终用心在做" />
      <div className="zf-solution-grid">
        {solutionItems.map((item) => (
          <a className="zf-solution-card" href="#" key={item.title}>
            <span className="zf-solution-card__icon">
              <Image
                className="zf-solution-card__icon-default"
                src={item.icon}
                alt=""
                width={160}
                height={160}
                aria-hidden="true"
                unoptimized
                loading="eager"
              />
              <Image
                className="zf-solution-card__icon-active"
                src={item.iconActive}
                alt=""
                width={160}
                height={160}
                aria-hidden="true"
                unoptimized
                loading="eager"
              />
            </span>
            <h3>{item.title}</h3>
            <span className="zf-solution-card__slash">/</span>
            <p>{item.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
