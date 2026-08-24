import PropTypes from "prop-types";
import { StyledNavLink } from "./NavLink.styles";

/**
 * @component NavLink
 * @description Anchor link for the navigation menu, with an animated
 * underline on hover.
 *
 * @prop {string} href - Anchor target (e.g. `"#about"`).
 * @prop {React.ReactNode} children - Link label.
 * @prop {React.MouseEventHandler} [onClick] - Click handler (e.g. to close the mobile menu).
 */
const NavLink = ({ href, children, onClick }) => (
  <StyledNavLink href={href} onClick={onClick}>
    {children}
  </StyledNavLink>
);

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default NavLink;
