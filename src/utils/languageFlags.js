/**
 * Language code -> color stripes for the `LanguageFlag` circle. These are
 * not real flags, just flat color stripes inspired by each country's flag.
 */
export const languageFlagMap = {
  es: ["#F1BF00", "#AA151B"],
  en: ["#01309e", "#C8102E", "#FFFFFF"],
};

/**
 * @function getLanguageFlag
 * @description Looks up the color stripes for a given language code.
 *
 * @param {string} code - Language code (e.g. `"es"`, `"en"`).
 * @returns {string[]} Hex colors for that language, or `[]` if unknown.
 */
export const getLanguageFlag = (code) => languageFlagMap[code] ?? [];
