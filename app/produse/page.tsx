import type { Metadata } from "next";
import CategoryGrid from "@/components/CategoryGrid";
import { getCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Produse",
  description: "Gama completă de lactate Primalact și La Ferma.",
};

export default function ProdusePage() {
  const categories = getCategories();

  return (
    <div className="bg-white">
      <div className="bg-beige-header">
        <div className="mx-auto max-w-768 container-px py-60 text-center">
          <span className="font-open text-14 font-bold uppercase tracking-widest text-green-base">
            Produse
          </span>
          <h1 className="title-new mt-15">
            Toate categoriile noastre de lactate
          </h1>
          <p className="description-new mt-15">
            Alege o categorie pentru a descoperi produsele Primalact și La
            Ferma.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-1200 container-px py-60">
        <CategoryGrid categories={categories} />
      </div>
    </div>
  );
}
