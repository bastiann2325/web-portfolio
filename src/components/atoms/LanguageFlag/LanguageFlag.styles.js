import styled from "styled-components";

export const Circle = styled.div.attrs({ "data-component": "LanguageFlag" })`
  display: flex;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border-radius: ${({ theme }) => theme.radius.circle};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.border.strong};
`;

export const Stripe = styled.span`
  flex: 1;
  height: 100%;
`;
