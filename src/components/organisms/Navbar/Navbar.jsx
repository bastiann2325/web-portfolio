import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { SHOW_PROJECTS } from "../../../config/features";
import { Container, NavLink } from "../../atoms";
import { LanguageSwitch } from "../../molecules";
import { Bar, Inner, Logo, Links, MenuButton, MobileMenu } from "./Navbar.styles";

const NAV_ITEMS = [
  { key: "about", href: "#about" },
  { key: "experience", href: "#experience" },
  { key: "skills", href: "#skills" },
  ...(SHOW_PROJECTS ? [{ key: "projects", href: "#projects" }] : []),
  { key: "contact", href: "#contact" },
];

/**
 * @component Navbar
 * @description Fixed navigation bar with smooth-scroll anchors, a language
 * switch and a collapsible menu on small screens.
 */
const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <Bar>
      <Container>
        <Inner>
          <Logo href="#top">JSM</Logo>

          <Links>
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.key} href={item.href}>
                {t(`nav.${item.key}`)}
              </NavLink>
            ))}
          </Links>

          <LanguageSwitch />

          <MenuButton type="button" onClick={() => setIsOpen((prev) => !prev)} aria-label={t("nav.menuLabel")}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </MenuButton>
        </Inner>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.key} href={item.href} onClick={closeMenu}>
                {t(`nav.${item.key}`)}
              </NavLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </Bar>
  );
};

export default Navbar;
