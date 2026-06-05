import Image from "next/image";
import { Check } from "lucide-react";

import { carrierItems } from "@/content/zencare";
import { SectionHeading } from "./section-heading";

export function ServiceCarrier() {
  return (
    <section className="carrier-section" id="carrier">
      <SectionHeading title="服务载体" subtitle="由软/硬件系统驱动，构建居家康复数据基座" />

      <div className="carrier-grid">
        {carrierItems.map((item) => (
          <article className="carrier-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="device-frame">
              <Image
                src={item.image}
                alt={item.imageAlt}
                width={640}
                height={360}
                loading="eager"
                sizes="(max-width: 768px) 80vw, 40vw"
              />
            </div>
            <ul>
              {item.points.map((point) => (
                <li key={point}>
                  <Check aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
