import styled from "styled-components";

export const Section = styled.section.attrs({ "data-component": "SkillsSection" })`
  padding-block: ${({ theme }) => theme.layout.sectionPaddingY};
`;

export const CategoryBlock = styled.div`
  margin-top: ${({ theme }) => theme.space[10]};
`;

export const CategoryName = styled.h3`
  font-family: ${({ theme }) => theme.font.family.mono};
  font-size: ${({ theme }) => theme.font.size.xxs};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text.muted};
  margin-bottom: ${({ theme }) => theme.space[5]};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(84px, 1fr));
  gap: ${({ theme }) => theme.space[6]};
`;
