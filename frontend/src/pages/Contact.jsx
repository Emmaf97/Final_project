import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
        <h1>Contact Page</h1>
          <p>Testing Route Connections.</p>
          <ContactForm route="/api/contact/"/>
    </>
  );
}

export default Contact;