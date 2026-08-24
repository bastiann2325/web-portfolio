import { useTranslation } from "react-i18next";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { Container, SectionTitle, Button, SocialIconLink } from "../../atoms";
import { ContactField } from "../../molecules";
import { useContactForm } from "../../../hooks/useContactForm";
import { CONTACT_LINKS } from "../../../config/contactLinks";
import { Section, Layout, Form, StatusMessage, Socials, DirectEmail } from "./ContactSection.styles";

/**
 * @component ContactSection
 * @description Contact form (EmailJS, no custom backend) plus direct links
 * to LinkedIn, GitHub and email.
 */
const ContactSection = () => {
  const { t } = useTranslation();
  const { values, status, handleChange, handleSubmit } = useContactForm();

  return (
    <Section id="contact">
      <Container>
        <SectionTitle eyebrow="05" title={t("contact.title")} subtitle={t("contact.subtitle")} align="center" />

        <Layout>
          <Form onSubmit={handleSubmit}>
            <ContactField label={t("contact.form.name")} name="name" value={values.name} onChange={handleChange} />
            <ContactField
              as="email"
              label={t("contact.form.email")}
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            <ContactField
              as="textarea"
              label={t("contact.form.message")}
              name="message"
              value={values.message}
              onChange={handleChange}
            />

            <Button type="submit" size="lg" fullWidth disabled={status === "sending"}>
              {status === "sending" ? t("contact.form.sending") : t("contact.form.submit")}
            </Button>

            {status === "success" && <StatusMessage $tone="success">{t("contact.form.success")}</StatusMessage>}
            {status === "error" && <StatusMessage $tone="error">{t("contact.form.error")}</StatusMessage>}
          </Form>

          <div>
            <Socials>
              <SocialIconLink href={CONTACT_LINKS.linkedin} icon={FaLinkedinIn} label={t("contact.social.linkedin")} />
              <SocialIconLink href={CONTACT_LINKS.github} icon={FaGithub} label={t("contact.social.github")} />
            </Socials>
            <DirectEmail>
              {t("contact.directEmail")} <a href={`mailto:${CONTACT_LINKS.email}`}>{CONTACT_LINKS.email}</a>
            </DirectEmail>
          </div>
        </Layout>
      </Container>
    </Section>
  );
};

export default ContactSection;
