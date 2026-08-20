"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Profile photo with a graceful fallback.
 *
 * The old avatar hotlinked a signed LinkedIn CDN URL, which expired and now
 * returns 403. Drop a photo at `public/profile.jpg` and it is used
 * automatically; until then this renders a monogram instead of a broken image.
 */
export default function Avatar({ src = "/profile.jpg", initials = "CM" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-700 text-5xl font-semibold text-white shadow-lg"
        aria-label="Chris Melendez"
        role="img"
      >
        {initials}
      </div>
    );
  }

  return (
    <Image
      className="h-40 w-40 rounded-full object-cover shadow-lg"
      src={src}
      alt="Chris Melendez"
      width={160}
      height={160}
      priority
      onError={() => setFailed(true)}
    />
  );
}
