
import Header from "@/components/Header";
import ContactHero from "@/components/ContactHero";
import ContactForm from "@/components/ContactForm";
import SpecializedContacts from "@/components/SpecializedContacts";
import ContactFAQ from "@/components/ContactFAQ";
import ContactNewsletter from "@/components/ContactNewsletter";
import FeedbackForm from "@/components/FeedbackForm";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ContactHero />
      <ContactForm />
      <SpecializedContacts />
      <ContactFAQ />
      <ContactNewsletter />
      <FeedbackForm />
      <Footer />
    </div>
  );
};

export default Contact;
