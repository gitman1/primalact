import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/lib/data";

export default function CategoryGrid({ categories }: { categories: Category[] }) {
  return (
    <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/produse/${category.slug}`}
          className="group relative block aspect-[4/3] overflow-hidden rounded-10"
        >
          <Image
            src={category.image}
            alt={category.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-mountain/85 via-transparent to-transparent" />
          <p className="absolute bottom-30 left-25 z-10 font-dirty text-35 uppercase leading-none text-white">
            {category.name}
          </p>
        </Link>
      ))}
    </div>
  );
}
