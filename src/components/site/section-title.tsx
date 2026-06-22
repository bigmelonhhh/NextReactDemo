type SectionTitleProps = {
  title: string;
  english: string;
  description: string;
  inverse?: boolean;
};

export function SectionTitle({ title, english, description, inverse = false }: SectionTitleProps) {
  return (
    <div className={inverse ? "zf-section-title zf-section-title--inverse" : "zf-section-title"}>
      <div className="zf-section-title__bar">
        <h2>{title}</h2>
        <span>{english}</span>
        <a href="#" aria-label={`查看更多${title}`}>
          <b aria-hidden="true" />
          MORE
        </a>
      </div>
      <p>{description}</p>
    </div>
  );
}
