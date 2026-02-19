import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Award, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useTranslation } from "@/hooks/useTranslation";

const HeroSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Students studying" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium">
              <Star className="w-4 h-4 fill-secondary" /> {t("hero.rated")}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
              <Award className="w-4 h-4" /> {t("hero.excellence")}
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-2"
          >
            <span className="inline-block bg-secondary/20 border-2 border-secondary px-4 py-1 rounded-xl text-secondary mb-3 text-3xl md:text-4xl lg:text-5xl shadow-lg shadow-secondary/20">
              {t("hero.title")}
            </span>
            <br />
            {t("hero.subtitle")}{" "}
            <span className="text-secondary">{t("hero.since")}</span>
          </motion.h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-4 font-medium">
            {t("hero.tagline")}
          </p>

          <p className="text-primary-foreground/60 mb-8 max-w-xl leading-relaxed">
            {t("hero.description")}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="bg-secondary text-secondary-foreground px-7 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity text-base"
            >
              {t("hero.bookDemo")}
            </Link>
            <Link
              to="/programs"
              className="border-2 border-primary-foreground/30 text-primary-foreground px-7 py-3.5 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors text-base"
            >
              {t("hero.viewPrograms")}
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ChevronDown className="w-6 h-6 text-primary-foreground/50 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
