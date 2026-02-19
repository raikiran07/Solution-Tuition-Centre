import { motion } from "framer-motion";
import { GraduationCap, Target, Heart, Users, Award, BookOpen } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const About = () => {
  const { t } = useTranslation();

  const values = [
    { icon: Target, title: t("about.values.excellence.title"), description: t("about.values.excellence.description") },
    { icon: Heart, title: t("about.values.passion.title"), description: t("about.values.passion.description") },
    { icon: Users, title: t("about.values.attention.title"), description: t("about.values.attention.description") },
    { icon: Award, title: t("about.values.integrity.title"), description: t("about.values.integrity.description") },
    { icon: BookOpen, title: t("about.values.holistic.title"), description: t("about.values.holistic.description") },
    { icon: GraduationCap, title: t("about.values.improvement.title"), description: t("about.values.improvement.description") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">
              {t("about.title")} <span className="text-secondary">{t("about.titleHighlight")}</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg">
              {t("about.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">{t("about.story.title")}</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t("about.story.p1")}</p>
              <p>{t("about.story.p2")}</p>
              <p>{t("about.story.p3")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">{t("about.values.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <value.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
