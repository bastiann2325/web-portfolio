import styled from "styled-components";

export const Dot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: ${({ theme }) => theme.radius.circle};
  flex-shrink: 0;
  background: ${({ $color }) => $color};
`;

export const StyledChip = styled.span.attrs({ "data-component": "Chip" })`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  font-family: ${({ theme }) => theme.font.family.mono};
  font-size: ${({ theme }) => theme.font.size.xxs};
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.text.primary};
  background: ${({ theme }) => theme.bg.elevated};
  border: 1px solid ${({ $color, theme }) => ($color ? `${$color}59` : theme.border.default)};
  border-radius: ${({ theme }) => theme.radius.pill};
  padding: ${({ theme }) => `${theme.space[1]} ${theme.space[3]}`};
`;
