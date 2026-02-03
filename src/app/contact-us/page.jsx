import ContactForm from "@/components/Landing/ContactForm ";
import FAQ from "@/components/Landing/FAQ";

const ContactUsPage = () => {
  return (
    <div className='min-h-screen bg-black transition-colors duration-300'>
      <ContactForm />
      <FAQ />
    </div>
  );
};

export default ContactUsPage;
