import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Contact Us", path: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex flex-col">
            <span className="text-lg md:text-xl font-extrabold tracking-tight text-primary">
              SOLUTION
            </span>
            <span className="text-[10px] md:text-xs font-medium text-muted-foreground -mt-1 tracking-widest uppercase">
              Tuition Centre
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary ${
                    isActive
                      ? "text-primary border-b-2 border-secondary pb-1"
                      : "text-foreground"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <a
              href="tel:+91XXXXXXXXXX"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              Call Us Now
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden border-t border-border"
            >
              <div className="py-4 space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 px-2 rounded-md text-sm font-medium transition-colors ${
                        isActive
                          ? "text-primary bg-primary/5"
                          : "text-foreground hover:text-primary"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="flex items-center gap-2 mt-3 bg-secondary text-secondary-foreground px-5 py-3 rounded-lg text-sm font-semibold justify-center"
                >
                  <Phone className="w-4 h-4" />
                  Call Us Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
