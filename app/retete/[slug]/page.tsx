import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RecipeDetail from "@/components/RecipeDetail";
import { getAllRecipeParams, getRecipe } from "@/lib/data";

export function generateStaticParams() {
  return getAllRecipeParams();
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const recipe = getRecipe(params.slug);
  if (!recipe) return {};
  return {
    title: recipe.title,
    description: recipe.shortDescription,
  };
}

export default function RecipePage({ params }: { params: { slug: string } }) {
  const recipe = getRecipe(params.slug);
  if (!recipe) notFound();

  return <RecipeDetail recipe={recipe} />;
}
