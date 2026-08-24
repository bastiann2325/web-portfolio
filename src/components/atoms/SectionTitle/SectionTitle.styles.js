import styled from "styled-components";

export const Eyebrow = styled.p`
  font-family: ${({ theme }) => theme.font.family.mono};
  font-size: ${({ theme }) => theme.font.size.xxs};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.accent.primary};
  margin-bottom: ${({ theme }) => theme.space[3]};
  text-align: ${({ $align }) => $align};
`;

export const Heading = styled.h2`
  font-size: ${({ theme }) => theme.font.size.xxl};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  line-height: ${({ theme }) => theme.font.lineHeight.tight};
  text-align: ${({ $align }) => $align};
`;

export const Subtitle = styled.p`
  margin-top: ${({ theme }) => theme.space[3]};
  color: ${({ theme }) => theme.text.muted};
  font-size: ${({ theme }) => theme.font.size.md};
  max-width: 60ch;
  text-align: ${({ $align }) => $align};
  ${({ $align }) => $align === "center" && "margin-inline: auto;"}
`;
