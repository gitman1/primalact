import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Noutăți",
  description: "Ultimele noutăți despre produsele și proiectele Primalact.",
};

const news = [
  {
    slug: "gama-noua-cascaval-afumat",
    title: "Lansăm gama nouă de cașcaval afumat La Ferma",
    date: "2026-05-12",
    excerpt:
      "O rețetă tradițională de afumare la rece, cu lemn de fag, disponibilă acum în magazine.",
    image: "https://picsum.photos/seed/primalact-news-1/900/600",
  },
  {
    slug: "panouri-fotovoltaice-fabrica",
    title: "Am instalat panouri fotovoltaice la fabrica din Satu Mare",
    date: "2026-03-02",
    excerpt:
      "Un pas important spre reducerea amprentei de carbon a producției noastre.",
    image: "https://picsum.photos/seed/primalact-news-2/900/600",
  },
  {
    slug: "parteneriat-fermieri-locali",
    title: "Extindem parteneriatele cu fermieri locali din regiune",
    date: "2026-01-20",
    excerpt:
      "Colaborăm cu tot mai multe ferme din Satu Mare pentru a susține producția locală.",
    image: "https://picsum.photos/seed/primalact-news-3/900/600",
  },
];

export default function NoutatiPage() {
  return (
    <div className="bg-white">
      <div className="bg-beige-header">
        <div className="mx-auto max-w-768 container-px py-60 text-center">
          <span className="font-open text-14 font-bold uppercase tracking-widest text-green-base">
            Noutăți
          </span>
          <h1 className="title-new mt-15">Ce mai e nou la Primalact</h1>
        </div>
      </div>

      <div className="mx-auto max-w-1200 container-px py-60">
        <div className="grid grid-cols-1 gap-25 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <article
              key={item.slug}
              className="flex flex-col overflow-hidden rounded-10 border border-beige-700"
            >
              <div className="relative aspect-video">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <time className="font-open text-14 font-bold uppercase tracking-wide text-brown-500">
                  {new Date(item.date).toLocaleDateString("ro-RO", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <h2 className="font-dirty text-24 text-green-mountain">
                  {item.title}
                </h2>
                <p className="flex-1 font-open text-16 text-brown-500">
                  {item.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
