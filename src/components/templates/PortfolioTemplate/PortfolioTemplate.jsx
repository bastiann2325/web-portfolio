import { SHOW_PROJECTS } from "../../../config/features";
import {
  Navbar,
  AboutSection,
  ExperienceSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
} from "../../organisms";
import { Footer } from "../../molecules";

/**
 * @component PortfolioTemplate
 * @description Composes every section of the site into a single page.
 */
const PortfolioTemplate = () => (
  <div id="top">
    <Navbar />
    <main>
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      {SHOW_PROJECTS && <ProjectsSection />}
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default PortfolioTemplate;
