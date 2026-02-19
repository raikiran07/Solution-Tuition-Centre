import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Ready to Transform Your Child's Future?
        </h2>
        <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
          Join 100+ families who trust SOLUTION Tuition Centre for their child's education. Book a free demo class today!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-7 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Book Free Demo <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:+91XXXXXXXXXX"
            className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-7 py-3.5 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
          >
            <Phone className="w-4 h-4" /> Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
