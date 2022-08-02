import Head from "next/head"
import homeStyles from "../../styles/Home.module.css"
import styles from "../../styles/BlogPage.module.css"
import gloriaImage from "../../public/images/ellipse_gloria.svg"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import leftArrow from "../../public/images/arrow_left.svg"
import rightArrow from "../../public/images/arrow_right.svg"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

export default function CreativeWorks({ postsArr }) {

    const [postCount, setPostCount] = React.useState(0);
    const [checked, setChecked] = React.useState(false);
    const [inputValue, setInputValue] = React.useState("");
    const parsedPosts = JSON.parse(postsArr);

    const handleCheck = () => {
        setChecked((prevState) => !prevState)
        if (checked === false) {
            setInputValue("");
        }
    };

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }


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

    const parsedPostsArr = parsedPosts.map((post) => {

        let first30 = post.content.split("*").join("").split("#").join("").split(">").join("").split(" ").slice(0, 30).join(" ") + "...";

        return (
            <div key={post.slug} className={homeStyles.latest_post}>
                <div className={homeStyles.placeholder_image}>
                    <Image src={post.data.thumbnail} alt="Post Thumbnail" height="350" width="350" />
                </div>
                <div className={homeStyles.post_container}>
                    <div>
                        <p>{post.data.date.slice(0, 10)}</p>
                        <p>|</p>
                        <p> _ comments</p>
                    </div>
                    <h3>{post.data.title}</h3>
                    <p>{first30}</p>
                    <Link href={`/blog/${post.slug}`}>
                        <button>Read more</button>
                    </Link>
                </div>
            </div>
        )
    })

    return (
        <div>
            <Head>
                <title>Creative Works</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div className={homeStyles.email_container}>
                <div className={homeStyles.email_words_container}>
                    <h1>K</h1>
                    <h3>EEP UP WITH YOUR FAVOURITE CATEGORIES AND THE LATEST NEWS!</h3>
                </div>
                <div className={homeStyles.email_input_container}>
                    <form name="latest_news" method="post" data-netlify="true" action="/success">
                        <input type="hidden" name="form-name" value="latest_news" />
                        <input type="email" placeholder='Your email...' name="email" />
                        <button>Let&apos;s go!</button>
                    </form>
                </div>
            </div>
            <div className={styles.main_container}>
                <div className={styles.post_container}>
                    {parsedPostsArr}
                </div>
                <div className={homeStyles.side_container}>
                    <div className={homeStyles.side_gloria}>
                        <div>
                            <Image src={gloriaImage} alt="Photo of me" width="250%" height="250%" />
                        </div>
                        <p>Hi there! I’m Gloria, aka “Glostar.” As a busy student in this digital age, my hobbies have been life-lines in a sea of responsibilities.
                            Together, let’s learn to live one day at a time.</p>
                        <Link href="/about">
                            <h3>GET TO KNOW ME </h3>
                        </Link>
                        <hr className={homeStyles.side_divider}></hr>
                    </div>
                    <div className={homeStyles.popular_posts}>
                        <h2>Popular Posts</h2>
                        <div className={homeStyles.slideshow}>
                            <div onClick={decreasePreview} className={homeStyles.arrow}>
                                <Image src={leftArrow} alt="Left Arrow" width="100%" height="100%" />
                            </div>
                            <div className={homeStyles.preview}>
                            </div>
                            <div onClick={increasePreview} className={homeStyles.arrow}>
                                <Image src={rightArrow} alt="Right Arrow" width="100%" height="100%" />
                            </div>
                        </div>
                        <div className={homeStyles.date_posted}>
                            <p>Date posted </p>
                            <p>|</p>
                            <p> _ comments</p>
                        </div>
                        <h3>Title of Post</h3>
                        <div className={homeStyles.dot_container}>
                            <div className={postCount === 0 ? homeStyles.dot_selected : homeStyles.dot_unselected}>
                            </div>
                            <div className={postCount === 1 ? homeStyles.dot_selected : homeStyles.dot_unselected}>
                            </div>
                            <div className={postCount === 2 ? homeStyles.dot_selected : homeStyles.dot_unselected}>
                            </div>
                            <div className={postCount === 3 ? homeStyles.dot_selected : homeStyles.dot_unselected}>
                            </div>
                            <div className={postCount === 4 ? homeStyles.dot_selected : homeStyles.dot_unselected}>
                            </div>
                        </div>
                        <hr className={homeStyles.side_divider}></hr>
                    </div>
                    <div className={homeStyles.dear_container}>
                        <h2>“Dear Glostar...”</h2>
                        <p>Have a topic or question you&apos;d like me to post about? Send a submission below!</p>
                        <form name="submissions" method="post" data-netlify="true" action="/success">
                            <input type="hidden" name="form-name" value="submissions" />
                            <div>
                                {checked === false ? <input onChange={(e) => handleChange(e)} className={homeStyles.name_text} type="text" placeholder='Name...' name="name" value={inputValue} /> :
                                    <input className={homeStyles.name_text} type="text" placeholder='Name...' name="name" value="Anonymous" disabled="disabled" />}
                                <div className={homeStyles.checkbox_container}>
                                    <input className={homeStyles.checkbox} type="checkbox" id="check" onChange={handleCheck} checked={checked} />
                                    <label className={homeStyles.checkbox_label} htmlFor="check">Check to remain anonymous</label>
                                </div>
                                <textarea className={homeStyles.text_area} placeholder='Message...' name="description" />
                                <button className={homeStyles.text_area_button}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function getStaticProps() {

    const fileArr = fs.readdirSync(path.join("posts")).reverse();
    const postsArr = [];

    for (let i = 0; i < fileArr.length; i++) {
        let markdownData = fs.readFileSync(path.join("posts", fileArr[i]), "utf-8")
        let { data, content } = matter(markdownData)

        if (data.tags.includes("creativeworks")) {
            const slug = fileArr[i].replace(".md", "")
            postsArr.push({ data, content, slug })
        }
    }

    return {
        props: {
            postsArr: JSON.stringify(postsArr)
        }
    }

}