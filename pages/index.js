import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import welcomeImage from "../public/images/welcome.svg"
import gloriaImage from "../public/images/ellipse_gloria.svg"
import styles from '../styles/Home.module.css'

export default function Home({ posts }) {

  const latestPostsArray = [];

  for (let i = 0; i < 4; i++) {
    latestPostsArray.push(<div className={styles.latest_post}>
      <div className={styles.placeholder_image}></div>
      <div className={styles.post_container}>
        <div>
          <p>Date posted </p>
          <p>|</p>
          <p> _ comments</p>
        </div>
        <h3>Title of Post</h3>
        <p>Post excerpt (first 50 words) : blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah...</p>
        <button>Read more</button>
      </div>
    </div>)
  }

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.center_banner}>
            <Image src={welcomeImage} alt="Welcome to the Blog" width={300} height={70} />
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
            <h1>K</h1>
            <h3>EEP UP WITH YOUR FAVOURITE CATEGORIES AND THE LATEST NEWS!</h3>
          </div>
          <div className={styles.email_input_container}>
            <input type="text" placeholder='Your email...' />
            <button>Let&apos;s go!</button>
          </div>
        </div>
        <div className={styles.main_container}>
          <div className={styles.posts_container}>
            <div className={styles.latest_posts_title}>
              <div></div>
              <h2>LATEST POSTS</h2>
            </div>
            {latestPostsArray}
          </div>
          <div className={styles.side_container}>
            <div className={styles.side_gloria}>
              <Image src={gloriaImage} alt="Photo of me" width={250} height={250} />
              <p>Hi there! I’m Gloria, aka “Glostar.” As a busy student in this digital age, my hobbies have been life-lines in a sea of responsibilities. 
                Together, let’s learn to live one day at a time.</p>
              <h3>GET TO KNOW ME </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const pool = require("../database/db.js")
  const getAllBlogPosts = await pool.query("SELECT * FROM posts;")
  const postsArr = [];

  if (getAllBlogPosts.rows.length >= 4) {
    for (let i = 0; i < 4; i++) {
      postsArr.push(getAllBlogPosts.rows.pop())
    }
  } else {
    getAllBlogPosts.rows.map((post) => postsArr.unshift(post))
  }

  console.log(postsArr)

  return {
    props: {
      posts: postsArr
    }
  }
}
