import { forwardRef } from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./Button.styles";

/**
 * @component Button
 * @description Base button used for every CTA on the site.
 *
 * @prop {React.ElementType} [as] - Tag/component to render as (e.g. `"a"` for a link-styled button).
 * @prop {string} [href] - Target URL, used when `as="a"`.
 * @prop {React.ReactNode} [children] - Button content.
 * @prop {'solid'|'outline'|'ghost'} [variant='solid'] - Visual variant.
 * @prop {'md'|'lg'} [size='md'] - Size.
 * @prop {boolean} [fullWidth=false] - Stretches to the full width of its container.
 * @prop {boolean} [disabled=false] - Disables the button and dims it.
 * @prop {'button'|'submit'} [type='button'] - Native `type` attribute.
 * @prop {React.MouseEventHandler} [onClick] - Click handler.
 */
const Button = forwardRef(
  (
    {
      as,
      href,
      children,
      variant = "solid",
      size = "md",
      fullWidth = false,
      disabled = false,
      type = "button",
      onClick,
      ...rest
    },
    ref
  ) => (
    <StyledButton
      as={as}
      href={href}
      ref={ref}
      type={as ? undefined : type}
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </StyledButton>
  )
);

Button.displayName = "Button";

Button.propTypes = {
  as: PropTypes.elementType,
  href: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(["solid", "outline", "ghost"]),
  size: PropTypes.oneOf(["md", "lg"]),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit"]),
  onClick: PropTypes.func,
};

export default Button;
