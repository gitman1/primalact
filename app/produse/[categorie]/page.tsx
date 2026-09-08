import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getAllCategoryParams, getCategory } from "@/lib/data";

export function generateStaticParams() {
  return getAllCategoryParams();
}

export function generateMetadata({
  params,
}: {
  params: { categorie: string };
}): Metadata {
  const category = getCategory(params.categorie);
  if (!category) return {};
  return {
    title: category.name,
    description: category.description,
  };
}

export default function CategoryPage({
  params,
}: {
  params: { categorie: string };
}) {
  const category = getCategory(params.categorie);
  if (!category) notFound();

  return (
    <div className="bg-white">
      <div className="bg-beige-header">
        <div className="mx-auto max-w-768 container-px py-60 text-center">
          <Link
            href="/produse"
            className="font-open text-14 font-bold uppercase tracking-widest text-green-base"
          >
            ← Toate categoriile
          </Link>
          <h1 className="title-new mt-15">{category.name}</h1>
          <p className="subtitle-new mt-2">{category.tagline}</p>
          <p className="description-new mt-15">{category.description}</p>
        </div>
      </div>

      <div className="mx-auto max-w-1200 container-px py-60">
        <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3">
          {category.products.map((product) => (
            <ProductCard
              key={product.slug}
              categorySlug={category.slug}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
