import React from "react"
import styles from "../styles/Footer.module.css"
import Link from "next/link"
import Image from "next/image"
import mailIcon from "../public/images/mail_icon.svg"
import phoneIcon from "../public/images/phone_icon.svg"
import instaLogo from "../public/images/insta_logo.svg"
import facebookLogo from "../public/images/facebook_logo.svg"
import logoFooter from "../public/images/glorious_diaries_footer.png"

export default function Footer() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.logo_container}>
                    <Image src={logoFooter} alt="Glorious Diaries Footer Logo" />
                </div>
                <div className={styles.info_container}>
                    <div className={styles.navigate_container}>
                        <h1 className={styles.title}>navigate.</h1>
                        <div className={styles.links_container}>
                            <div>
                                <h3>Home &gt;</h3>
                                <h3>About &gt;</h3>
                                <h3>Our Team &gt;</h3>
                                <h3>Shop &gt;</h3>
                                <h3>Commissions &gt;</h3>
                            </div>
                            <div>
                                <h3>Journey to 1000 Trails &gt;</h3>
                                <h3>Medlife &gt;</h3>
                                <h3>To read/watch &gt;</h3>
                            </div>
                        </div>
                    </div>
                    <div className={styles.ama_container}>
                        <h1 className={styles.title}>ask me anything.</h1>
                        <div>
                            <div className={styles.ama_info}>
                                <div className={styles.ama_icon_container}>
                                    <Image src={mailIcon} alt="Mail Icon" width="100%" height="100%" />
                                </div>
                                <h3>QandA@gloriousdiaries.com</h3>
                            </div>
                            <div className={styles.ama_info}>
                                <div className={styles.ama_icon_container}>
                                    <Image src={phoneIcon} alt="Phone Icon" width="100%" height="100%" />
                                </div>
                                <h3>+1 (###) - ### - ####</h3>
                            </div>
                        </div>
                    </div>
                    <div className={styles.connect_container}>
                        <h1 className={styles.title}>let's connect.</h1>
                        <div className={styles.connect_icons}>
                            <div className={styles.ellipse}>
                                <div className={styles.icon}>
                                    <Image src={instaLogo} alt="Instagram Logo" width="100%" height="100%" />
                                </div>
                            </div>
                            <div className={styles.ellipse}>
                                <div className={styles.icon}>
                                    <Image src={facebookLogo} alt="Facebook Logo" width="100%" height="100%" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}