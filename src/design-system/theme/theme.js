/**
 * Theme — maps the primitive tokens to semantic roles.
 * This is the only object components consume (via `ThemeProvider`).
 * The site is dark-mode only: there's no `buildTheme(mode)`, `theme` is
 * already the final instance.
 */
import { tokens } from "../tokens/tokens";

export const theme = {
  // Direct pass-through of the token groups
  space: tokens.space,
  radius: tokens.radius,
  font: tokens.font,
  shadow: tokens.shadow,
  zIndex: tokens.zIndex,
  motion: tokens.motion,
  breakpoint: tokens.breakpoint,

  // Backgrounds
  bg: {
    app: tokens.color.canvas,
    surface: tokens.color.surface,
    elevated: tokens.color.surfaceAlt,
    overlay: tokens.color.overlay,
  },

  // Text
  text: {
    primary: tokens.color.textPrimary,
    muted: tokens.color.textMuted,
    heading: tokens.color.textHeading,
    inverse: tokens.color.canvas,
  },

  // Borders
  border: {
    default: tokens.color.borderSoft,
    strong: tokens.color.borderStrong,
    hairline: tokens.color.border,
  },

  // Actions / buttons
  action: {
    primary: tokens.color.accentPrimary,
    primaryHover: tokens.color.accentPrimaryHover,
    primaryActive: tokens.color.accentPrimaryActive,
    onPrimary: tokens.color.white,
    ghostHover: tokens.color.accentPrimarySoft,
  },

  // Accents with their own meaning (outside of buttons)
  accent: {
    primary: tokens.color.accentPrimary,
    primarySoft: tokens.color.accentPrimarySoft,
    secondary: tokens.color.accentSecondary,
    secondarySoft: tokens.color.accentSecondarySoft,
  },

  // Semantic states (contact form)
  intent: {
    danger: tokens.color.danger,
    dangerSoft: tokens.color.dangerSoft,
  },

  // Fixed navigation bar
  nav: {
    bg: "rgba(11, 13, 18, 0.75)",
    border: tokens.color.borderSoft,
  },

  // Shared layout values
  layout: {
    maxWidth: "1120px",
    sectionPaddingY: tokens.space[24],
  },
};

export default theme;
