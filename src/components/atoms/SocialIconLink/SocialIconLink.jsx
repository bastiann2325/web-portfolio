import PropTypes from "prop-types";
import { StyledLink } from "./SocialIconLink.styles";

/**
 * @component SocialIconLink
 * @description Circular icon button that links out to an external profile
 * (LinkedIn, GitHub). Always opens in a new tab.
 *
 * @prop {string} href - External profile URL.
 * @prop {React.ElementType} icon - Icon component to render (e.g. `FaGithub`).
 * @prop {string} label - Accessible label (used as `aria-label`).
 */
const SocialIconLink = ({ href, icon: Icon, label }) => (
  <StyledLink href={href} target="_blank" rel="noreferrer noopener" aria-label={label}>
    <Icon size={18} strokeWidth={1.75} />
  </StyledLink>
);

SocialIconLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
};

export default SocialIconLink;
