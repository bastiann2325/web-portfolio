import styled from "styled-components";
import { motion } from "framer-motion";

export const Bar = styled.nav.attrs({ "data-component": "Navbar" })`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.nav};
  background: ${({ theme }) => theme.nav.bg};
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({ theme }) => theme.nav.border};
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space[6]};
  height: 72px;
`;

export const Logo = styled.a`
  font-family: ${({ theme }) => theme.font.family.mono};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  font-size: ${({ theme }) => theme.font.size.md};
  color: ${({ theme }) => theme.text.primary};
`;

export const Links = styled.div`
  display: none;
  align-items: center;
  gap: ${({ theme }) => theme.space[8]};
  margin-right: auto;
  margin-left: ${({ theme }) => theme.space[8]};

  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    display: flex;
  }
`;

export const MenuButton = styled.button`
  display: inline-flex;
  color: ${({ theme }) => theme.text.primary};
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    display: none;
  }
`;

export const MobileMenu = styled(motion.div)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[5]};
  padding: 0 ${({ theme }) => theme.space[6]} ${({ theme }) => theme.space[6]};
  border-bottom: 1px solid ${({ theme }) => theme.nav.border};

  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    display: none;
  }
`;
