import { motion } from "framer-motion";
import { GraduationCap, Target, Heart, Users, Award, BookOpen } from "lucide-react";

const values = [
  { icon: Target, title: "Excellence", description: "Committed to the highest standards of teaching and learning." },
  { icon: Heart, title: "Passion", description: "Every teacher brings genuine care and enthusiasm to the classroom." },
  { icon: Users, title: "Personalized Attention", description: "Small batch sizes ensure every student gets focused guidance." },
  { icon: Award, title: "Integrity", description: "Honest assessment and transparent communication with parents." },
  { icon: BookOpen, title: "Holistic Development", description: "Nurturing not just academics but confidence and character." },
  { icon: GraduationCap, title: "Continuous Improvement", description: "Regular training and updated teaching methodologies." },
];

const About = () => {
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
              About <span className="text-secondary">SOLUTION</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg">
              24+ years of shaping academic futures in Guwahati with dedication, passion, and proven results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 1995, SOLUTION Tuition Centre began with a simple mission: to provide quality, personalized education to every student in Guwahati. What started as a small initiative has grown into one of the city's most trusted names in home tuition.
              </p>
              <p>
                Over 24 years, we've helped hundreds of students achieve academic excellence across CBSE, ICSE, and Assam State Boards. Our approach combines experienced faculty, proven teaching methods, and genuine care for each student's progress.
              </p>
              <p>
                Today, with a 5.0-star rating and over 93 glowing reviews, we continue to uphold the values that made us a household name — dedication, simplicity, and results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Our Core Values</h2>
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
};

export default About;
