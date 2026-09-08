import Link from "next/link";

const productLinks = [
  { href: "/produse/lapte", label: "Lapte" },
  { href: "/produse/branzeturi", label: "Brânzeturi" },
  { href: "/produse/cascaval", label: "Cașcaval" },
  { href: "/produse/mozzarella", label: "Mozzarella" },
];

const companyLinks = [
  { href: "/despre-noi", label: "Despre noi" },
  { href: "/sustenabilitate", label: "Sustenabilitate" },
  { href: "/noutati", label: "Noutăți" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/termeni-si-conditii", label: "Termeni și condiții" },
  { href: "/confidentialitate", label: "Politica de confidențialitate" },
  { href: "/cookies", label: "Politica de cookies" },
];

const linkColumns = [
  { title: "Produse", links: productLinks },
  { title: "Companie", links: companyLinks },
  { title: "Legal", links: legalLinks },
];

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

export default function Footer() {
  return (
    <footer>
      <div className="bg-beige-header bg-[url('/images/subsolbg.png')] bg-cover bg-bottom bg-no-repeat pb-30 pt-40 sm:pb-60">
        <div className="mx-auto flex max-w-1200 flex-col px-5">
          <div className="order-2 mt-40 flex flex-wrap justify-center gap-x-30 gap-y-3 sm:order-1 sm:mb-10 sm:mt-0 sm:justify-end">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-[8px] font-open text-14 font-bold text-brown-dark no-underline transition-colors hover:text-green-mountain"
              >
                <svg
                  viewBox="0 0 24 24"
                  width={26}
                  height={26}
                  fill="currentColor"
                  className="text-green-mountain"
                >
                  {social.icon}
                </svg>
                {social.platform}
              </a>
            ))}
          </div>

          <div className="order-1 grid grid-cols-1 gap-x-25 gap-y-30 text-center sm:order-2 sm:grid-cols-3 sm:text-center">
            {linkColumns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <p className="font-open text-14 font-bold uppercase tracking-wide text-brown-500">
                  {col.title}
                </p>
                <ul className="mt-15 space-y-1 font-open text-16 leading-snug">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-brown-dark transition-colors hover:text-green-mountain"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden leading-none sm:-mt-[50px]">
        <svg
          viewBox="0 0 1440 160"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full"
          aria-hidden="true"
        >
          <path
            d="M0,100 C200,40 400,130 600,80 C800,30 1000,110 1200,70 C1350,40 1420,90 1440,80 L1440,160 L0,160 Z"
            fill="#A4A4C4"
          />
          <path
            d="M0,120 C150,70 350,140 550,100 C750,60 950,130 1150,90 C1300,60 1400,110 1440,100 L1440,160 L0,160 Z"
            fill="#6B6B9F"
          />
          <path
            d="M0,140 C200,100 400,150 700,120 C900,100 1100,145 1300,125 C1380,115 1420,135 1440,130 L1440,160 L0,160 Z"
            fill="#1B1C6B"
          />
        </svg>
      </div>

      <div className="bg-green-mountain px-5 py-15">
        <p className="mx-auto max-w-1200 text-center font-open text-14 text-white">
          © {new Date().getFullYear()} Primalact. Toate drepturile rezervate.
        </p>
      </div>
    </footer>
  );
}
