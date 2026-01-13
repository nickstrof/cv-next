type SocialLink = {
  href: string;
  icon: string;
  label: string;
};
interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}
const SocialLinks = ({ links, className = "" }: SocialLinksProps) => (
  <div className={`about-social ${className}`}>
    {links.map(({ href, icon, label }) => (
      <a href={href} target="_blank" rel="noopener noreferrer" key={label}>
        <svg width="50" height="50">
          <use xlinkHref={icon} />
        </svg>
        <span>{label}</span>
      </a>
    ))}
  </div>
);
export default SocialLinks;