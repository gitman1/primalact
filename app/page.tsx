import VideoHero from "@/components/VideoHero";
import CategoryGrid from "@/components/CategoryGrid";
import WaveSeparator from "@/components/WaveSeparator";
import SocialFeed from "@/components/SocialFeed";
import { getCategories } from "@/lib/data";

export default function Home() {
  const categories = getCategories();

  return (
    <>
      <VideoHero
        videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
        posterSrc="https://picsum.photos/seed/primalact-hero/1920/1080"
        eyebrow="Primalact & La Ferma"
        title="Lactate proaspete, de la fermierii din Satu Mare"
        subtitle="Din 1994 aducem pe masa românilor gustul autentic al laptelui de fermă, procesat cu grijă și responsabilitate."
        ctaText="Descoperă produsele"
        ctaHref="/produse"
      />

      <section className="bg-beige-body bg-[url('/images/desprenoibg.png')] bg-cover bg-center bg-no-repeat">
        <div className="mx-auto max-w-768 container-px py-100 text-center">
          <h2 className="title-new mx-auto">Despre noi</h2>
          <p className="description-new mx-auto mt-30 max-w-968">
            Primalact este un producător de lactate din Satu Mare, construit
            pe parteneriate solide cu fermieri români care cresc animalele cu
            grijă. Sub brandurile Primalact și La Ferma, transformăm laptele
            proaspăt colectat zilnic în produse cu gust autentic, procesate
            responsabil, aproape de natură.
          </p>
        </div>
      </section>

      <WaveSeparator fromColor="#FFFCF1" toColor="#FFFFFF" />

      <section className="bg-white py-50 pb-120">
        <div className="mx-auto max-w-1200 container-px">
          <div className="mx-auto mb-40 max-w-768 text-center">
            <h3 className="font-dirty text-60 leading-none pb-15 text-brown-dark">
              Produsele noastre
            </h3>
            <p className="description-new">
              De la lapte proaspăt și smântână, la cașcaval maturat și
              mozzarella fină, gama noastră acoperă tot ce înseamnă lactate
              de calitate. Fiecare categorie ascunde produse alese cu grijă,
              gata să completeze masa de zi cu zi.
            </p>
          </div>

          <CategoryGrid categories={categories} />
        </div>
      </section>

      <SocialFeed />
    </>
  );
}
