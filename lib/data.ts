import productsData from "@/data/products.json";
import recipesData from "@/data/recipes.json";

export type NutritionRow = {
  label: string;
  value: string;
};

export type Product = {
  slug: string;
  name: string;
  brand: string;
  image: string;
  shortDescription: string;
  description: string;
  weight: string;
  ingredients: string[];
  servingSize: string;
  nutrition: NutritionRow[];
};

export type Category = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  products: Product[];
};

export type Recipe = {
  slug: string;
  title: string;
  image: string;
  shortDescription: string;
  products: string[];
  type: string;
  typeLabel: string;
  prepTime: string;
  difficulty: string;
  status: "published" | "wip";
  ingredients: string[];
  steps: string[];
};

const categories = productsData.categories as Category[];
const recipes = recipesData.recipes as Recipe[];

export function getCategories(): Category[] {
  return categories;
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getProduct(
  categorySlug: string,
  productSlug: string
): { category: Category; product: Product } | undefined {
  const category = getCategory(categorySlug);
  const product = category?.products.find((p) => p.slug === productSlug);
  if (!category || !product) return undefined;
  return { category, product };
}

export function getAllCategoryProductParams() {
  return categories.flatMap((category) =>
    category.products.map((product) => ({
      categorie: category.slug,
      produs: product.slug,
    }))
  );
}

export function getAllCategoryParams() {
  return categories.map((category) => ({ categorie: category.slug }));
}

export function getRecipes(): Recipe[] {
  return recipes;
}

export function getRecipe(slug: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.slug === slug);
}

export function getAllRecipeParams() {
  return recipes.map((recipe) => ({ slug: recipe.slug }));
}

export function getRecipesByProduct(categorySlug: string): Recipe[] {
  return recipes.filter((recipe) => recipe.products.includes(categorySlug));
}

export function getRecipeTypes(): { slug: string; name: string }[] {
  const seen = new Map<string, string>();
  recipes.forEach((recipe) => {
    if (!seen.has(recipe.type)) seen.set(recipe.type, recipe.typeLabel);
  });
  return Array.from(seen, ([slug, name]) => ({ slug, name }));
}
