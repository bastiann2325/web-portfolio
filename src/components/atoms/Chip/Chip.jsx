import PropTypes from "prop-types";
import { StyledChip } from "./Chip.styles";

/**
 * @component Chip
 * @description Small mono-font tag used to list technologies inside an
 * experience card. Border and hover state use the app's primary accent
 * color, the text stays neutral until hovered.
 *
 * @prop {React.ReactNode} children - Tag text (usually a technology name).
 */
const Chip = ({ children }) => <StyledChip>{children}</StyledChip>;

Chip.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Chip;
