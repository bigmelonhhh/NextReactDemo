import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { newsItems } from "@/content/zhuofan";
import { SectionTitle } from "./section-title";

export function NewsSection() {
  const [featured, ...items] = newsItems;

  return (
    <section className="zf-news" id="news">
      <SectionTitle title="资讯动态" english="NEWS" description="我们从未停止探索，为用户提供最专业的行业资讯" />

      <div className="zf-news__grid">
        <a className="zf-news-card" href="#">
          <span className="zf-news-card__image">
            {featured.image ? (
              <Image src={featured.image} alt={featured.title} fill sizes="440px" />
            ) : null}
          </span>
          <h3>{featured.title}</h3>
          <div className="zf-news-card__meta">
            <time>
              <strong>{featured.year}</strong>
              <span>{featured.month}</span>
            </time>
            <p>{featured.summary}</p>
          </div>
          <span className="zf-view-link">
            <ArrowRight aria-hidden="true" size={18} />
            查看
            <ArrowRight aria-hidden="true" size={18} />
          </span>
        </a>

        <div className="zf-news-list">
          {items.map((item) => (
            <a className="zf-news-list__item" href="#" key={item.title}>
              <time>{item.date}</time>
              <span className="zf-news-list__dot" aria-hidden="true" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </div>
              <ArrowRight className="zf-news-list__arrow" aria-hidden="true" size={20} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
