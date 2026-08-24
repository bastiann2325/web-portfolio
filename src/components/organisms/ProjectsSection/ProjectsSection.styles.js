import styled from "styled-components";

export const Section = styled.section.attrs({ "data-component": "ProjectsSection" })`
  padding-block: ${({ theme }) => theme.layout.sectionPaddingY};
`;

export const EmptyState = styled.p`
  margin-top: ${({ theme }) => theme.space[8]};
  padding: ${({ theme }) => theme.space[10]};
  border: 1px dashed ${({ theme }) => theme.border.strong};
  border-radius: ${({ theme }) => theme.radius.lg};
  color: ${({ theme }) => theme.text.muted};
  text-align: center;
`;
