import PropTypes from "prop-types";
import { StyledChip, Dot } from "./Chip.styles";

/**
 * @component Chip
 * @description Small mono-font tag used to list technologies inside an
 * experience card. When it receives `color` (a technology's brand color, see
 * `utils/techIcons.js`), it renders it as a dot + tinted border; the text
 * itself always stays neutral so it reads well regardless of how light or
 * dark that brand color is.
 *
 * @prop {React.ReactNode} children - Tag text (usually a technology name).
 * @prop {string} [color] - Brand color (hex) used for the dot and border tint.
 */
const Chip = ({ children, color }) => (
  <StyledChip $color={color}>
    {color && <Dot $color={color} />}
    {children}
  </StyledChip>
);

Chip.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

export default Chip;
