import styled from "styled-components";

export const Section = styled.section.attrs({ "data-component": "ContactSection" })`
  padding-block: ${({ theme }) => theme.layout.sectionPaddingY};
`;

export const Layout = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space[12]};
  max-width: 640px;
  margin: ${({ theme }) => theme.space[10]} auto 0;

  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    grid-template-columns: 2fr 1fr;
    max-width: none;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[5]};
`;

export const StatusMessage = styled.p`
  font-size: ${({ theme }) => theme.font.size.sm};
  color: ${({ theme, $tone }) => ($tone === "error" ? theme.intent.danger : theme.accent.secondary)};
`;

export const Socials = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[3]};
`;

export const DirectEmail = styled.p`
  margin-top: ${({ theme }) => theme.space[5]};
  font-size: ${({ theme }) => theme.font.size.sm};
  color: ${({ theme }) => theme.text.muted};

  a {
    color: ${({ theme }) => theme.accent.primary};
  }
`;
