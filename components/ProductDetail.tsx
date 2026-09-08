import Image from "next/image";
import Link from "next/link";
import NutritionTable from "@/components/NutritionTable";
import type { Category, Product } from "@/lib/data";

export default function ProductDetail({
  category,
  product,
}: {
  category: Category;
  product: Product;
}) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-1200 container-px py-40">
        <Link
          href={`/produse/${category.slug}`}
          className="font-open text-14 font-bold uppercase tracking-widest text-green-base"
        >
          ← {category.name}
        </Link>

        <div className="mt-25 grid grid-cols-1 gap-40 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-10 bg-beige-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
            <span className="absolute left-4 top-4 rounded-10 bg-orange px-3 py-1 font-open text-14 font-bold uppercase tracking-wide text-brown-dark">
              {product.brand}
            </span>
          </div>

          <div className="flex flex-col">
            <h1 className="title-new">{product.name}</h1>
            <p className="description-new mt-15">{product.description}</p>

            <dl className="mt-25 grid grid-cols-2 gap-25 rounded-10 bg-beige-100 p-25">
              <div>
                <dt className="font-open text-14 font-bold uppercase tracking-wide text-brown-500">
                  Greutate ambalaj
                </dt>
                <dd className="mt-1 font-open text-18 font-bold text-brown-dark">
                  {product.weight}
                </dd>
              </div>
              <div>
                <dt className="font-open text-14 font-bold uppercase tracking-wide text-brown-500">
                  Brand
                </dt>
                <dd className="mt-1 font-open text-18 font-bold text-brown-dark">
                  {product.brand}
                </dd>
              </div>
            </dl>

            <div className="mt-25">
              <h2 className="font-open text-14 font-bold uppercase tracking-wide text-green-mountain">
                Ingrediente
              </h2>
              <p className="mt-2 font-open text-16 text-brown-500">
                {product.ingredients.join(", ")}
              </p>
            </div>

            <div className="mt-30">
              <h2 className="font-open text-14 font-bold uppercase tracking-wide text-green-mountain">
                Valori nutriționale
              </h2>
              <div className="mt-15">
                <NutritionTable
                  servingSize={product.servingSize}
                  rows={product.nutrition}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
