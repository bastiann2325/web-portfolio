import PropTypes from "prop-types";
import { motion, useReducedMotion } from "framer-motion";
import { Frame } from "./DevAvatar.styles";

/**
 * @component DevAvatar
 * @description Vector illustration of a generic "developer" (not a real
 * photo). Floats gently and blinks in a loop; both animations are disabled
 * when the visitor has `prefers-reduced-motion` on.
 *
 * @prop {string} label - Accessible description (translated by the caller), used as `aria-label`.
 */
const DevAvatar = ({ label }) => {
  const reduceMotion = useReducedMotion();

  const floatAnimation = reduceMotion
    ? {}
    : { y: [0, -10, 0], transition: { duration: 5, repeat: Infinity, ease: "easeInOut" } };

  const blinkAnimation = reduceMotion
    ? {}
    : {
        scaleY: [1, 1, 0.1, 1, 1],
        transition: { duration: 4.5, repeat: Infinity, times: [0, 0.9, 0.94, 0.98, 1] },
      };

  return (
    <Frame animate={floatAnimation}>
      <svg viewBox="0 0 320 320" role="img" aria-label={label}>
        <circle cx="160" cy="160" r="150" className="halo" />

        {/* laptop */}
        <rect x="90" y="196" width="140" height="86" rx="10" className="laptop-base" />
        <rect x="100" y="150" width="120" height="80" rx="8" className="laptop-screen" />
        <text x="160" y="196" textAnchor="middle" className="code-glyph">
          {"</>"}
        </text>

        {/* head */}
        <circle cx="160" cy="112" r="58" className="head" />
        <path d="M104 88 Q160 44 216 88" className="hair" fill="none" strokeWidth="10" strokeLinecap="round" />

        {/* glasses */}
        <g className="glasses" fill="none" strokeWidth="5">
          <circle cx="134" cy="112" r="20" />
          <circle cx="186" cy="112" r="20" />
          <line x1="154" y1="112" x2="166" y2="112" />
        </g>

        {/* eyes */}
        <motion.rect x="128" y="108" width="12" height="8" rx="4" className="eye" animate={blinkAnimation} />
        <motion.rect x="180" y="108" width="12" height="8" rx="4" className="eye" animate={blinkAnimation} />

        {/* mouth */}
        <path d="M142 140 Q160 152 178 140" className="mouth" fill="none" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </Frame>
  );
};

DevAvatar.propTypes = {
  label: PropTypes.string.isRequired,
};

export default DevAvatar;
