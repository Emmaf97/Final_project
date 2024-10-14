import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <h1>Contact Page</h1>
      <ContactForm route="/api/contact/" />
    </>
  );
}

export default Contact;
