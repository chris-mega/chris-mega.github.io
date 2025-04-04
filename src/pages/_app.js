import Layout from '../app/components/Layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout routing="/">
      <div className="mt-14 items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
        <Component {...pageProps} />
      </div>
    </Layout>
  )
}
