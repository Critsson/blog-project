import '../styles/globals.css'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Head from "next/head"
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps }) {

  if (Component.getLayout) {
    return Component.getLayout(<SessionProvider><Component {...pageProps} /></SessionProvider>)
  }

  return (
    <>
      <SessionProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  )
}

export default MyApp
