import PropTypes from "prop-types";
import { LanguageFlag } from "../../atoms";
import { Card, Info, Name, Level } from "./LanguageCard.styles";

/**
 * @component LanguageCard
 * @description Full-width row for a spoken language: color-stripe circle
 * (`LanguageFlag`) + name + level. Animates in on scroll and highlights with
 * a slight shift + glow on hover.
 *
 * @prop {string} name - Language name (already translated).
 * @prop {string} level - Proficiency level (already translated).
 * @prop {string} code - Language code, forwarded to `LanguageFlag`.
 * @prop {number} [index=0] - Position in the list, used to stagger the entrance delay.
 */
const LanguageCard = ({ name, level, code, index = 0 }) => (
  <Card
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.4, delay: index * 0.12 }}
    whileHover={{ x: 6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
  >
    <LanguageFlag code={code} />
    <Info>
      <Name>{name}</Name>
      <Level>{level}</Level>
    </Info>
  </Card>
);

LanguageCard.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  index: PropTypes.number,
};

export default LanguageCard;
