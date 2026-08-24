import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section.attrs({ "data-component": "ExperienceSection" })`
  padding-block: ${({ theme }) => theme.layout.sectionPaddingY};
`;

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[10]};
  margin-top: ${({ theme }) => theme.space[10]};
`;

export const Job = styled(motion.article)`
  border: 1px solid ${({ theme }) => theme.border.default};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.space[8]};
  background: ${({ theme }) => theme.bg.surface};
`;

export const JobHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space[3]};
  padding-bottom: ${({ theme }) => theme.space[6]};
  border-bottom: 1px solid ${({ theme }) => theme.border.default};
  margin-bottom: ${({ theme }) => theme.space[6]};
`;

export const CompanyRole = styled.h3`
  font-size: ${({ theme }) => theme.font.size.lg};
`;

export const Period = styled.span`
  font-family: ${({ theme }) => theme.font.family.mono};
  font-size: ${({ theme }) => theme.font.size.xxs};
  color: ${({ theme }) => theme.text.muted};
`;

export const HighlightList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[6]};
`;

export const Highlight = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]};
`;

export const HighlightTitle = styled.h4`
  font-size: ${({ theme }) => theme.font.size.md};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
`;

export const HighlightDescription = styled.p`
  color: ${({ theme }) => theme.text.muted};
  font-size: ${({ theme }) => theme.font.size.sm};
  line-height: ${({ theme }) => theme.font.lineHeight.normal};
  max-width: 70ch;
`;

export const TechLabel = styled.p`
  font-family: ${({ theme }) => theme.font.family.mono};
  font-size: ${({ theme }) => theme.font.size.xxs};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text.muted};
  margin-top: ${({ theme }) => theme.space[2]};
`;

export const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[2]};
  margin-top: ${({ theme }) => theme.space[2]};
`;
