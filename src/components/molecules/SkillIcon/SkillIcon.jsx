import PropTypes from "prop-types";
import { getTechIcon } from "../../../utils/techIcons";
import { Card, IconBubble, Label, Monogram } from "./SkillIcon.styles";

/**
 * Builds a 2-letter placeholder (e.g. "Apidog" -> "AP") for technologies
 * that don't have an `Icon`/`image` yet in `techIcons.js`.
 *
 * @function monogramFor
 * @param {string} name - Technology name.
 * @returns {string} Uppercase 2-letter monogram.
 */
const monogramFor = (name) => name.split(" ")[0].slice(0, 2).toUpperCase();

/**
 * @component SkillIcon
 * @description Card for one technology: brand icon + name, with a lift and
 * brand-color glow on hover. If the technology doesn't have an `Icon` nor an
 * `image` yet in `techIcons.js`, it falls back to a monogram placeholder
 * instead of hiding itself.
 *
 * @prop {string} name - Technology name, looked up in `techIcons.js`.
 */
const SkillIcon = ({ name }) => {
  const tech = getTechIcon(name);
  if (!tech) return null;
  const { Icon, image, color } = tech;

  return (
    <Card
      $color={color}
      whileHover={{ y: -6, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <IconBubble>
        {Icon && <Icon size={26} color={color} />}
        {!Icon && image && <img src={image} width={28} height={28} alt="" />}
        {!Icon && !image && <Monogram>{monogramFor(name)}</Monogram>}
      </IconBubble>
      <Label>{name}</Label>
    </Card>
  );
};

SkillIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SkillIcon;
