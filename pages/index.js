import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import welcomeImage from "../public/images/welcome.svg"
import styles from '../styles/Home.module.css'

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.center_banner}>
          <Image src={welcomeImage} alt="Welcome to the Blog" width={350} height={100} />
          <div className={styles.text_container}>
            <p>Whatever is your reason for stopping by, I hope you find what you&apos;re looking for and enjoy your stay</p>
            <p className={styles.heart_emoji}>♡</p>
          </div>
          <div className={styles.ellipse_container}>
            <Link href="/blog/creativeworks">
              <div className={styles.ellipse1}>
                <h1 className={styles.ellipse_text}>Creative Works</h1>
              </div>
            </Link>
            <Link href="/blog/entertainment">
              <div className={styles.ellipse2}>
                <h1 className={styles.ellipse_text}>Entertainment</h1>
              </div>
            </Link>
            <Link href="/blog/fitnessandhealth">
              <div className={styles.ellipse3}>
                <h1 className={styles.ellipse_text}>Fitness &amp; Health</h1>
              </div>
            </Link>
            <Link href="/blog/medicalschool">
              <div className={styles.ellipse4}>
                <h1 className={styles.ellipse_text}>Medical School</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.email_container}>
        <div className={styles.email_words_container}>
          <i><h1>K</h1></i>
          <div className={styles.email_smallwords_container}>
            <i><h2>EEP UP WITH YOUR FAVORITE CATEGORIES</h2></i>
            <i><h2>AND THE LATEST NEWS!</h2></i>
          </div>
        </div>
        <div className={styles.email_input_container}>
          <input type="text" placeholder="Your email..."></input>
          <button>Let&apos;s go!</button>
        </div>
      </div>
    </div>
  )
}

// export async function getStaticProps() {
//   const response = await fetch("http://localhost:3000/api/blog/posts")
//   const data = await response.json()

//   return {
//     props: {
//       posts: data
//     }
//   }
// }