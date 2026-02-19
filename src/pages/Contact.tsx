import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "@/data/faqs";
import { toast } from "sonner";

const subjectsList = ["Mathematics", "Science", "English", "Social Studies", "Hindi", "Sanskrit", "Computer Science"];

const Contact = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    email: "",
    studentClass: "",
    subjects: [] as string[],
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheckbox = (subject: string) => {
    setFormData((prev) => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter((s) => s !== subject)
        : [...prev.subjects, subject],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName.trim() || !formData.phone.trim() || !formData.studentClass) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      toast.success("Thank you! We'll contact you soon.");
      setFormData({ parentName: "", phone: "", email: "", studentClass: "", subjects: [], message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">
              Get In <span className="text-secondary">Touch</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto">
              We'd love to hear from you. Request a callback or book a free demo class today.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <h2 className="text-2xl font-bold text-foreground mb-6">Request a Callback</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Parent's Name *</label>
                  <input
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    className="w-full border border-input rounded-lg px-4 py-2.5 text-sm bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Phone Number *</label>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-input rounded-lg px-4 py-2.5 text-sm bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none"
                    placeholder="+91 XXXXXXXXXX"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-input rounded-lg px-4 py-2.5 text-sm bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Student's Class *</label>
                  <select
                    name="studentClass"
                    value={formData.studentClass}
                    onChange={handleChange}
                    className="w-full border border-input rounded-lg px-4 py-2.5 text-sm bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none"
                    required
                  >
                    <option value="">Select class</option>
                    {[...Array(12)].map((_, i) => (
                      <option key={i + 1} value={String(i + 1)}>Class {i + 1}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Subjects of Interest</label>
                  <div className="flex flex-wrap gap-2">
                    {subjectsList.map((subj) => (
                      <label
                        key={subj}
                        className={`cursor-pointer text-xs px-3 py-1.5 rounded-full border transition-colors ${
                          formData.subjects.includes(subj)
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-muted text-muted-foreground border-border hover:border-primary/30"
                        }`}
                      >
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={formData.subjects.includes(subj)}
                          onChange={() => handleCheckbox(subj)}
                        />
                        {subj}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border border-input rounded-lg px-4 py-2.5 text-sm bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary text-secondary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Sending..." : "Request Callback"}
                </button>
              </form>
            </motion.div>

            {/* Contact Info + Map */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      House No - 8, Arohan Path, South Sarania, Sarania Hills, Guwahati, Assam 781007
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary shrink-0" />
                    <a href="tel:+91XXXXXXXXXX" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      +91-XXXXXXXXXX
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary shrink-0" />
                    <a href="mailto:info@solutiontution.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      info@solutiontution.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary shrink-0" />
                    <p className="text-sm text-muted-foreground">Open 24/7 (For Inquiries)</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-border h-64">
                <iframe
                  title="SOLUTION Tuition Centre Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.6!2d91.77!3d26.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSarania%20Hills%2C%20Guwahati!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-card rounded-xl border border-border overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span className="font-medium text-foreground text-sm">{faq.question}</span>
                  {openFaq === faq.id ? (
                    <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
                  )}
                </button>
                {openFaq === faq.id && (
                  <div className="px-4 pb-4 text-sm text-muted-foreground">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
