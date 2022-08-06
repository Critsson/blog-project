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
import bottomLogo from "../../public/images/bottom_logo.png"
import Head from "next/head"


export default function BlogPage({ data, content, slug }) {

    const [postCount, setPostCount] = React.useState(0)
    const postData = JSON.parse(data)
    const [checked, setChecked] = React.useState(false);
    const [inputValue, setInputValue] = React.useState("");

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

    return (
        <>
            <Head>
                <title>{postData.title + " | " + "Glorious Diaries"}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div className={styles.main_container}>
                <div className={styles.post_container}>
                    <h1 className={styles.post_title}>{postData.title}</h1>
                    <div className={styles.post_date_container}>
                        <h3>By Glostar</h3>
                        <h3> | </h3>
                        <h3>{postData.date.slice(0, 10)}</h3>
                    </div>
                    <p className={styles.post_description}>{postData.description}</p>
                    <div className={styles.thumbnail_container}>
                        <div className={styles.thumbnail}>
                            <Image src={postData.thumbnail} alt="Post Thumbnail" width="1000" height="700" />
                        </div>
                    </div>
                    <div className={styles.body_container}>
                        {parse(marked(content))}
                    </div>
                    <p className={styles.bol}>Best of luck,</p>
                    <div className={styles.divider_container}>
                        <div className={styles.left_container}>
                            <div className={styles.top_line1}></div>
                            <div className={styles.bottom_line}></div>
                        </div>
                        <div className={styles.bottom_logo_container}>
                            <Image src={bottomLogo} alt="Glorious Diaries Logo" width="100%" height="100%" />
                        </div>
                        <div className={styles.right_container}>
                            <div className={styles.top_line2}></div>
                            <div className={styles.bottom_line}></div>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: "2vw" }} className={homeStyles.side_container}>
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
                                {checked === false ? <input onChange={(e) => handleChange(e)} className={homeStyles.name_text} type="text" placeholder='Name...' name="name" value={inputValue} required/> :
                                    <input className={homeStyles.name_text} type="text" placeholder='Name...' name="name" value="Anonymous" disabled="disabled" />}
                                <div className={homeStyles.checkbox_container}>
                                    <input className={homeStyles.checkbox} type="checkbox" id="check" onChange={handleCheck} checked={checked} />
                                    <label className={homeStyles.checkbox_label} htmlFor="check">Check to remain anonymous</label>
                                </div>
                                <textarea className={homeStyles.text_area} placeholder='Message...' name="description" required/>
                                <button className={homeStyles.text_area_button}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
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