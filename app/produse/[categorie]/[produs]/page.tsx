import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import { getAllCategoryProductParams, getProduct } from "@/lib/data";

export function generateStaticParams() {
  return getAllCategoryProductParams();
}

export function generateMetadata({
  params,
}: {
  params: { categorie: string; produs: string };
}): Metadata {
  const result = getProduct(params.categorie, params.produs);
  if (!result) return {};
  return {
    title: result.product.name,
    description: result.product.shortDescription,
  };
}

export default function ProductPage({
  params,
}: {
  params: { categorie: string; produs: string };
}) {
  const result = getProduct(params.categorie, params.produs);
  if (!result) notFound();

  return <ProductDetail category={result.category} product={result.product} />;
}
