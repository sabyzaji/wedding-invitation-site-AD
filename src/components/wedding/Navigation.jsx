import { useState, useEffect } from "react";
import { Home, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#welcome", label: "Welcome" },
  { href: "#invitation", label: "Invitation" },
  { href: "#venue", label: "Venue" },
  { href: "#schedule", label: "Details" },
  { href: "#blessings", label: "Blessings" },
];

function scrollTo(href) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#welcome");

  useEffect(() => {
    const sections = navLinks.map((n) => document.querySelector(n.href));
    let ticking = false;

    const updateNavState = () => {
      setScrolled(window.scrollY > 60);

      const idx = sections.reduce((found, el, i) => {
        if (el && el.getBoundingClientRect().top <= 120) return i;
        return found;
      }, 0);

      setActive(navLinks[idx]?.href ?? "#welcome");
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateNavState);
    };

    updateNavState();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setIsOpen(false);
    scrollTo(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button onClick={() => handleNav("#welcome")} className="flex items-center gap-2 group">
            <Home
              className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                scrolled ? "text-primary" : "text-white"
              }`}
            />
            <span
              className={`font-display text-lg lg:text-xl tracking-wide transition-colors ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              Chuzhakunnel
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`relative font-body text-xs tracking-widest uppercase transition-all duration-300 hover:text-primary ${
                  active === link.href
                    ? scrolled
                      ? "text-primary"
                      : "text-white"
                    : scrolled
                      ? "text-muted-foreground"
                      : "text-white/70"
                }`}
              >
                {link.label}
                {active === link.href && (
                  <motion.div
                    layoutId="nav-underline"
                    className={`absolute -bottom-1 left-0 right-0 h-px ${
                      scrolled ? "bg-primary" : "bg-white"
                    }`}
                  />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-white"}`}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`font-body text-sm tracking-widest uppercase text-left py-2 transition-colors ${
                    active === link.href ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
