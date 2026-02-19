import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getProgramsData } from "@/data/programsData";
import { BookOpen, ArrowRight } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const ProgramsSection = () => {
  const { t } = useTranslation();
  const programs = getProgramsData(t);

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t("programs.title")} <span className="text-primary">{t("programs.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("programs.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow group"
            >
              <div className="bg-primary p-4">
                <BookOpen className="w-8 h-8 text-primary-foreground mb-2" />
                <h3 className="text-lg font-bold text-primary-foreground">{program.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{program.subtitle}</p>
              </div>
              <div className="p-5">
                <p className="text-sm text-muted-foreground mb-4">{program.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {program.subjects.slice(0, 4).map((subj) => (
                    <span key={subj} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md">
                      {subj}
                    </span>
                  ))}
                  {program.subjects.length > 4 && (
                    <span className="text-xs text-primary font-medium px-2 py-1">
                      +{program.subjects.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            {t("programs.viewAll")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection;
