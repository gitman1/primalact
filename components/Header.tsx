"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getCategories } from "@/lib/data";

const navLinks = [
  { href: "/produse", label: "Produse" },
  { href: "/sustenabilitate", label: "Sustenabilitate" },
  { href: "/retete", label: "Rețete" },
  { href: "/despre-noi", label: "Despre noi" },
  { href: "/noutati", label: "Noutăți" },
  { href: "/contact", label: "Contact" },
];

const categories = getCategories();

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
    setIsProductsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] bg-beige-header shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]">
      <nav className="mx-auto flex h-100 max-w-1200 items-center justify-between px-5">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/logo.png"
            alt="Primalact"
            width={337}
            height={286}
            className="h-60 w-auto"
            priority
          />
        </Link>

        <ul className="hidden lg:flex flex-row items-center gap-30">
          {navLinks.map((link) =>
            link.label === "Produse" ? (
              <li
                key={link.href}
                className="relative"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <Link
                  href={link.href}
                  className="font-open text-20 text-green-mountain no-underline transition-colors hover:text-green-light"
                >
                  <strong>{link.label}</strong>
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    className={`ml-1 inline-block align-middle transition-transform duration-300 ${
                      isProductsOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M1 1l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <div
                  className={`absolute left-1/2 top-full grid w-[560px] -translate-x-1/2 grid-cols-2 gap-1 rounded-10 border border-beige-700 bg-white p-4 shadow-xl transition-all duration-300 ${
                    isProductsOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-2 opacity-0"
                  }`}
                >
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/produse/${category.slug}`}
                      className="rounded-10 px-3 py-2 font-open text-16 text-green-mountain transition-colors hover:bg-beige-100 hover:text-green-light"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-open text-20 text-green-mountain no-underline transition-colors hover:text-green-light"
                >
                  <strong>{link.label}</strong>
                </Link>
              </li>
            )
          )}
        </ul>

        <button
          type="button"
          aria-label="Deschide meniul"
          aria-expanded={isOpen}
          className="flex flex-col gap-1.5 lg:hidden"
          onClick={() => setIsOpen((v) => !v)}
        >
          <span
            className={`h-0.5 w-7 bg-green-mountain transition-transform duration-200 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-7 bg-green-mountain transition-opacity duration-200 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-7 bg-green-mountain transition-transform duration-200 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`overflow-hidden bg-beige-header transition-[max-height] duration-300 ease-in-out lg:hidden ${
          isOpen ? "max-h-[80vh] overflow-y-auto" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 pb-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-10 px-2 py-3 font-open text-18 font-bold text-green-mountain"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-2 border-t border-beige-700 pt-2">
            <p className="px-2 pb-2 font-open text-14 font-bold uppercase tracking-wide text-green-mountain/50">
              Categorii produse
            </p>
            <div className="grid grid-cols-2 gap-1">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/produse/${category.slug}`}
                  className="rounded-10 px-2 py-2 font-open text-16 text-green-mountain/80"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}
