import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Command, Sun, Moon } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { BrandLogo } from "@/components/common/BrandLogo";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";

export function Navbar({ onOpenCommand, theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(navLinks.map((l) => l.href));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNav = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "py-3 glass-strong shadow-lg" : "py-5 bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNav("#home");
            }}
            className="hover:opacity-90 transition-opacity"
            aria-label="Chandrika — home"
          >
            <BrandLogo variant="mark" size="md" className="sm:hidden" />
            <BrandLogo variant="full" size="md" className="hidden sm:block" />
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className={cn(
                    "px-3 py-2 text-sm rounded-lg transition-colors",
                    activeId === link.href.replace("#", "")
                      ? "ui-nav-active"
                      : "ui-nav-inactive"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="hidden sm:flex"
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onOpenCommand}
              aria-label="Open command palette"
              className="hidden sm:flex"
            >
              <Command />
            </Button>
            <Button
              variant="default"
              size="sm"
              className="hidden md:flex"
              onClick={() => handleNav("#contact")}
            >
              Hire Me
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 theme-overlay backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="absolute right-0 top-0 bottom-0 w-[min(320px,85vw)] glass-strong p-6 pt-24"
            >
              <ul className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNav(link.href);
                      }}
                      className={cn(
                        "block px-4 py-3 rounded-xl text-lg transition-colors",
                        activeId === link.href.replace("#", "")
                          ? "ui-nav-active"
                          : "ui-nav-inactive"
                      )}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                className="mt-8 flex gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Button variant="secondary" className="flex-1" onClick={toggleTheme}>
                  {theme === "dark" ? <Sun className="mr-2" /> : <Moon className="mr-2" />}
                  Theme
                </Button>
                <Button variant="default" className="flex-1" onClick={() => handleNav("#contact")}>
                  Contact
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
