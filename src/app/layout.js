import Layout from "./components/Layout";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://chris-mega.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Chris Melendez — Software Engineer",
  description:
    "Full stack developer and robotics mentor. Selected work, experience and competitions.",
  openGraph: {
    title: "Chris Melendez — Software Engineer",
    description:
      "Full stack developer and robotics mentor. Selected work, experience and competitions.",
    url: siteUrl,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
