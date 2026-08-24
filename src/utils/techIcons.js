import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiLaravel,
  SiWordpress,
  SiElementor,
  SiGoogletagmanager,
  SiGoogleanalytics,
  SiLooker,
  SiGit,
  SiGithub,
  SiPostman,
  SiTrello,
} from "react-icons/si";
import { PuzzleIcon } from "lucide-react";
import figmaLogo from "../assets/icons/figma.svg";
import apidogLogo from "../assets/icons/apidog.svg";
import azureDevopsLogo from "../assets/icons/azure-devops.svg";

/**
 * Technology name (as it appears in the locale files) -> brand icon + color.
 *
 * JetEngine has no logo in simple-icons, so it falls back to a generic
 * lucide-react icon. Figma, Apidog and Azure DevOps use their real
 * full-color SVG logo from src/assets/icons instead of a flat glyph.
 */
export const techIconMap = {
  HTML: { Icon: SiHtml5, color: "#E34F26" },
  CSS: { Icon: SiCss, color: "#663399" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  React: { Icon: SiReact, color: "#61DAFB" },
  "Node.js": { Icon: SiNodedotjs, color: "#339933" },
  Laravel: { Icon: SiLaravel, color: "#FF2D20" },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  WordPress: { Icon: SiWordpress, color: "#21759B" },
  "Elementor Pro": { Icon: SiElementor, color: "#92003B" },
  JetEngine: { Icon: PuzzleIcon, color: "#8A8F9C" },
  "Google Tag Manager": { Icon: SiGoogletagmanager, color: "#4285F4" },
  "Google Analytics 4": { Icon: SiGoogleanalytics, color: "#E37400" },
  "Looker Studio": { Icon: SiLooker, color: "#4285F4" },
  Git: { Icon: SiGit, color: "#F05032" },
  GitHub: { Icon: SiGithub, color: "#E7E9EE" },
  Figma: { image: figmaLogo, color: "#A259FF" },
  Postman: { Icon: SiPostman, color: "#FF6C37" },
  Trello: { Icon: SiTrello, color: "#0052CC" },
  Apidog: { image: apidogLogo, color: "#33BBFF" },
  "Azure DevOps": { image: azureDevopsLogo, color: "#0078D4" },
  // These only show up as a Chip in "Experience", not in the Skills grid.
  WebSockets: { color: "#00C7B7" },
  "Styled Components": { color: "#DB7093" },
  Oracle: { color: "#F80000" },
};

/**
 * @function getTechIcon
 * @description Looks up a technology's icon/image and brand color by name.
 *
 * @param {string} name - Technology name, as used in the locale files.
 * @returns {{Icon?: React.ElementType, image?: string, color?: string}|null}
 * The matching entry from `techIconMap`, or `null` if the technology isn't
 * in the map.
 */
export const getTechIcon = (name) => techIconMap[name] ?? null;
