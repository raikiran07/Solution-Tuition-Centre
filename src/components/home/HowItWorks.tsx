import { motion } from "framer-motion";
import { ClipboardList, Users, BookOpen, TrendingUp } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    { icon: ClipboardList, title: t("howItWorks.steps.inquire.title"), description: t("howItWorks.steps.inquire.description") },
    { icon: Users, title: t("howItWorks.steps.consultation.title"), description: t("howItWorks.steps.consultation.description") },
    { icon: BookOpen, title: t("howItWorks.steps.demo.title"), description: t("howItWorks.steps.demo.description") },
    { icon: TrendingUp, title: t("howItWorks.steps.start.title"), description: t("howItWorks.steps.start.description") },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t("howItWorks.title")} <span className="text-primary">{t("howItWorks.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground">{t("howItWorks.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 relative">
                <step.icon className="w-7 h-7 text-primary" />
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-xs font-bold flex items-center justify-center">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
