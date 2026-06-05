import { therapyItems } from "@/content/zencare";
import { SectionHeading } from "./section-heading";

export function DigitalTherapy() {
  return (
    <section className="therapy-section" id="dtx">
      <SectionHeading title="数字疗法内容" subtitle="全方位的院外“治、管、防”闭环体系" />

      <div className="therapy-grid">
        {therapyItems.map((item) => {
          const Icon = item.icon;
          return (
            <article className="therapy-card" key={item.title}>
              <h3>
                <span>
                  <Icon aria-hidden="true" />
                </span>
                {item.title}
              </h3>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}

