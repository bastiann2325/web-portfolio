import PropTypes from "prop-types";
import { Eyebrow, Heading, Subtitle } from "./SectionTitle.styles";

/**
 * @component SectionTitle
 * @description Consistent heading for every section: a mono eyebrow, a large
 * title and an optional subtitle.
 *
 * @prop {string} [eyebrow] - Small uppercase label shown above the title.
 * @prop {React.ReactNode} title - Main heading text.
 * @prop {React.ReactNode} [subtitle] - Supporting text shown below the title.
 * @prop {'left'|'center'} [align='left'] - Text alignment for all three lines.
 */
const SectionTitle = ({ eyebrow, title, subtitle, align = "left" }) => (
  <header>
    {eyebrow && <Eyebrow $align={align}>{eyebrow}</Eyebrow>}
    <Heading $align={align}>{title}</Heading>
    {subtitle && <Subtitle $align={align}>{subtitle}</Subtitle>}
  </header>
);

SectionTitle.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node,
  align: PropTypes.oneOf(["left", "center"]),
};

export default SectionTitle;
