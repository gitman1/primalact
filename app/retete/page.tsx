"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import RecipeCard from "@/components/RecipeCard";
import RecipeFilter from "@/components/RecipeFilter";
import Pagination from "@/components/Pagination";
import { getCategories, getRecipes, getRecipeTypes } from "@/lib/data";

const categories = getCategories();
const recipes = getRecipes();
const recipeTypes = getRecipeTypes();

const RECIPES_PER_PAGE = 4;

function matchesFilter(value: string, target: string) {
  return value === "" || value === "toate" || value === target;
}

export default function RetetePage() {
  const [typeSelect, setTypeSelect] = useState("");
  const [productSelect, setProductSelect] = useState("");
  const [appliedType, setAppliedType] = useState("");
  const [appliedProduct, setAppliedProduct] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const productOptions = useMemo(
    () =>
      categories
        .filter((category) =>
          recipes.some((recipe) => recipe.products.includes(category.slug))
        )
        .map((category) => ({ slug: category.slug, name: category.name })),
    []
  );

  const filteredRecipes = useMemo(
    () =>
      recipes.filter(
        (recipe) =>
          matchesFilter(appliedType, recipe.type) &&
          (appliedProduct === "" ||
            appliedProduct === "toate" ||
            recipe.products.includes(appliedProduct))
      ),
    [appliedType, appliedProduct]
  );

  const totalPages = Math.max(
    1,
    Math.ceil(filteredRecipes.length / RECIPES_PER_PAGE)
  );
  const safePage = Math.min(currentPage, totalPages);
  const startIdx = (safePage - 1) * RECIPES_PER_PAGE;
  const visibleRecipes = filteredRecipes.slice(
    startIdx,
    startIdx + RECIPES_PER_PAGE
  );

  function handleApply() {
    setAppliedType(typeSelect);
    setAppliedProduct(productSelect);
    setCurrentPage(1);
  }

  return (
    <div className="bg-white">
      {/* Hero banner cu filtre */}
      <section className="relative h-[300px] w-full overflow-hidden md:h-[440px]">
        <Image
          src="https://picsum.photos/seed/primalact-retete-banner/1600/700"
          alt="Rețete Primalact"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-mountain/90 via-green-mountain/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 py-30 md:h-[253px] md:py-0">
          <div className="mx-auto flex h-full max-w-1200 flex-col justify-center container-px">
            <div className="max-w-[540px]">
              <h1 className="mb-15 font-dirty text-[28px] leading-085 text-beige-header drop-shadow-md md:text-[38px]">
                Rețete cu produse Primalact
              </h1>

              <RecipeFilter
                typeOptions={recipeTypes}
                productOptions={productOptions}
                typeValue={typeSelect}
                productValue={productSelect}
                onTypeChange={setTypeSelect}
                onProductChange={setProductSelect}
                onApply={handleApply}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lista de rețete — carduri fullwidth alternate */}
      <section className="w-full">
        {visibleRecipes.map((recipe, index) => (
          <RecipeCard
            key={recipe.slug}
            recipe={recipe}
            isInvert={index % 2 !== 0}
          />
        ))}

        {visibleRecipes.length === 0 && (
          <p className="description-new py-60 text-center">
            Nu există rețete pentru filtrele selectate.
          </p>
        )}
      </section>

      <Pagination
        currentPage={safePage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
