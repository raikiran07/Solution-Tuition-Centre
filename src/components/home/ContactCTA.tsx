import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const ContactCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          {t("contactCTA.title")}
        </h2>
        <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
          {t("contactCTA.subtitle")}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-7 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            {t("contactCTA.bookDemo")} <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:+91XXXXXXXXXX"
            className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-7 py-3.5 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
          >
            <Phone className="w-4 h-4" /> {t("contactCTA.callNow")}
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;
