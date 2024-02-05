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

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission, e.g., send email
    //sendEmail(formData);
  };

  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center justify-center min-h-[50vh] text-white">
        <p className="text-center mb-8">
          Hi! Please leave me your contact details along with your message, we
          can colaborate, connect or maybe reach an agreement for work.
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
              className="w-full px-4 py-2 border rounded"
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
              className="w-full px-4 py-2 border rounded"
            />
          </label>
          <label className="block mb-4">
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
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

export async function getStaticProps() {
  // Fetch content for all folders
  const response = await fetch("/api/s3-files/all");
  const folderContents = await response.json();

  return {
    props: { folderContents },
  };
}

export default Contact;
