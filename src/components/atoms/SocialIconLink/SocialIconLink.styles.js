import styled from "styled-components";

export const StyledLink = styled.a.attrs({ "data-component": "SocialIconLink" })`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radius.circle};
  border: 1px solid ${({ theme }) => theme.border.default};
  color: ${({ theme }) => theme.text.primary};
  transition: ${({ theme }) =>
    `border-color ${theme.motion.duration.fast} ${theme.motion.easing.standard}, color ${theme.motion.duration.fast} ${theme.motion.easing.standard}, transform ${theme.motion.duration.fast} ${theme.motion.easing.standard}`};

  &:hover {
    border-color: ${({ theme }) => theme.accent.primary};
    color: ${({ theme }) => theme.accent.primary};
    transform: translateY(-2px);
  }
`;
