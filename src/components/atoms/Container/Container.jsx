import PropTypes from "prop-types";
import { StyledContainer } from "./Container.styles";

/**
 * @component Container
 * @description Centered max-width wrapper used by every section of the page
 * to keep the same side padding and reading width.
 *
 * @prop {React.ElementType} [as] - Tag/component to render as (polymorphic `as`).
 * @prop {string} [id] - DOM id, used as the scroll anchor target for a section.
 * @prop {string} [className] - Extra class name, forwarded to the root element.
 * @prop {React.ReactNode} [children] - Content to render inside the container.
 */
const Container = ({ as, id, className, children }) => (
  <StyledContainer as={as} id={id} className={className}>
    {children}
  </StyledContainer>
);

Container.propTypes = {
  as: PropTypes.elementType,
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Container;
