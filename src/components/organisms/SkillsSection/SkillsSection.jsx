import { useTranslation } from "react-i18next";
import { Container, SectionTitle } from "../../atoms";
import { SkillIcon } from "../../molecules";
import { Section, CategoryBlock, CategoryName, Grid } from "./SkillsSection.styles";

/**
 * @component SkillsSection
 * @description Grid of technologies grouped by category, each with its
 * brand icon and a lift animation on hover.
 */
const SkillsSection = () => {
  const { t } = useTranslation();
  const categories = t("skills.categories", { returnObjects: true });

  return (
    <Section id="skills">
      <Container>
        <SectionTitle eyebrow="03" title={t("skills.title")} subtitle={t("skills.subtitle")} />

        {categories.map((category) => (
          <CategoryBlock key={category.name}>
            <CategoryName>{category.name}</CategoryName>
            <Grid>
              {category.items.map((item) => (
                <SkillIcon key={item} name={item} />
              ))}
            </Grid>
          </CategoryBlock>
        ))}
      </Container>
    </Section>
  );
};

export default SkillsSection;
