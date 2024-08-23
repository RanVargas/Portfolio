"use client";
import React, { useState } from "react";
import Navbar from "../navbar";
import Footer from "../footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null); // Reset status message

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
      } else {
        const errorData = await response.json();
        setStatus(`Failed to send message: ${errorData.error}`);
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center justify-center min-h-[50vh] text-white">
        <p className="text-center mb-8">
          Hi! Please leave me your contact details along with your message, we
          can collaborate, connect or maybe reach an agreement for work.
        </p>
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <label className="block mb-4">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name..."
              className="w-full px-4 py-2 border rounded text-black"
            />
          </label>
          <label className="block mb-4">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border rounded text-black"
            />
          </label>
          <label className="block mb-4">
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message..."
              className="w-full px-4 py-2 border rounded text-black"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
