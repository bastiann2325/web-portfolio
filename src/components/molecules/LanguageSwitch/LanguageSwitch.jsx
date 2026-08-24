import { useTranslation } from "react-i18next";
import { Track, OptionButton } from "./LanguageSwitch.styles";

const LANGUAGES = ["es", "en"];

/**
 * @component LanguageSwitch
 * @description ES/EN language toggle. Changes `i18n.language`, which
 * react-i18next persists to localStorage via the configured detector.
 */
const LanguageSwitch = () => {
  const { t, i18n } = useTranslation();
  const current = i18n.language?.startsWith("en") ? "en" : "es";

  return (
    <Track role="group" aria-label={t("nav.languageLabel")}>
      {LANGUAGES.map((lng) => (
        <OptionButton
          key={lng}
          type="button"
          $active={current === lng}
          onClick={() => i18n.changeLanguage(lng)}
          aria-pressed={current === lng}
        >
          {lng.toUpperCase()}
        </OptionButton>
      ))}
    </Track>
  );
};

export default LanguageSwitch;
