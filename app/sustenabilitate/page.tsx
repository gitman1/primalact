import type { Metadata } from "next";
import SustainabilitySection from "@/components/SustainabilitySection";

export const metadata: Metadata = {
  title: "Sustenabilitate",
  description:
    "Angajamentul Primalact față de fermierii români și energia verde.",
};

const farmerPhotos = Array.from({ length: 8 }, (_, i) => ({
  type: "photo" as const,
  src: `https://picsum.photos/seed/primalact-fermieri-${i + 1}/900/900`,
  alt: `Fermier român partener Primalact ${i + 1}`,
}));

const solarItems = [
  {
    type: "video" as const,
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster: "https://picsum.photos/seed/primalact-solar-video/900/900",
    alt: "Panouri fotovoltaice Primalact",
  },
  ...Array.from({ length: 7 }, (_, i) => ({
    type: "photo" as const,
    src: `https://picsum.photos/seed/primalact-solar-${i + 1}/900/900`,
    alt: `Panouri fotovoltaice Primalact ${i + 1}`,
  })),
];

export default function SustenabilitatePage() {
  return (
    <div>
      <div className="bg-beige-100">
        <div className="mx-auto max-w-768 container-px py-60 text-center">
          <span className="font-open text-14 font-bold uppercase tracking-widest text-green-base">
            Sustenabilitate
          </span>
          <h1 className="title-new mt-15">
            Grijă pentru oameni și pentru planetă
          </h1>
          <p className="description-new mt-15">
            De la parteneriatele cu fermierii români până la investițiile în
            energie verde, sustenabilitatea este parte din fiecare etapă a
            producției noastre.
          </p>
        </div>
      </div>

      <SustainabilitySection
        eyebrow="Parteneri de încredere"
        title="Fermieri români"
        description="Colaborăm cu ferme locale din zona Satu Mare, sprijinind fermierii români prin parteneriate pe termen lung și practici corecte de colectare a laptelui."
        items={farmerPhotos}
      />

      <SustainabilitySection
        eyebrow="Investiții verzi"
        title="Energie verde"
        description="Am investit în panouri fotovoltaice pentru a reduce amprenta de carbon a producției noastre și pentru a folosi energie curată în fabrica din Satu Mare."
        items={solarItems}
        reverse
      />
    </div>
  );
}
