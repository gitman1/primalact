"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div className="rounded-10 bg-beige-100 p-40 text-center">
        <h3 className="font-dirty text-24 text-green-mountain">
          Mulțumim pentru mesaj!
        </h3>
        <p className="mt-2 font-open text-16 text-brown-500">
          Îți vom răspunde în cel mai scurt timp posibil.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="font-open text-16 font-bold text-brown-dark">
            Nume
          </span>
          <input
            type="text"
            name="name"
            required
            className="rounded-10 border border-beige-700 px-4 py-2.5 font-open text-16 text-brown-dark outline-none focus:border-green-mountain"
            placeholder="Numele tău"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="font-open text-16 font-bold text-brown-dark">
            Email
          </span>
          <input
            type="email"
            name="email"
            required
            className="rounded-10 border border-beige-700 px-4 py-2.5 font-open text-16 text-brown-dark outline-none focus:border-green-mountain"
            placeholder="nume@exemplu.ro"
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="font-open text-16 font-bold text-brown-dark">
          Subiect
        </span>
        <input
          type="text"
          name="subject"
          required
          className="rounded-10 border border-beige-700 px-4 py-2.5 font-open text-16 text-brown-dark outline-none focus:border-green-mountain"
          placeholder="Cu ce te putem ajuta?"
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="font-open text-16 font-bold text-brown-dark">
          Mesaj
        </span>
        <textarea
          name="message"
          required
          rows={5}
          className="rounded-10 border border-beige-700 px-4 py-2.5 font-open text-16 text-brown-dark outline-none focus:border-green-mountain"
          placeholder="Scrie-ne mesajul tău..."
        />
      </label>

      <button type="submit" className="btn self-start">
        Trimite mesajul
      </button>
    </form>
  );
}
