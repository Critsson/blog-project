import contactImage from "../public/images/contact.png"
import styles from "../styles/Contact.module.css"
import Image from "next/image"
import Head from "next/head"

export default function Contact() {
    return (
        <div>
            <Head>
                <title>Contact</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div className={styles.header}>
                <div className={styles.about_container}>
                    <Image src={contactImage} alt="Contact Me Page" width="500" height="98.8" />
                </div>
            </div>
            <p className={styles.first_paragraph}>
                Thank you for stopping by! If you would like to get in touch, please email me at QandA@gloriousdiaries.com or text me at +1(###) - ### - #### (message and data rates
                may apply). Alternatively, please fill out this form:
            </p>
            <form name="contact" method="post" data-netlify="true" action="/contact">
                <input type="hidden" name="form-name" value="contact" />
                <div className={styles.input_container}>
                    <div className={styles.label}>
                        <p>Name</p>
                        <p className={styles.asterisk}>*</p>
                    </div>
                    <input className={styles.text_input} type="text" name="name" />
                </div>
                <div className={styles.input_container}>
                    <div className={styles.label}>
                        <p>Email</p>
                        <p className={styles.asterisk}>*</p>
                    </div>
                    <input className={styles.text_input} type="email" name="email" />
                </div>
                <div className={styles.textarea_container}>
                    <div className={styles.label}>
                        <p>Message</p>
                        <p className={styles.asterisk}>*</p>
                    </div>
                    <textarea className={styles.textarea_input} name="description"/>
                </div>
                <button className={styles.submit_button}>Submit</button>
            </form>
        </div>
    )
}