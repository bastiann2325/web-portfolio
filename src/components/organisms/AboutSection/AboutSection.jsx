import { useTranslation } from "react-i18next";
import { MapPin } from "lucide-react";
import { Container, Button, DevAvatar } from "../../atoms";
import { LanguageCard } from "../../molecules";
import {
  Section,
  Grid,
  Eyebrow,
  Name,
  Role,
  Location,
  Tagline,
  Actions,
  AvatarWrap,
  Divider,
  Paragraph,
  GroupLabel,
  LanguagesList,
} from "./AboutSection.styles";

/**
 * @component AboutSection
 * @description Hero + "About me" in a single section (id="about"):
 * introduces the visitor, then expands below with the full profile and
 * spoken languages.
 */
const AboutSection = () => {
  const { t } = useTranslation();
  const languages = t("about.languages", { returnObjects: true });

  return (
    <Section id="about">
      <Container>
        <Grid>
          <div>
            <Eyebrow>{t("hero.eyebrow")}</Eyebrow>
            <Name>{t("hero.name")}</Name>
            <Role>{t("hero.role")}</Role>
            <Location>
              <MapPin size={14} />
              {t("hero.location")}
            </Location>
            <Tagline>{t("hero.tagline")}</Tagline>
            <Actions>
              <Button as="a" href="#contact" size="lg">
                {t("hero.cta")}
              </Button>
              <Button as="a" href="#experience" variant="outline" size="lg">
                {t("hero.secondaryCta")}
              </Button>
            </Actions>
          </div>

          <AvatarWrap>
            <DevAvatar label={t("hero.avatarAlt")} />
          </AvatarWrap>
        </Grid>

        <Divider />

        <Grid>
          <Paragraph>{t("about.paragraph")}</Paragraph>
          <div>
            <GroupLabel>{t("about.languagesTitle")}</GroupLabel>
            <LanguagesList>
              {languages.map((lang, index) => (
                <LanguageCard key={lang.code} code={lang.code} name={lang.name} level={lang.level} index={index} />
              ))}
            </LanguagesList>
          </div>
        </Grid>
      </Container>
    </Section>
  );
};

export default AboutSection;
