// src/email.js
import emailjs from "@emailjs/browser";

/**
 * Sends an email using EmailJS with the provided form reference.
 * @param {React.RefObject} formRef - React ref pointing to the form DOM element.
 * @returns {Promise} - Resolves with result or throws error on failure.
 */
export const sendEmail = async (formRef) => {
  try {
    const result = await emailjs.sendForm(
      "YOUR_SERVICE_ID",   
      "YOUR_TEMPLATE_ID", 
      formRef.current,    
      "YOUR_PUBLIC_KEY"    
    );
    return result;
  } catch (error) {
    console.error("EmailJS sendForm error:", error);
    throw error;
  }
};
