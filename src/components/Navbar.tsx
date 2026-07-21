import { useEffect, useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import bmc from "../assets/bmc-button.png";

const navLinks = [
  { href: "#", label: "Home", id: "home" },
  { href: "#about", label: "About", id: "about" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#contact", label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const firstScreenHeight = window.innerHeight * 0.9;

      setIsScrolled(currentScrollY > 24);

      if (currentScrollY <= firstScreenHeight) {
        setIsNavbarVisible(true);
      } else {
        const isScrollingUp = currentScrollY < lastScrollY;
        setIsNavbarVisible(isScrollingUp);
      }

      lastScrollY = currentScrollY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.35, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header
        className={`navbar-shell fixed inset-x-0 top-0 z-50 px-4 transform-gpu transition-all duration-500 ${
          isNavbarVisible || isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled ? "navbar-shell--scrolled py-2" : "py-3"
        }`}
      >
        <nav className="navbar-panel mx-auto flex max-w-[1300px] items-center justify-between gap-3 px-3 py-2 lg:px-5">
          <a href="#" className="navbar-logo group" onClick={closeMenu}>
            <span className="navbar-logo-h">H</span>
            <span className="navbar-logo-e">E</span>
          </a>

          <ul className="navbar-links hidden items-center gap-2 lg:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`navbar-link ${
                    activeSection === link.id ? "navbar-link--active" : ""
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="https://buymeacoffee.com/riyad_cse27"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-bmc hidden sm:block"
            >
              <img src={bmc} alt="Buy me a coffee" className="h-7 w-auto" />
            </a>

            <button
              type="button"
              className="navbar-toggle lg:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <BiX /> : <BiMenu />}
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`navbar-mobile fixed inset-0 z-40 lg:hidden ${
          isMenuOpen ? "navbar-mobile--open" : ""
        }`}
      >
        <button
          type="button"
          className="navbar-mobile-backdrop"
          onClick={closeMenu}
          aria-label="Close menu"
        />
        <div className="navbar-mobile-panel">
          <p className="navbar-mobile-tag">// navigation</p>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className={`navbar-mobile-link ${
                    activeSection === link.id ? "navbar-mobile-link--active" : ""
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://buymeacoffee.com/riyad_cse27"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-bmc mt-8 inline-block"
          >
            <img src={bmc} alt="Buy me a coffee" className="h-10 w-auto" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
