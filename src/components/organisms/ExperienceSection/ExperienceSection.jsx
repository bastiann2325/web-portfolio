import { useTranslation } from "react-i18next";
import { Container, SectionTitle, Chip } from "../../atoms";
import {
  Section,
  Timeline,
  Job,
  JobHeader,
  CompanyRole,
  Period,
  HighlightList,
  Highlight,
  HighlightTitle,
  HighlightDescription,
  TechLabel,
  TechRow,
} from "./ExperienceSection.styles";

/**
 * @component ExperienceSection
 * @description Walkthrough of work experience, grouped by company, with the
 * achievements and technologies exactly as they appear on the CV.
 */
const ExperienceSection = () => {
  const { t } = useTranslation();
  const items = t("experience.items", { returnObjects: true });

  return (
    <Section id="experience">
      <Container>
        <SectionTitle eyebrow="02" title={t("experience.title")} />

        <Timeline>
          {items.map((job) => (
            <Job
              key={job.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              <JobHeader>
                <CompanyRole>
                  {job.role} · {job.company}
                </CompanyRole>
                <Period>{job.period}</Period>
              </JobHeader>

              <HighlightList>
                {job.highlights.map((highlight) => (
                  <Highlight key={highlight.title}>
                    <HighlightTitle>{highlight.title}</HighlightTitle>
                    <HighlightDescription>{highlight.description}</HighlightDescription>
                    <TechLabel>{t("experience.techLabel")}</TechLabel>
                    <TechRow>
                      {highlight.tech.map((tech) => (
                        <Chip key={tech}>{tech}</Chip>
                      ))}
                    </TechRow>
                  </Highlight>
                ))}
              </HighlightList>
            </Job>
          ))}
        </Timeline>
      </Container>
    </Section>
  );
};

export default ExperienceSection;
