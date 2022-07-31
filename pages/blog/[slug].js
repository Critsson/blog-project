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
import { marked } from "marked"
import parse from "html-react-parser"


export default function BlogPage({ data, content, slug }) {

    const [postCount, setPostCount] = React.useState(0)
    const postData = JSON.parse(data)


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

    console.log((marked(content)))

    return (
        <div className={styles.main_container}>
            <div className={styles.post_container}>
                <h1 className={styles.post_title}>{postData.title}</h1>
                <div className={styles.post_date_container}>
                    <h3>By Glostar</h3>
                    <h3> | </h3>
                    <h3>{postData.date.slice(0, 10)}</h3>
                </div>
                <div className={styles.thumbnail_container}>
                    <div className={styles.thumbnail}>
                        <Image src={postData.thumbnail} width="600" height="600" />
                    </div>
                </div>
                <div className={styles.body_container}>
                    {parse(marked(content))}
                </div>
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
                    <div>
                        <input className={homeStyles.name_text} type="text" placeholder='Name...' />
                        <div className={homeStyles.checkbox_container}>
                            <input className={homeStyles.checkbox} type="checkbox" id="check" />
                            <label className={homeStyles.checkbox_label} htmlFor="check">Check to remain anonymous</label>
                        </div>
                        <textarea className={homeStyles.text_area} placeholder='Message...' />
                        <button className={homeStyles.text_area_button}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function getStaticProps(context) {

    const { params } = context;
    const markdownData = fs.readFileSync(path.join("posts", params.slug + ".md"), "utf-8")
    const { data, content } = matter(markdownData)

    return {
        props: {
            data: JSON.stringify(data),
            content: content,
            slug: params.slug
        }
    }
}

export function getStaticPaths() {

    const fileArr = fs.readdirSync(path.join("posts"));
    const pathsArr = fileArr.map((file) => {
        return {
            params: { slug: file.replace(".md", "") }
        }
    })

    return {
        paths: pathsArr,
        fallback: false
    }
}