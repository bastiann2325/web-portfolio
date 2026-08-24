import styled from "styled-components";
import { motion } from "framer-motion";

export const Frame = styled(motion.div).attrs({ "data-component": "DevAvatar" })`
  width: min(320px, 70vw);
  aspect-ratio: 1;

  svg {
    width: 100%;
    height: 100%;
    overflow: visible;
  }

  .halo {
    fill: ${({ theme }) => theme.accent.primarySoft};
  }

  .laptop-base {
    fill: ${({ theme }) => theme.bg.elevated};
    stroke: ${({ theme }) => theme.border.strong};
  }

  .laptop-screen {
    fill: ${({ theme }) => theme.bg.app};
    stroke: ${({ theme }) => theme.accent.primary};
    stroke-width: 2;
  }

  .code-glyph {
    font-family: ${({ theme }) => theme.font.family.mono};
    font-size: 22px;
    font-weight: ${({ theme }) => theme.font.weight.semibold};
    fill: ${({ theme }) => theme.accent.secondary};
  }

  .head {
    fill: ${({ theme }) => theme.bg.elevated};
    stroke: ${({ theme }) => theme.border.strong};
    stroke-width: 2;
  }

  .hair {
    stroke: ${({ theme }) => theme.text.muted};
  }

  .glasses {
    stroke: ${({ theme }) => theme.accent.primary};
  }

  .eye {
    fill: ${({ theme }) => theme.text.primary};
    transform-box: fill-box;
    transform-origin: center;
  }

  .mouth {
    stroke: ${({ theme }) => theme.accent.secondary};
  }
`;
