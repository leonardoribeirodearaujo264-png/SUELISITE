/**
 * Instagram configuration for the "feed em destaque" section.
 *
 * Mobile shows a compact square gallery built from local thumbnails (fast, and
 * it looks like the Instagram grid). Desktop shows the first posts through
 * Instagram's official embed script, so the live post is always current.
 *
 * To feature different posts: copy the post link from Instagram, save its
 * thumbnail as `public/images/instagram/<code>.jpg` (square, 640×640) and add
 * an entry below.
 */
export const INSTAGRAM_HANDLE = "suelidias_advogada";
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;

/** Tagline published on the office's own Instagram profile. */
export const INSTAGRAM_TAGLINE = "Direito não é favor, é dignidade.";

export type InstagramPost = {
  /** Shortcode from the post URL. */
  code: string;
  /** "p" for a feed post, "reel" for a reel — decides the permalink shape. */
  kind: "p" | "reel";
  /** Square thumbnail stored in public/images/instagram/. */
  thumb: string;
  /** Short description, used as the image alt text. */
  alt: string;
};

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    code: "DYkxNseyzAQ",
    kind: "p",
    thumb: "/images/instagram/DYkxNseyzAQ.jpg",
    alt: "Publicação do escritório sobre direitos da pessoa com autismo",
  },
  {
    code: "DVwiTLDDpSI",
    kind: "p",
    thumb: "/images/instagram/DVwiTLDDpSI.jpg",
    alt: "Publicação do escritório sobre orientação jurídica às famílias",
  },
  {
    code: "DVedxwjEVex",
    kind: "p",
    thumb: "/images/instagram/DVedxwjEVex.jpg",
    alt: "Publicação do escritório sobre proteção da criança com TEA",
  },
  {
    code: "DcKEBq3SkXp",
    kind: "reel",
    thumb: "/images/instagram/DcKEBq3SkXp.jpg",
    alt: "Vídeo do escritório sobre direitos da pessoa com autismo",
  },
  {
    code: "Db_9ZBhSu2l",
    kind: "reel",
    thumb: "/images/instagram/Db_9ZBhSu2l.jpg",
    alt: "Vídeo do escritório com orientações sobre TEA",
  },
  {
    code: "Db_p4bUllfJ",
    kind: "p",
    thumb: "/images/instagram/Db_p4bUllfJ.jpg",
    alt: "Publicação do escritório com informações sobre BPC/LOAS",
  },
];

export function postUrl(post: InstagramPost): string {
  return `https://www.instagram.com/${post.kind}/${post.code}/`;
}

/** Posts rendered as full embeds on desktop. */
export const EMBEDDED_POSTS = INSTAGRAM_POSTS.slice(0, 3);
