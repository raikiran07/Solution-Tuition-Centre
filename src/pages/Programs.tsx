import { motion } from "framer-motion";
import { getProgramsData } from "@/data/programsData";
import { BookOpen, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";

const Programs = () => {
  const { t } = useTranslation();
  const programs = getProgramsData(t);

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">
              {t("programs.title")} <span className="text-secondary">{t("programs.titleHighlight")}</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto">
              {t("programs.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs detail */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 space-y-12">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl border border-border overflow-hidden"
            >
              <div className="md:flex">
                <div className="bg-primary p-6 md:p-8 md:w-1/3 flex flex-col justify-center">
                  <BookOpen className="w-10 h-10 text-primary-foreground mb-3" />
                  <h2 className="text-2xl font-bold text-primary-foreground">{program.title}</h2>
                  <p className="text-primary-foreground/70 mt-1">{program.subtitle}</p>
                </div>
                <div className="p-6 md:p-8 md:w-2/3">
                  <p className="text-muted-foreground mb-5">{program.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                    {program.features.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {program.subjects.map((s) => (
                      <span key={s} className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-7 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            {t("programs.enrollNow")}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Programs;
