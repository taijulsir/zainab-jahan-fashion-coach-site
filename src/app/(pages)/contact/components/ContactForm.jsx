"use client";
import { useState } from "react";
import ContactInput from "./ContactInput";
import ContactTextarea from "./ContactTextarea";
import ButtonWithBorder from "@/components/elements/ButtonWithBorder";

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, seEmail] = useState("");
  const [message, seMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      name: fullName,
      phone: phoneNumber,
      email,
      message,
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Reset form fields
        setFullName("");
        setPhoneNumber("");
        seEmail("");
        seMessage("");
      } else {
        console.error("Error submitting form");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="mt-10 max-w-[24.375rem]">
      <form action="" onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-6">
          <ContactInput value={fullName} setValue={setFullName} label={"Name"} type={"text"} />
          <ContactInput
            value={phoneNumber}
            setValue={setPhoneNumber}
            label={"Phone number"}
            type={"text"}
          />
          <ContactInput value={email} setValue={seEmail} label={"Email"} type={"email"} />
          <ContactTextarea value={message} setValue={seMessage} label={"Message"} />
        </div>

        <div className="mt-8 flex items-center justify-center md:mt-10 lg:mt-16 lg:justify-start">
          <ButtonWithBorder label={"Send message "} type={"submit"} />
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
