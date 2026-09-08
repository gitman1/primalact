import Image from "next/image";
import type { Recipe } from "@/lib/data";

export default function RecipeCard({
  recipe,
  isInvert,
}: {
  recipe: Recipe;
  isInvert: boolean;
}) {
  const isWip = recipe.status === "wip";

  return (
    <article
      className={`flex w-full flex-col overflow-hidden md:h-[450px] md:flex-row ${
        isInvert ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="relative h-[250px] w-full md:h-full md:w-[58%]">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          sizes="(min-width: 768px) 58vw, 100vw"
          className={`object-cover ${isWip ? "opacity-70 grayscale" : ""}`}
        />
        {isWip && (
          <span className="absolute right-4 top-4 rounded-10 bg-orange px-3 py-1 font-open text-14 font-bold uppercase tracking-wide text-brown-dark">
            În curând
          </span>
        )}
      </div>

      <div className="flex w-full flex-col justify-center bg-green-mountain px-8 py-10 md:w-[42%] md:px-[8%]">
        <h2 className="font-dirty text-[28px] leading-tight text-white md:text-[40px]">
          {recipe.title}
        </h2>
        <div className="mt-15 flex items-center gap-4 font-open text-14 font-bold uppercase tracking-wide text-beige-100">
          <span>{recipe.prepTime}</span>
          <span>·</span>
          <span>{recipe.difficulty}</span>
        </div>

        <div className="mt-25 flex flex-wrap gap-3">
          {isWip ? (
            <span className="cursor-not-allowed rounded-[15px] border-2 border-white/50 px-6 py-3 font-dirty text-18 text-white/50">
              Descoperă rețeta
            </span>
          ) : (
            <a
              href={`/retete/${recipe.slug}`}
              className="rounded-[15px] border-2 border-white bg-white px-6 py-3 font-dirty text-18 text-green-mountain no-underline transition-colors hover:bg-transparent hover:text-white"
            >
              Descoperă rețeta
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
