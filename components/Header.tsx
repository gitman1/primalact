"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getCategories } from "@/lib/data";

const socialLinks = [
  {
    platform: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61573241979396",
    icon: (
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14C17.17 2.1 15.94 2 14.64 2 11.9 2 10 3.66 10 6.7v2.8H7v4h3V22h4v-8.5Z" />
    ),
  },
  {
    platform: "Instagram",
    href: "https://www.instagram.com/primalactsm/",
    icon: (
      <path d="M12 2.2c2.7 0 3 0 4.1.06 1.05.05 1.62.22 2 .37.5.19.86.42 1.24.8.38.38.61.74.8 1.24.15.38.32.95.37 2 .06 1.1.06 1.4.06 4.1s0 3-.06 4.1c-.05 1.05-.22 1.62-.37 2-.19.5-.42.86-.8 1.24-.38.38-.74.61-1.24.8-.38.15-.95.32-2 .37-1.1.06-1.4.06-4.1.06s-3 0-4.1-.06c-1.05-.05-1.62-.22-2-.37a3.3 3.3 0 0 1-1.24-.8 3.3 3.3 0 0 1-.8-1.24c-.15-.38-.32-.95-.37-2C2.2 15 2.2 14.7 2.2 12s0-3 .06-4.1c.05-1.05.22-1.62.37-2 .19-.5.42-.86.8-1.24.38-.38.74-.61 1.24-.8.38-.15.95-.32 2-.37C7.8 2.2 8.1 2.2 12 2.2Zm0 1.8c-2.66 0-2.97 0-4.02.06-.86.04-1.33.18-1.64.3-.41.16-.7.35-1.01.66-.31.31-.5.6-.66 1.01-.12.31-.26.78-.3 1.64C4.31 8.72 4.3 9.03 4.3 12s0 2.28.07 3.33c.04.86.18 1.33.3 1.64.16.41.35.7.66 1.01.31.31.6.5 1.01.66.31.12.78.26 1.64.3 1.05.06 1.36.07 4.02.07s2.97 0 4.02-.07c.86-.04 1.33-.18 1.64-.3.41-.16.7-.35 1.01-.66.31-.31.5-.6.66-1.01.12-.31.26-.78.3-1.64.06-1.05.07-1.36.07-3.33s0-2.28-.07-3.33c-.04-.86-.18-1.33-.3-1.64a2.6 2.6 0 0 0-.66-1.01 2.6 2.6 0 0 0-1.01-.66c-.31-.12-.78-.26-1.64-.3C14.97 4 14.66 4 12 4Zm0 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 1.8a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm4.7-2a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1Z" />
    ),
  },
];

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
        <Link href="/" className="flex shrink-0 items-center self-stretch">
          <Image
            src="/images/logo.png"
            alt="Primalact"
            width={337}
            height={286}
            className="h-full w-auto"
            priority
          />
        </Link>

        <div className="hidden lg:flex flex-row items-center gap-30">
        <ul className="flex flex-row items-center gap-30">
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

        <div className="flex items-center gap-4 border-l border-beige-700 pl-30">
          {socialLinks.map((social) => (
            <a
              key={social.platform}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.platform}
              className="text-green-mountain transition-colors hover:text-green-light"
            >
              <svg viewBox="0 0 24 24" width={22} height={22} fill="currentColor">
                {social.icon}
              </svg>
            </a>
          ))}
        </div>
        </div>

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
          <li className="mt-2 flex gap-6 border-t border-beige-700 px-2 pt-4">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.platform}
                className="text-green-mountain transition-colors hover:text-green-light"
              >
                <svg viewBox="0 0 24 24" width={26} height={26} fill="currentColor">
                  {social.icon}
                </svg>
              </a>
            ))}
          </li>
        </ul>
      </div>
    </header>
  );
}
