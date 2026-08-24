import { useState } from "react";
import emailjs from "@emailjs/browser";

const EMPTY_FORM = { name: "", email: "", message: "" };

/**
 * @function useContactForm
 * @description Holds the contact form's state and submits it via EmailJS
 * (no custom backend). Requires `VITE_EMAILJS_SERVICE_ID`,
 * `VITE_EMAILJS_TEMPLATE_ID` and `VITE_EMAILJS_PUBLIC_KEY` in `.env` (see
 * `.env.example`).
 *
 * @returns {{
 *   values: {name: string, email: string, message: string},
 *   status: 'idle'|'sending'|'success'|'error',
 *   handleChange: React.ChangeEventHandler,
 *   handleSubmit: (event: React.FormEvent) => Promise<void>
 * }} Form state and handlers to wire up to `ContactField`/`Button`.
 */
export const useContactForm = () => {
  const [values, setValues] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        values,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setStatus("success");
      setValues(EMPTY_FORM);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return { values, status, handleChange, handleSubmit };
};
