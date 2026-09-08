import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactează echipa Primalact din Satu Mare.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="bg-beige-header">
        <div className="mx-auto max-w-768 container-px py-60 text-center">
          <span className="font-open text-14 font-bold uppercase tracking-widest text-green-base">
            Contact
          </span>
          <h1 className="title-new mt-15">Hai să vorbim</h1>
          <p className="description-new mt-15">
            Ai o întrebare despre produsele noastre sau vrei să devii
            partener? Scrie-ne.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-1200 container-px py-60">
        <div className="grid grid-cols-1 gap-40 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h2 className="font-open text-14 font-bold uppercase tracking-wide text-green-mountain">
                Adresă
              </h2>
              <p className="mt-2 font-open text-16 text-brown-500">
                Str. Fabricii nr. 1, Satu Mare, România
              </p>
            </div>
            <div>
              <h2 className="font-open text-14 font-bold uppercase tracking-wide text-green-mountain">
                Telefon
              </h2>
              <p className="mt-2 font-open text-16 text-brown-500">
                +40 261 000 000
              </p>
            </div>
            <div>
              <h2 className="font-open text-14 font-bold uppercase tracking-wide text-green-mountain">
                Email
              </h2>
              <p className="mt-2 font-open text-16 text-brown-500">
                contact@primalact.ro
              </p>
            </div>
            <div>
              <h2 className="font-open text-14 font-bold uppercase tracking-wide text-green-mountain">
                Program
              </h2>
              <p className="mt-2 font-open text-16 text-brown-500">
                Luni - Vineri, 08:00 - 16:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
