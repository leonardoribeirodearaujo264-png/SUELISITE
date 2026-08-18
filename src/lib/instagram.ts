/**
 * Instagram configuration for the "feed em destaque" section.
 *
 * The posts are rendered with Instagram's official embed script, so each card
 * always shows the live post — if the office edits or deletes it, the site
 * follows. To feature different posts, replace the permalinks below with the
 * ones copied from Instagram ("Copiar link" on the post).
 */
export const INSTAGRAM_HANDLE = "suelidias_advogada";
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;

/** Tagline published on the office's own Instagram profile. */
export const INSTAGRAM_TAGLINE = "Direito não é favor, é dignidade.";

/** Featured posts. Three keeps the section light; add more if you want. */
export const INSTAGRAM_POSTS: string[] = [
  "https://www.instagram.com/p/DYkxNseyzAQ/",
  "https://www.instagram.com/p/DVwiTLDDpSI/",
  "https://www.instagram.com/p/DVedxwjEVex/",
];
