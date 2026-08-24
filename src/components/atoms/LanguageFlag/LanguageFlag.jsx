import PropTypes from "prop-types";
import { getLanguageFlag } from "../../../utils/languageFlags";
import { Circle, Stripe } from "./LanguageFlag.styles";

/**
 * @component LanguageFlag
 * @description Small circle split into color stripes for a given language
 * (`utils/languageFlags.js`), used instead of a generic icon.
 *
 * @prop {string} code - Language code (e.g. `"es"`, `"en"`), looked up in `languageFlagMap`.
 */
const LanguageFlag = ({ code }) => {
  const stripes = getLanguageFlag(code);

  return (
    <Circle>
      {stripes.map((color, index) => (
        <Stripe key={`${code}-${index}`} style={{ background: color }} />
      ))}
    </Circle>
  );
};

LanguageFlag.propTypes = {
  code: PropTypes.string.isRequired,
};

export default LanguageFlag;
