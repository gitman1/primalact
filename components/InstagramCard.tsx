"use client";

type InstagramPost = {
  image: string;
  username: string;
  postUrl: string;
};

export default function InstagramCard({ post }: { post: InstagramPost }) {
  return (
    <div
      role="link"
      tabIndex={0}
      onClick={() => window.open(post.postUrl, "_blank", "noreferrer")}
      onKeyDown={(e) => {
        if (e.key === "Enter") window.open(post.postUrl, "_blank", "noreferrer");
      }}
      className="cursor-pointer overflow-hidden rounded-[15px] border border-beige-700 transition-shadow duration-300 hover:shadow-lg"
    >
      <div
        className="h-[180px] w-full sm:h-[268px]"
        style={{
          backgroundImage: `url(${post.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="flex items-center justify-between px-15 py-15">
        <div className="flex min-w-0 items-center gap-2">
          <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-green-mountain font-dirty text-14 text-white">
            P
          </span>
          <span className="truncate font-open text-[12px] text-brown-dark">
            {post.username}
          </span>
          <span className="text-[12px] text-brown-500">●</span>
          <a
            href={`https://instagram.com/${post.username.replace("@", "")}`}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 font-open text-[12px] text-green-base hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            Follow
          </a>
        </div>

        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          className="shrink-0 text-brown-dark"
        >
          <rect
            x="2"
            y="2"
            width="20"
            height="20"
            rx="5"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
