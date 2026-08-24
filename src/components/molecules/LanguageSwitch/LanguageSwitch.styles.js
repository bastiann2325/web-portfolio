import styled from "styled-components";

export const Track = styled.div.attrs({ "data-component": "LanguageSwitch" })`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[1]};
  padding: ${({ theme }) => theme.space[1]};
  border: 1px solid ${({ theme }) => theme.border.default};
  border-radius: ${({ theme }) => theme.radius.pill};
`;

export const OptionButton = styled.button`
  font-family: ${({ theme }) => theme.font.family.mono};
  font-size: ${({ theme }) => theme.font.size.xxs};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  letter-spacing: 0.04em;
  padding: ${({ theme }) => `${theme.space[1]} ${theme.space[3]}`};
  border-radius: ${({ theme }) => theme.radius.pill};
  cursor: pointer;
  color: ${({ theme, $active }) => ($active ? theme.action.onPrimary : theme.text.muted)};
  background: ${({ theme, $active }) => ($active ? theme.action.primary : "transparent")};
  transition: ${({ theme }) =>
    `background ${theme.motion.duration.fast} ${theme.motion.easing.standard}, color ${theme.motion.duration.fast} ${theme.motion.easing.standard}`};

  &:hover {
    color: ${({ theme, $active }) => ($active ? theme.action.onPrimary : theme.text.primary)};
  }
`;
