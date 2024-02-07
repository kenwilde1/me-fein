import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const sendEmail = (e) => {
    console.log('sending email');
    console.log(process.env);
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    console.log(process.env.NEXT_PUBLIC_REACT_APP_SERVICE_ID,
      process.env.NEXT_PUBLIC_REACT_APP_TEMPLATE_ID,
      process.env.NEXT_PUBLIC_REACT_APP_PUBLIC_KEY);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_REACT_APP_SERVICE_ID,
        process.env.NEXT_PUBLIC_REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          console.log(error);
          setStateMessage("Something went wrong, please try again later");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };
  return (
    <form onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Your message</label>
      <textarea name="message" />
      <input type="submit" value="Send" disabled={isSubmitting} />
      {stateMessage && <p>{stateMessage}</p>}
    </form>
  );
};
