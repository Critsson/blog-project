import styles from "../styles/About.module.css"
import aboutImage from "../public/images/about.png"
import Image from "next/image"
import headshot from "../public/images/headshot.svg"
import Link from "next/link"
import ellipse5 from "../public/images/ellipse_5.png"
import ellipse6 from "../public/images/ellipse_6.svg"
import ellipse7 from "../public/images/ellipse_7.svg"
import React from "react"
import Head from "next/head"

export default function About() {

    const [herePressed, setHerePressed] = React.useState(false)


    return (
        <div>
            <Head>
                <title>About Me</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div className={styles.header}>
                <div className={styles.about_container}>
                    <Image src={aboutImage} alt="About Page" width="500" height="98.8" />
                </div>
            </div>
            <div className={styles.first_container}>
                <div className={styles.headshot}>
                    <Image src={headshot} alt="Picture of Gloria" width="600%" height="460%" />
                </div>
                <div className={styles.first_paragraph}>
                    <div className={styles.first_line}>
                        <h1>H</h1>
                        <p>ello! My name is Gloria, known affectionately as &quot;Glostar&quot; by friends and family.</p>
                    </div>
                    <p>As a first-year medical student, I decided to start blogging as a method of creative, emotional, and intellectual expression.</p>
                    <p>Through my writing, I hope to inspire and encourage others, look back</p>
                </div>
            </div>
            <p className={styles.second_paragraph}>fondly on my life&apos;s chronicles, and be transparent about the humanity behind some of society&apos;s greatest heroes</p>
            <p className={styles.third_paragraph}>Some of the topics I write about include my hobbies:</p>
            <div className={styles.ellipse_container}>
                <Link href="/blog/fitnessandhealth">
                    <div className={styles.ellipse_5}>
                        <Image src={ellipse5} className={styles.ellipse5} alt="Picture of Gloria" width="500" height="500" />
                    </div>
                </Link>
                <Link href="/blog/creativeworks">
                    <div className={styles.ellipse_6}>
                        <Image src={ellipse6} className={styles.ellipse6} alt="Crochet" width="500" height="500" />
                    </div>
                </Link>
                <Link href="/blog/entertainment">
                    <div className={styles.ellipse_7}>
                        <Image src={ellipse7} className={styles.ellipse7} alt="Anime and Manga" width="500" height="500" />
                    </div>
                </Link>
            </div>
            <div className={styles.banner_container}>
                <div className={styles.small_banner_5}>
                    Fitness
                </div>
                <div className={styles.small_banner_6}>
                    Crochet
                </div>
                <div className={styles.small_banner_7}>
                    Anime/Manga
                </div>
            </div>
            <p className={styles.fourth_paragraph}>Additionally, I&apos;ll sometimes talk about what it&apos;s like to be a medical student, my journey, and any tips/advice I may have!</p>
            <div className={styles.last_container}>
                <p className={styles.fifth_paragraph}>If you have any specific topics or questions you&apos;d like me to answer in a post, make your submission</p>
                <p onClick={() => setHerePressed(true)} className={styles.here}>here!</p>
            </div>
            {herePressed &&
                <div className={styles.dear_container}>
                    <h2>“Dear Glostar...”</h2>
                    <form name="submissions_about" method="post" data-netlify="true" action="/about">
                        <input type="hidden" name="form-name" value="submissions_about" />
                        <div>
                            <input className={styles.name_text} type="text" placeholder='Name...' name="name"/>
                            <div className={styles.checkbox_container}>
                                <input className={styles.checkbox} type="checkbox" id="check" />
                                <label className={styles.checkbox_label} htmlFor="check">Check to remain anonymous</label>
                            </div>
                            <textarea className={styles.text_area} placeholder='Message...' name="description"/>
                            <button className={styles.text_area_button}>Submit</button>
                        </div>
                    </form>
                </div>
            }
        </div>
    )
}