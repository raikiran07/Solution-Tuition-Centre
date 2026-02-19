import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">SOLUTION Tuition Centre</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Guwahati's Most Trusted Home Tuition providing quality education since 1995.
            </p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
              ))}
              <span className="text-sm ml-2 text-primary-foreground/70">5.0 (93+ Reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "About Us", "Programs", "Contact Us"].map((name) => (
                <li key={name}>
                  <Link
                    to={name === "Home" ? "/" : `/${name.toLowerCase().replace(" ", "-").replace("-us", "")}`}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-4">Our Programs</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Primary Classes (1-5)</li>
              <li>Middle School (6-8)</li>
              <li>Secondary (9-10)</li>
              <li>Senior Secondary (11-12)</li>
              <li>Board Exam Coaching</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                House No - 8, Arohan Path, South Sarania, Sarania Hills, Guwahati - 781007
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <a href="tel:+91XXXXXXXXXX" className="hover:text-primary-foreground transition-colors">
                  +91-XXXXXXXXXX
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:info@solutiontution.com" className="hover:text-primary-foreground transition-colors">
                  info@solutiontution.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 shrink-0" />
                Open 24/7 (For Inquiries)
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <p>© 2025 SOLUTION Tuition Centre. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
