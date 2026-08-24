import styled from "styled-components";
import { motion } from "framer-motion";

export const Info = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${({ theme }) => theme.space[3]};
`;

export const Name = styled.span`
  font-size: ${({ theme }) => theme.font.size.md};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  color: ${({ theme }) => theme.text.primary};
`;

export const Level = styled.span`
  font-family: ${({ theme }) => theme.font.family.mono};
  font-size: ${({ theme }) => theme.font.size.xxs};
  color: ${({ theme }) => theme.text.muted};
`;

export const Card = styled(motion.div).attrs({ "data-component": "LanguageCard" })`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[4]};
  width: 100%;
  padding: ${({ theme }) => `${theme.space[4]} ${theme.space[5]}`};
  border: 1px solid ${({ theme }) => theme.border.default};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.bg.surface};
  cursor: default;

  &:hover {
    border-color: ${({ theme }) => theme.accent.primary};
    box-shadow: ${({ theme }) => theme.shadow.glow};
  }
`;
