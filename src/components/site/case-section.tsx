import { caseItems, zhuofanAsset } from "@/content/zhuofan";
import { SectionTitle } from "./section-title";

export function CaseSection() {
  return (
    <section className="zf-cases" id="cases">
      <div className="zf-cases__bg" aria-hidden="true" style={{ backgroundImage: `url(${zhuofanAsset("img/newIndexOne/bj.png")})` }} />
      <div className="zf-cases__content">
        <SectionTitle title="客户案例" english="CASE" description="创新驱动，我们以业务和经验取胜" inverse />
        <div className="zf-case-grid">
          {caseItems.map((item, index) => (
            <a className="zf-case-grid__item" href="#" key={item.title}>
              <div>
                <span className="zf-case-grid__number">{index + 1}</span>
                <h3>{item.title}</h3>
                <i aria-hidden="true" />
              </div>
              <p>{item.area}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
