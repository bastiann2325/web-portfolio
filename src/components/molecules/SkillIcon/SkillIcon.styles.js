import styled from "styled-components";
import { motion } from "framer-motion";

export const IconBubble = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.bg.elevated};
  border: 1px solid ${({ theme }) => theme.border.default};
  transition: ${({ theme }) =>
    `border-color ${theme.motion.duration.normal} ${theme.motion.easing.standard}, box-shadow ${theme.motion.duration.normal} ${theme.motion.easing.standard}`};

  img {
    object-fit: contain;
  }
`;

export const Monogram = styled.span`
  font-family: ${({ theme }) => theme.font.family.mono};
  font-size: ${({ theme }) => theme.font.size.xxs};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.text.muted};
`;

export const Label = styled.span`
  font-size: ${({ theme }) => theme.font.size.xxs};
  color: ${({ theme }) => theme.text.muted};
  text-align: center;
`;

export const Card = styled(motion.div).attrs({ "data-component": "SkillIcon" })`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  cursor: default;

  &:hover ${IconBubble} {
    border-color: ${({ $color }) => $color || "transparent"};
    box-shadow: ${({ $color }) => ($color ? `0 0 20px ${$color}55` : "none")};
  }

  &:hover ${Label} {
    color: ${({ theme }) => theme.text.primary};
  }
`;
