import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Star } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">SOLUTION Tuition Centre</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              {t("footer.tagline")}
            </p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
              ))}
              <span className="text-sm ml-2 text-primary-foreground/70">{t("footer.reviews")}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: t("header.home"), path: "/" },
                { name: t("header.about"), path: "/about" },
                { name: t("header.programs"), path: "/programs" },
                { name: t("header.contact"), path: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.ourPrograms")}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>{t("footer.programsList.primary")}</li>
              <li>{t("footer.programsList.middle")}</li>
              <li>{t("footer.programsList.secondary")}</li>
              <li>{t("footer.programsList.senior")}</li>
              <li>{t("footer.programsList.board")}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.contactInfo")}</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                {t("contact.info.address")}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <a href="tel:+91XXXXXXXXXX" className="hover:text-primary-foreground transition-colors">
                  +91-XXXXXXXXXX
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:info@solutiontution.com" className="hover:text-primary-foreground transition-colors">
                  info@solutiontution.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 shrink-0" />
                {t("contact.info.hours")}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
