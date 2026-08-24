import styled, { css } from "styled-components";

export const Field = styled.div.attrs({ "data-component": "ContactField" })`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]};
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.font.size.xxs};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.text.muted};
`;

const controlStyles = css`
  font-family: ${({ theme }) => theme.font.family.body};
  font-size: ${({ theme }) => theme.font.size.sm};
  color: ${({ theme }) => theme.text.primary};
  background: ${({ theme }) => theme.bg.surface};
  border: 1px solid ${({ theme, $hasError }) => ($hasError ? theme.intent.danger : theme.border.default)};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => `${theme.space[3]} ${theme.space[4]}`};
  transition: border-color ${({ theme }) => theme.motion.duration.fast} ${({ theme }) => theme.motion.easing.standard};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accent.primary};
  }
`;

export const Input = styled.input`
  ${controlStyles}
`;

export const TextArea = styled.textarea`
  ${controlStyles}
  resize: vertical;
  min-height: 120px;
`;

export const ErrorText = styled.span`
  font-size: ${({ theme }) => theme.font.size.xxs};
  color: ${({ theme }) => theme.intent.danger};
`;
