import Layout from '@/components/Layout'
import '@/styles/globals.scss'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname ==='/') return <Component {...pageProps} />

  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}
