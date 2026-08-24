import styled from "styled-components";

export const StyledNavLink = styled.a.attrs({ "data-component": "NavLink" })`
  position: relative;
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.text.muted};
  padding-bottom: ${({ theme }) => theme.space[1]};
  transition: color ${({ theme }) => theme.motion.duration.fast} ${({ theme }) => theme.motion.easing.standard};

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.accent.primary};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform ${({ theme }) => theme.motion.duration.normal} ${({ theme }) => theme.motion.easing.standard};
  }

  &:hover {
    color: ${({ theme }) => theme.text.primary};
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;
