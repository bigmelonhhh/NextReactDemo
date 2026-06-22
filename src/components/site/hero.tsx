"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import { heroSlides } from "@/content/zhuofan";
import { cn } from "@/lib/utils";

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  const goTo = (index: number) => setActive((index + heroSlides.length) % heroSlides.length);

  return (
    <section className="zf-hero" id="home" aria-label="卓繁信息首页轮播">
      <div className="zf-hero__track" style={{ transform: `translateX(-${active * 100}%)` }}>
        {heroSlides.map((slide, index) => (
          <div className="zf-hero__slide" key={slide.image}>
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              sizes="100vw"
              priority={index === 0}
              className="zf-hero__image"
            />
          </div>
        ))}
      </div>

      <button className="zf-hero__arrow zf-hero__arrow--prev" type="button" aria-label="上一张" onClick={() => goTo(active - 1)}>
        <ChevronLeft aria-hidden="true" />
      </button>
      <button className="zf-hero__arrow zf-hero__arrow--next" type="button" aria-label="下一张" onClick={() => goTo(active + 1)}>
        <ChevronRight aria-hidden="true" />
      </button>

      <div className="zf-hero__dots" aria-label="轮播分页">
        {heroSlides.map((slide, index) => (
          <button
            className={cn("zf-hero__dot", active === index && "zf-hero__dot--active")}
            key={slide.image}
            type="button"
            aria-label={`切换到第 ${index + 1} 张`}
            aria-current={active === index}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </section>
  );
}
