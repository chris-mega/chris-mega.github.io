import Image from "next/image";

/**
 * Profile photo.
 *
 * The old avatar hotlinked a signed LinkedIn CDN URL, which expired and now
 * returns 403. This serves the copy committed at `public/me.jpg` instead, so
 * it can be optimized and can never expire out from under us.
 *
 * me.jpg is a full-body shot, so the face would be tiny in a 160px circle.
 * The scale + transform-origin below zoom in on the head without touching the
 * source file: the origin is picked so the face lands slightly above the
 * circle's centre. Adjust `--avatar-zoom` / the origin if you swap the photo.
 */
export default function Avatar() {
  return (
    <div className="relative h-40 w-40 overflow-hidden rounded-full shadow-lg ring-1 ring-black/5 dark:ring-white/10">
      <Image
        src="/me.jpg"
        alt="Chris Melendez"
        fill
        sizes="160px"
        priority
        className="object-cover"
      />
    </div>
  );
}
