import { motion } from "framer-motion";
import { GraduationCap, TrendingUp, Trophy, BookOpen, Lightbulb, Handshake } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Exceptional Faculty",
    description: "Highly qualified and experienced teachers passionate about student success with proven teaching methodology.",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description: "Consistently excellent results with students showing remarkable improvement in their academics.",
  },
  {
    icon: Trophy,
    title: "Trusted by 100+ Families",
    description: "Join satisfied parents who've witnessed transformation in their children's academic performance. 5-star rated.",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Subjects",
    description: "Expert coaching across all subjects from Mathematics to Science, Languages to Social Studies.",
  },
  {
    icon: Lightbulb,
    title: "Simple Teaching Methods",
    description: "We break down complex topics into easy-to-understand concepts, making learning engaging and effective.",
  },
  {
    icon: Handshake,
    title: "Supportive Environment",
    description: "A nurturing space where students feel confident to ask questions and grow at their own pace.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Why Choose <span className="text-primary">SOLUTION</span> Tuition Centre?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Your child's success is our mission. Here's what makes us different.
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
};

export default WhyChooseUs;
