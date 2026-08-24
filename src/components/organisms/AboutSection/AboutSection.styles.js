import styled from "styled-components";

export const Section = styled.section.attrs({ "data-component": "AboutSection" })`
  padding-top: calc(${({ theme }) => theme.layout.sectionPaddingY} + 72px);
  padding-bottom: ${({ theme }) => theme.layout.sectionPaddingY};
`;

export const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space[10]};
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoint.lg}) {
    grid-template-columns: 3fr 2fr;
  }
`;

export const Eyebrow = styled.p`
  font-family: ${({ theme }) => theme.font.family.mono};
  font-size: ${({ theme }) => theme.font.size.sm};
  color: ${({ theme }) => theme.accent.primary};
  margin-bottom: ${({ theme }) => theme.space[2]};
`;

export const Name = styled.h1`
  font-size: ${({ theme }) => theme.font.size.display};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  line-height: ${({ theme }) => theme.font.lineHeight.tight};
`;

export const Role = styled.p`
  font-size: ${({ theme }) => theme.font.size.lg};
  color: ${({ theme }) => theme.text.muted};
  margin-top: ${({ theme }) => theme.space[2]};
`;

export const Location = styled.p`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[1]};
  font-size: ${({ theme }) => theme.font.size.xxs};
  color: ${({ theme }) => theme.text.muted};
  margin-top: ${({ theme }) => theme.space[3]};
`;

export const Tagline = styled.p`
  max-width: 55ch;
  margin-top: ${({ theme }) => theme.space[6]};
  font-size: ${({ theme }) => theme.font.size.md};
  color: ${({ theme }) => theme.text.primary};
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[4]};
  margin-top: ${({ theme }) => theme.space[8]};
`;

export const AvatarWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.border.default};
  margin: ${({ theme }) => theme.space[16]} 0;
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.text.muted};
  font-size: ${({ theme }) => theme.font.size.md};
  line-height: ${({ theme }) => theme.font.lineHeight.loose};
  max-width: 65ch;
`;

export const GroupLabel = styled.p`
  font-family: ${({ theme }) => theme.font.family.mono};
  font-size: ${({ theme }) => theme.font.size.xxs};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text.muted};
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

export const LanguagesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[3]};
`;
