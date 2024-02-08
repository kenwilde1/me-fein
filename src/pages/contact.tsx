import ContactForm from "./helpers/contact_form";

export default function Contact() {
  return (
    <div
      className="flex justify-center pt-24 flex-col items-center pb-24"
      id="contact"
    >
      <h1 className="text-7xl font-extrabold mb-24">Contact Me</h1>
      <div>
        <ContactForm />
      </div>
    </div>
  );
}
