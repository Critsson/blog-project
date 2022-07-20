import styles from "../styles/About.module.css"
import aboutImage from "../public/images/about.png"
import Image from "next/image"
import headshot from "../public/images/headshot.svg"

export default function about() {
    return (
        <div>
            <div className={styles.header}>
                <div className={styles.about_container}>
                    <Image src={aboutImage} alt="About Page" width="500" height="98.8" />
                </div>
            </div>
            <div className={styles.first_container}>
                <div className={styles.headshot}>
                    <Image src={headshot} alt="Picture of Gloria" width="600%" height="460%"/>
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
                <div className={styles.small_banner_5}>
                    Fitness
                </div>
                <div className={styles.small_banner_6}>
                    Crochet
                </div>
                <div className={styles.small_banner_7}>
                    Anime/Manga
                </div>
                <div className={styles.ellipse_5}>
                </div>
                <div className={styles.ellipse_6}>
                </div>
                <div className={styles.ellipse_7}>
                </div>
            </div>
        </div>
    )
}