type VideoHeroProps = {
  videoSrc?: string;
  posterSrc: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
};

export default function VideoHero({
  videoSrc,
  posterSrc,
  eyebrow,
  title,
  subtitle,
  ctaText,
  ctaHref,
}: VideoHeroProps) {
  return (
    <section className="relative min-h-[730px] w-full overflow-hidden">
      {videoSrc ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={videoSrc}
          poster={posterSrc}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={posterSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-green-mountain/80 via-green-mountain/25 to-transparent" />

      <div className="relative z-10 flex min-h-[730px] items-center">
        <div className="mx-auto flex w-full max-w-1200 items-center px-30">
          <div className="max-w-768 animate-fadeIn">
            {eyebrow && (
              <span className="mb-15 inline-block rounded-10 bg-orange px-4 py-1 font-open text-14 font-bold uppercase tracking-widest text-brown-dark">
                {eyebrow}
              </span>
            )}
            <h1 className="hero-title">{title}</h1>
            {subtitle && (
              <p className="mt-15 max-w-968 font-open text-18 text-white">
                {subtitle}
              </p>
            )}
            {ctaText && ctaHref && (
              <a href={ctaHref} className="btn mt-30">
                {ctaText}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
