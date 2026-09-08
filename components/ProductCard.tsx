import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/data";

export default function ProductCard({
  categorySlug,
  product,
}: {
  categorySlug: string;
  product: Product;
}) {
  return (
    <Link
      href={`/produse/${categorySlug}/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-10 border border-beige-700 bg-white transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="relative aspect-square overflow-hidden bg-beige-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-10 bg-orange px-3 py-1 font-open text-14 font-bold uppercase tracking-wide text-brown-dark">
          {product.brand}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-dirty text-24 text-green-mountain">
          {product.name}
        </h3>
        <p className="flex-1 font-open text-16 text-brown-500">
          {product.shortDescription}
        </p>
        <p className="font-open text-14 font-bold uppercase tracking-wide text-green-base">
          {product.weight}
        </p>
      </div>
    </Link>
  );
}
