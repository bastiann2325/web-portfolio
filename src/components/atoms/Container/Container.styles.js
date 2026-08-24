import styled from "styled-components";

export const StyledContainer = styled.div.attrs({ "data-component": "Container" })`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding-inline: ${({ theme }) => theme.space[6]};

  @media (min-width: ${({ theme }) => theme.breakpoint.lg}) {
    padding-inline: ${({ theme }) => theme.space[8]};
  }
`;
