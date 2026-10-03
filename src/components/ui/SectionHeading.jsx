export default function SectionHeading({ eyebrow, title, intro, action }) {
  return (
    <div className="section-heading">
      <div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{intro && <p>{intro}</p>}</div>
      {action}
    </div>
  );
}
