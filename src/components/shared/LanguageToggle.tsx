import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "as" : "en")}
      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-muted border border-border"
      aria-label="Toggle language"
    >
      <Languages className="w-4 h-4" />
      <span>{language === "en" ? "অসমীয়া" : "English"}</span>
    </button>
  );
};

export default LanguageToggle;
