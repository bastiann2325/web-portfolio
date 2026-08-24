import { useTranslation } from "react-i18next";
import { Container, SectionTitle } from "../../atoms";
import { Section, EmptyState } from "./ProjectsSection.styles";

/**
 * @component ProjectsSection
 * @description Placeholder shown while there are no published projects yet.
 * The `SHOW_PROJECTS` flag in `config/features.js` decides whether this
 * section (and its nav link) renders at all.
 */
const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <Section id="projects">
      <Container>
        <SectionTitle eyebrow="04" title={t("projects.title")} />
        <EmptyState>{t("projects.emptyMessage")}</EmptyState>
      </Container>
    </Section>
  );
};

export default ProjectsSection;
