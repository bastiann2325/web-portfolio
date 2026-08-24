/**
 * Tokens — the design system's primitive layer (raw values).
 *
 * A single `tokens` object, nested and grouped by category; it's the only
 * public export. Only `theme/theme.js` consumes it, mapping these primitives
 * to semantic roles (`bg`/`text`/`action`/…). Components NEVER import from
 * here directly: they read from the `theme` injected by `ThemeProvider`.
 */

const colors = {
  white: "#FFFFFF",
  black: "#000000",

  // Base — "Deep Indigo"
  canvas: "#0B0D12",
  surface: "#14171F",
  surfaceAlt: "#1B1F29",
  overlay: "rgba(11, 13, 18, 0.72)",

  border: "#242835",
  borderSoft: "rgba(255, 255, 255, 0.08)",
  borderStrong: "rgba(255, 255, 255, 0.16)",

  textPrimary: "#E7E9EE",
  textMuted: "#8A8F9C",
  textHeading: "#F4F5F8",

  // Accents
  accentPrimary: "#7C6FF0",
  accentPrimaryHover: "#8F84F5",
  accentPrimaryActive: "#6858E0",
  accentPrimarySoft: "rgba(124, 111, 240, 0.14)",

  accentSecondary: "#34D399",
  accentSecondarySoft: "rgba(52, 211, 153, 0.14)",

  danger: "#F1608B",
  dangerSoft: "rgba(241, 96, 139, 0.14)",
};

export const tokens = {
  color: colors,

  space: {
    0: "0px",
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    7: "28px",
    8: "32px",
    10: "40px",
    12: "48px",
    16: "64px",
    20: "80px",
    24: "96px",
  },

  radius: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    pill: "999px",
    circle: "50%",
  },

  font: {
    family: {
      display: '"Sora", "Segoe UI", sans-serif',
      body: '"Inter", "Segoe UI", sans-serif',
      mono: '"JetBrains Mono", "Consolas", monospace',
    },
    size: {
      xxs: "12px",
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "22px",
      xxl: "32px",
      xxxl: "48px",
      display: "clamp(2.5rem, 5vw, 4rem)",
    },
    weight: {
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    lineHeight: {
      tight: "1.15",
      normal: "1.5",
      loose: "1.75",
    },
  },

  shadow: {
    card: "0 1px 2px rgba(0, 0, 0, 0.3), 0 8px 24px rgba(0, 0, 0, 0.35)",
    popover: "0 4px 16px rgba(0, 0, 0, 0.5)",
    focus: "0 0 0 3px rgba(124, 111, 240, 0.35)",
    glow: "0 0 24px rgba(124, 111, 240, 0.35)",
  },

  zIndex: {
    base: 0,
    nav: 100,
    modal: 1000,
  },

  motion: {
    duration: {
      fast: "150ms",
      normal: "250ms",
      slow: "500ms",
    },
    easing: {
      standard: "cubic-bezier(0.2, 0, 0, 1)",
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
    },
  },

  breakpoint: {
    sm: "480px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
};

export default tokens;
