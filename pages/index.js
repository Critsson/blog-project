import Head from 'next/head'
import React from "react"
import Image from 'next/image'
import Link from "next/link"
import welcomeImage from "../public/images/welcome.svg"
import gloriaImage from "../public/images/ellipse_gloria.svg"
import leftArrow from "../public/images/arrow_left.svg"
import rightArrow from "../public/images/arrow_right.svg"
import styles from '../styles/Home.module.css'
import Script from "next/script"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

export default function Home({ posts }) {

  const latestPostsArray = [];
  const [postCount, setPostCount] = React.useState(0)
  const parsedPosts = JSON.parse(posts)

  const increasePreview = () => {
    if (postCount !== 4) {
      setPostCount((prevCount) => {
        const placeholder = prevCount;
        placeholder++;
        return placeholder;
      })
    } else {
      setPostCount(0)
    }
  }

  const decreasePreview = () => {
    if (postCount !== 0) {
      setPostCount((prevCount) => {
        const placeholder = prevCount;
        placeholder--;
        return placeholder;
      })
    } else {
      setPostCount(4)
    }
  }

  for (let i = 0; i < 4; i++) {

    let first30 = parsedPosts[i].content.split("*").join("").split("#").join("").split(">").join("").split(" ").slice(0,30).join(" ") + "...";

    latestPostsArray.push(<div key={i} className={styles.latest_post}>
      <div className={styles.placeholder_image}>
        <Image src={parsedPosts[i].data.thumbnail} alt="Post Thumbnail" height="350" width="350"/>
      </div>
      <div className={styles.post_container}>
        <div>
          <p>{parsedPosts[i].data.date.slice(0,10)}</p>
          <p>|</p>
          <p> _ comments</p>
        </div>
        <h3>{parsedPosts[i].data.title}</h3>
        <p>{first30}</p>
        <button>Read more</button>
      </div>
    </div>)
  }

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" defer/>
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
              <div>
                <Image src={gloriaImage} alt="Photo of me" width="250%" height="250%" />
              </div>
              <p>Hi there! I’m Gloria, aka “Glostar.” As a busy student in this digital age, my hobbies have been life-lines in a sea of responsibilities.
                Together, let’s learn to live one day at a time.</p>
              <Link href="/about">
                <h3>GET TO KNOW ME </h3>
              </Link>
              <hr className={styles.side_divider}></hr>
            </div>
            <div className={styles.popular_posts}>
              <h2>Popular Posts</h2>
              <div className={styles.slideshow}>
                <div onClick={decreasePreview} className={styles.arrow}>
                  <Image src={leftArrow} alt="Left Arrow" width="100%" height="100%" />
                </div>
                <div className={styles.preview}>
                </div>
                <div onClick={increasePreview} className={styles.arrow}>
                  <Image src={rightArrow} alt="Right Arrow" width="100%" height="100%" />
                </div>
              </div>
              <div className={styles.date_posted}>
                <p>Date posted </p>
                <p>|</p>
                <p> _ comments</p>
              </div>
              <h3>Title of Post</h3>
              <div className={styles.dot_container}>
                <div className={postCount === 0 ? styles.dot_selected : styles.dot_unselected}>
                </div>
                <div className={postCount === 1 ? styles.dot_selected : styles.dot_unselected}>
                </div>
                <div className={postCount === 2 ? styles.dot_selected : styles.dot_unselected}>
                </div>
                <div className={postCount === 3 ? styles.dot_selected : styles.dot_unselected}>
                </div>
                <div className={postCount === 4 ? styles.dot_selected : styles.dot_unselected}>
                </div>
              </div>
              <hr className={styles.side_divider}></hr>
            </div>
            <div className={styles.dear_container}>
              <h2>“Dear Glostar...”</h2>
              <p>Have a topic or question you&apos;d like me to post about? Send a submission below!</p>
              <div>
                <input className={styles.name_text} type="text" placeholder='Name...' />
                <div className={styles.checkbox_container}>
                  <input className={styles.checkbox} type="checkbox" id="check" />
                  <label className={styles.checkbox_label} htmlFor="check">Check to remain anonymous</label>
                </div>
                <textarea className={styles.text_area} placeholder='Message...' />
                <button className={styles.text_area_button}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Script id="netlify-identity">
          {
             `if (window.netlifyIdentity) {
              window.netlifyIdentity.on("init", user => {
                if (!user) {
                  window.netlifyIdentity.on("login", () => {
                    document.location.href = "/admin/";
                  });
                }
              });
            }`
          }
      </Script>
    </div>
  )
}

export function getStaticProps() {

  const fileArr = fs.readdirSync(path.join("posts")).reverse();
  const firstFour = [];

  for(let i=0; i<4; i++) {
    if(!fileArr[i]) {
      firstFour.push("empty")
      continue;
    }
    firstFour.push(fileArr[i])
  }

  const postsArr = firstFour.map((file) => {
    const slug = file.replace(".md", "")
    const markdownData = fs.readFileSync(path.join("posts", file), "utf-8")


    const {data, content} = matter(markdownData)
    return {
      slug,
      data,
      content
    }
  })

  return {
    props: {
      posts: JSON.stringify(postsArr)
    }
  }
}
