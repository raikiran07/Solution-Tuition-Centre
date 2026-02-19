import { motion } from "framer-motion";
import { GraduationCap, TrendingUp, Trophy, BookOpen, Lightbulb, Handshake } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: GraduationCap,
      title: t("whyChooseUs.faculty.title"),
      description: t("whyChooseUs.faculty.description"),
    },
    {
      icon: TrendingUp,
      title: t("whyChooseUs.trackRecord.title"),
      description: t("whyChooseUs.trackRecord.description"),
    },
    {
      icon: Trophy,
      title: t("whyChooseUs.trusted.title"),
      description: t("whyChooseUs.trusted.description"),
    },
    {
      icon: BookOpen,
      title: t("whyChooseUs.subjects.title"),
      description: t("whyChooseUs.subjects.description"),
    },
    {
      icon: Lightbulb,
      title: t("whyChooseUs.methods.title"),
      description: t("whyChooseUs.methods.description"),
    },
    {
      icon: Handshake,
      title: t("whyChooseUs.environment.title"),
      description: t("whyChooseUs.environment.description"),
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t("whyChooseUs.title")} <span className="text-primary">{t("whyChooseUs.titleHighlight")}</span> {t("whyChooseUs.titleSuffix")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("whyChooseUs.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-lg hover:border-primary/20 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
