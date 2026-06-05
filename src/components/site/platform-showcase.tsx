import Image from "next/image";

import { SectionHeading } from "./section-heading";

export function PlatformShowcase() {
  return (
    <section className="platform-section">
      <div className="platform-glow" aria-hidden="true" />
      <SectionHeading title="三端协同数字化平台" subtitle="医生驾驶舱 + 患者端贴身管家" />

      <div className="platform-display">
        <div className="doctor-screen">
          <Image
            src="/images/zencare/doctor-dashboard.webp"
            alt="医生驾驶舱"
            width={960}
            height={540}
            loading="eager"
            sizes="(max-width: 1024px) 90vw, 58vw"
          />
        </div>
        <div className="patient-screens">
          {[
            ["/images/zencare/patient-app-1.webp", "患者端1"],
            ["/images/zencare/patient-app-2.webp", "患者端2"],
            ["/images/zencare/patient-app-3.webp", "患者端3"],
          ].map(([src, alt]) => (
            <Image
              key={src}
              src={src}
              alt={alt}
              width={240}
              height={520}
              loading="eager"
              sizes="(max-width: 768px) 28vw, 12vw"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
