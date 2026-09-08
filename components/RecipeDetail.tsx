import Image from "next/image";
import Link from "next/link";
import type { Recipe } from "@/lib/data";
import { getCategory } from "@/lib/data";

export default function RecipeDetail({ recipe }: { recipe: Recipe }) {
  const isWip = recipe.status === "wip";
  const relatedCategories = recipe.products
    .map((slug) => getCategory(slug))
    .filter((category): category is NonNullable<typeof category> => Boolean(category));

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-1200 container-px py-40">
        <Link
          href="/retete"
          className="font-open text-14 font-bold uppercase tracking-widest text-green-base"
        >
          ← Rețete
        </Link>

        <div className="mt-25 grid grid-cols-1 gap-40 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-10 bg-beige-100">
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className={`object-cover ${isWip ? "opacity-70 grayscale" : ""}`}
              priority
            />
            <span className="absolute left-4 top-4 rounded-10 bg-orange px-3 py-1 font-open text-14 font-bold uppercase tracking-wide text-brown-dark">
              {recipe.typeLabel}
            </span>
            {isWip && (
              <span className="absolute right-4 top-4 rounded-10 bg-brown-dark px-3 py-1 font-open text-14 font-bold uppercase tracking-wide text-white">
                În curând
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <h1 className="title-new">{recipe.title}</h1>
            <p className="description-new mt-15">{recipe.shortDescription}</p>

            <dl className="mt-25 grid grid-cols-2 gap-25 rounded-10 bg-beige-100 p-25 sm:grid-cols-3">
              <div>
                <dt className="font-open text-14 font-bold uppercase tracking-wide text-brown-500">
                  Timp de preparare
                </dt>
                <dd className="mt-1 font-open text-18 font-bold text-brown-dark">
                  {recipe.prepTime}
                </dd>
              </div>
              <div>
                <dt className="font-open text-14 font-bold uppercase tracking-wide text-brown-500">
                  Dificultate
                </dt>
                <dd className="mt-1 font-open text-18 font-bold text-brown-dark">
                  {recipe.difficulty}
                </dd>
              </div>
              <div>
                <dt className="font-open text-14 font-bold uppercase tracking-wide text-brown-500">
                  Tip de rețetă
                </dt>
                <dd className="mt-1 font-open text-18 font-bold text-brown-dark">
                  {recipe.typeLabel}
                </dd>
              </div>
            </dl>

            {relatedCategories.length > 0 && (
              <div className="mt-25">
                <h2 className="font-open text-14 font-bold uppercase tracking-wide text-green-mountain">
                  Produse folosite
                </h2>
                <div className="mt-2 flex flex-wrap gap-2">
                  {relatedCategories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/produse/${category.slug}`}
                      className="rounded-10 bg-beige-100 px-4 py-2 font-open text-16 text-green-mountain no-underline transition-colors hover:bg-beige-700"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {isWip ? (
              <p className="description-new description-new--light mt-30">
                Rețeta completă (ingrediente și mod de preparare) este în
                lucru — revino în curând.
              </p>
            ) : (
              <>
                <div className="mt-30">
                  <h2 className="font-open text-14 font-bold uppercase tracking-wide text-green-mountain">
                    Ingrediente
                  </h2>
                  <ul className="mt-15 list-disc space-y-1 pl-5 font-open text-16 text-brown-500">
                    {recipe.ingredients.map((ingredient) => (
                      <li key={ingredient}>{ingredient}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-30">
                  <h2 className="font-open text-14 font-bold uppercase tracking-wide text-green-mountain">
                    Mod de preparare
                  </h2>
                  <ol className="mt-15 list-decimal space-y-3 pl-5 font-open text-16 text-brown-500">
                    {recipe.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
