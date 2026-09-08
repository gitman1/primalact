import InstagramCard from "@/components/InstagramCard";

const instagramPosts = [
  {
    image: "/images/instagram/post-1.jpg",
    username: "@primalactsm",
    postUrl: "https://www.instagram.com/primalactsm/p/Da3BP_BAANV/",
  },
  {
    image: "/images/instagram/post-2.jpg",
    username: "@primalactsm",
    postUrl: "https://www.instagram.com/primalactsm/p/DYNEzeniRtc/",
  },
  {
    image: "/images/instagram/post-3.jpg",
    username: "@primalactsm",
    postUrl: "https://www.instagram.com/primalactsm/p/DXpBtJdDTIj/",
  },
  {
    image: "/images/instagram/post-4.jpg",
    username: "@primalactsm",
    postUrl: "https://www.instagram.com/primalactsm/p/DX01P39CPDK/",
  },
];

function SocialIconsIllustration() {
  return (
    <div className="relative h-[210px] w-[280px] sm:h-[245px] sm:w-[306px]">
      <div className="absolute left-[10px] top-[20px] -rotate-[10deg] rounded-10 bg-[#FF0000] p-2 shadow-md">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="white">
          <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2 31.2 31.2 0 000 12a31.2 31.2 0 00.5 5.8A3 3 0 002.6 20C4.5 20.4 12 20.4 12 20.4s7.5 0 9.4-.5a3 3 0 002.1-2.1 31.2 31.2 0 00.5-5.8 31.2 31.2 0 00-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z" />
        </svg>
      </div>

      <div className="absolute left-[110px] top-[10px] rotate-[5deg] rounded-10 bg-[#1877F2] p-2 shadow-md">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="white">
          <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07z" />
        </svg>
      </div>

      <div className="absolute left-[200px] top-[60px] -rotate-[5deg] rounded-10 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-2 shadow-md">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="white">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      </div>

      <div className="absolute left-[150px] top-[130px] rotate-[8deg] rounded-10 bg-black p-2 shadow-md sm:left-[230px]">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="white">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.74a4.85 4.85 0 01-1.01-.05z" />
        </svg>
      </div>
    </div>
  );
}

export default function SocialFeed() {
  return (
    <section className="w-full bg-white py-70">
      <div className="mx-auto max-w-1200 container-px">
        <div className="mb-50 flex flex-col items-center md:flex-row">
          <div className="mb-8 w-full md:mb-0 md:w-7/12">
            <h2 className="font-dirty text-[36px] leading-none text-green-dark sm:text-45 md:text-60">
              Urmărește-ne
            </h2>
            <p className="mt-2 font-open text-[18px] leading-tight text-orange sm:text-[22px] md:text-[30px]">
              pe{" "}
              <a
                href="https://www.facebook.com/profile.php?id=61573241979396"
                target="_blank"
                rel="noreferrer"
                className="text-orange hover:underline"
              >
                Facebook
              </a>{" "}
              și{" "}
              <a
                href="https://www.instagram.com/primalactsm/"
                target="_blank"
                rel="noreferrer"
                className="text-orange hover:underline"
              >
                Instagram
              </a>
              !
            </p>
          </div>

          <div className="flex w-full justify-center md:w-5/12 md:justify-end">
            <SocialIconsIllustration />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {instagramPosts.map((post) => (
            <InstagramCard key={post.image} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
