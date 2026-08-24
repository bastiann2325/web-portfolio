import { useTranslation } from "react-i18next";
import { Container } from "../../atoms";
import { Bar, Text } from "./Footer.styles";

/**
 * @component Footer
 * @description Minimal page footer: name, current year and rights notice.
 */
const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <Bar>
      <Container>
        <Text>
          Juan Sebastián Mejía Zúñiga · {year} · {t("footer.rights")}
        </Text>
      </Container>
    </Bar>
  );
};

export default Footer;
