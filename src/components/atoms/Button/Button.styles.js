import styled, { css } from "styled-components";

const getVariantStyles = ({ theme, $variant = "solid" }) => {
  const variants = {
    solid: css`
      background: ${theme.action.primary};
      color: ${theme.action.onPrimary};
      border: 1px solid ${theme.action.primary};
      &:hover:not(:disabled) {
        background: ${theme.action.primaryHover};
        border-color: ${theme.action.primaryHover};
      }
      &:active:not(:disabled) {
        background: ${theme.action.primaryActive};
        border-color: ${theme.action.primaryActive};
      }
    `,
    outline: css`
      background: transparent;
      color: ${theme.text.primary};
      border: 1px solid ${theme.border.strong};
      &:hover:not(:disabled) {
        border-color: ${theme.action.primary};
        color: ${theme.action.primary};
      }
    `,
    ghost: css`
      background: transparent;
      color: ${theme.text.primary};
      border: 1px solid transparent;
      &:hover:not(:disabled) {
        background: ${theme.action.ghostHover};
      }
    `,
  };
  return variants[$variant] || variants.solid;
};

const getSizeStyles = ({ theme, $size = "md" }) => {
  const sizes = {
    md: css`
      padding: ${theme.space[3]} ${theme.space[6]};
      font-size: ${theme.font.size.sm};
    `,
    lg: css`
      padding: ${theme.space[4]} ${theme.space[8]};
      font-size: ${theme.font.size.md};
    `,
  };
  return sizes[$size] || sizes.md;
};

export const StyledButton = styled.button.attrs({ "data-component": "Button" })`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[2]};
  font-family: ${({ theme }) => theme.font.family.body};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  border-radius: ${({ theme }) => theme.radius.pill};
  cursor: pointer;
  white-space: nowrap;
  transition: ${({ theme }) =>
    `background ${theme.motion.duration.normal} ${theme.motion.easing.standard}, border-color ${theme.motion.duration.normal} ${theme.motion.easing.standard}, color ${theme.motion.duration.normal} ${theme.motion.easing.standard}`};

  ${(props) => getVariantStyles(props)}
  ${(props) => getSizeStyles(props)}

  ${({ $fullWidth }) => $fullWidth && css`width: 100%;`}

  &:focus-visible {
    outline: none;
    box-shadow: ${({ theme }) => theme.shadow.focus};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
