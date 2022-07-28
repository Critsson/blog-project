import '../styles/globals.css'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Head from "next/head"
import Script from "next/script"

function MyApp({ Component, pageProps }) {

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <Script src="../netlifycms.js" />
    </>
  )
}

export default MyApp
