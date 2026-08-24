import styled from "styled-components";

export const StyledChip = styled.span.attrs({ "data-component": "Chip" })`
  display: inline-flex;
  align-items: center;
  font-family: ${({ theme }) => theme.font.family.mono};
  font-size: ${({ theme }) => theme.font.size.xxs};
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.text.primary};
  background: ${({ theme }) => theme.bg.elevated};
  border: 1px solid ${({ theme }) => `${theme.accent.primary}59`};
  border-radius: ${({ theme }) => theme.radius.pill};
  padding: ${({ theme }) => `${theme.space[1]} ${theme.space[3]}`};
  transition: ${({ theme }) => `border-color ${theme.motion.duration.fast} ${theme.motion.easing.standard},
    background ${theme.motion.duration.fast} ${theme.motion.easing.standard},
    color ${theme.motion.duration.fast} ${theme.motion.easing.standard},
    transform ${theme.motion.duration.fast} ${theme.motion.easing.standard}`};

  &:hover {
    border-color: ${({ theme }) => theme.accent.primary};
    background: ${({ theme }) => theme.accent.primarySoft};
    color: ${({ theme }) => theme.accent.primary};
    transform: translateY(-1px);
  }
`;
