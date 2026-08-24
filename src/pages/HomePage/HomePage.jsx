import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import PortfolioTemplate from "../../components/templates/PortfolioTemplate/PortfolioTemplate";

/**
 * @component HomePage
 * @description Only page of the site. Renders `PortfolioTemplate` and keeps
 * the document `<title>` and `lang` attribute in sync with the active
 * language.
 */
const HomePage = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t("meta.title");
    document.documentElement.lang = i18n.language;
  }, [t, i18n.language]);

  return <PortfolioTemplate />;
};

export default HomePage;
