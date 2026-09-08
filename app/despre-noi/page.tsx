import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Despre noi",
  description:
    "Povestea Primalact, producător de lactate din Satu Mare, și a brandurilor Primalact și La Ferma.",
};

const stats = [
  { value: "30+", description: "ani de experiență" },
  { value: "100+", description: "fermieri parteneri" },
  { value: "2", description: "branduri: Primalact și La Ferma" },
];

export default function DespreNoiPage() {
  return (
    <div className="bg-white">
      <div className="bg-beige-header">
        <div className="mx-auto max-w-768 container-px py-60 text-center">
          <span className="font-open text-14 font-bold uppercase tracking-widest text-green-base">
            Despre noi
          </span>
          <h1 className="title-new mt-15">
            Lactate cu suflet, din inima Sătmarului
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-1200 container-px py-60">
        <div className="grid grid-cols-1 gap-40 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-10">
            <Image
              src="https://picsum.photos/seed/primalact-despre-1/1000/750"
              alt="Fabrica Primalact din Satu Mare"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="subtitle-new">Povestea noastră</h2>
            <p className="description-new mt-15">
              Primalact este un producător de lactate cu sediul în Satu Mare,
              construit pe relații de încredere cu fermieri români din
              regiune. De peste trei decenii, procesăm lapte proaspăt
              colectat zilnic, transformându-l în produse care păstrează
              gustul autentic al fermei.
            </p>
            <p className="description-new mt-15">
              Sub brandurile Primalact și La Ferma, oferim o gamă largă de
              lactate — de la lapte și smântână, la brânzeturi și cașcaval
              maturat — respectând procese tradiționale și standarde moderne
              de calitate.
            </p>
          </div>
        </div>

        <div className="mt-100 flex flex-wrap justify-center gap-25">
          {stats.map((stat) => (
            <div
              key={stat.description}
              className="flex w-full flex-col items-center text-center sm:w-[45%] lg:w-[22%]"
            >
              <div className="mb-15 flex h-[140px] w-[140px] items-center justify-center rounded-full bg-orange shadow-sm">
                <span className="font-dirty text-45 text-brown-dark">
                  {stat.value}
                </span>
              </div>
              <p className="font-open text-16 text-brown-500">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
