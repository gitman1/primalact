import Image from "next/image";

type GalleryItem = {
  type: "photo" | "video";
  src: string;
  poster?: string;
  alt: string;
};

export default function SustainabilitySection({
  eyebrow,
  title,
  description,
  items,
  reverse = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: GalleryItem[];
  reverse?: boolean;
}) {
  return (
    <section className={`py-100 ${reverse ? "bg-beige-100" : "bg-white"}`}>
      <div className="mx-auto max-w-1200 container-px">
        <div className="mx-auto max-w-768 text-center">
          <span className="font-open text-14 font-bold uppercase tracking-widest text-green-base">
            {eyebrow}
          </span>
          <h2 className="title-new mt-15">{title}</h2>
          <p className="description-new mt-15">{description}</p>
        </div>

        <div className="mt-40 grid grid-cols-2 gap-20 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((item, index) => (
            <div
              key={item.src + index}
              className={`group relative overflow-hidden rounded-10 bg-beige-100 ${
                index === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
              }`}
            >
              {item.type === "video" ? (
                <video
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src={item.src}
                  poster={item.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-green-mountain/0 transition-colors duration-300 group-hover:bg-green-mountain/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
