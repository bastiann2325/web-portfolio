import styled from "styled-components";

export const Bar = styled.footer.attrs({ "data-component": "Footer" })`
  padding-block: ${({ theme }) => theme.space[8]};
  border-top: 1px solid ${({ theme }) => theme.border.default};
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.font.size.xxs};
  color: ${({ theme }) => theme.text.muted};
  text-align: center;
`;
