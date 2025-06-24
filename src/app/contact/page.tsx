'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const mailtoLink = `mailto:christianmalimit@gmail.com?subject=Message from ${encodeURIComponent(
    form.name
  )}&body=${encodeURIComponent(`Email: ${form.email}\n\n${form.message}`)}`;

  return (
    <main className="bg-black text-green-400 min-h-screen font-mono">
      <Header />
      <section className="px-6 py-20 max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Me</h1>
        <p className="text-green-300 mb-8">
          Got a question, collaboration idea, or just want to say hi? Fill out the form below.
        </p>

        <form action={mailtoLink} method="GET" className="space-y-6 text-left">
          <div>
            <label htmlFor="name" className="block mb-1">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full bg-black border border-green-400 px-4 py-2 text-green-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full bg-black border border-green-400 px-4 py-2 text-green-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              className="w-full bg-black border border-green-400 px-4 py-2 text-green-300 rounded-md"
              rows={5}
            />
          </div>
          <button
            type="submit"
            className="bg-green-700 text-black font-bold px-6 py-2 rounded hover:bg-green-500 transition"
          >
            Send Message
          </button>
        </form>
      </section>
      <Footer />
    </main>
  );
}