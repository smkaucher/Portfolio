import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_4yg58k2", "template_jzriwya", form.current, {
        publicKey: "e6o0bR1rXkUThk_Q0",
      })
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          setSuccess("Message Sent Succesfully");
          toast.success("Message Sent Succesfully", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <p className="text-cyan">{success}</p>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="glass h-12 rounded-xl px-4 text-white placeholder:text-lightGrey outline-none focus:!border-cyan"
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="glass h-12 rounded-xl px-4 text-white placeholder:text-lightGrey outline-none focus:!border-cyan"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          type="text"
          name="message"
          rows="9"
          cols="50"
          placeholder="Message"
          required
          className=" glass rounded-xl p-4 text-white placeholder:text-lightGrey outline-none focus:!border-cyan"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          className="w-full rounded-xl bg-orange text-[#ffffff] h-12 font-bold text-xl hover:bg-lightOrange hover:-translate-y-0.5 shadow-cyanShadow transition-all duration-500 cursor-pointer"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
