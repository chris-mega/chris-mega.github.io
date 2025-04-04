import Layout from "./components/Layout";

export const metadata = {
  title: "Chris Melendez",
  description: "Welcome to my website!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
