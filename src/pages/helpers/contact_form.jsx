import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
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
    <form onSubmit={sendEmail} className="flex flex-col text-2xl">
      <label className="p-4">Name</label>
      <input className='border border-solid border-slate-500 rounded' type="text" name="user_name" />
      <label className="p-4">Email</label>
      <input className='border border-solid border-slate-500 rounded' type="email" name="user_email" />
      <label className="p-4">Your message</label>
      <textarea className='border border-solid border-slate-500 rounded' name="message" />
      <input className='mt-10 w-24 text-center self-center text-rose-500 hover:text-blue-500 cursor-pointer' type="submit" value="Send" disabled={isSubmitting} />
      {stateMessage && <p>{stateMessage}</p>}
    </form>
  );
};
