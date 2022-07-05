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
                <div className={styles.logo_footer}>
                    <Image src={logoFooter} alt="Glorious Diaries Footer Logo" width={470} height={100} />
                </div>
                <div className={styles.navigate_container}>
                    <h1>navigate.</h1>
                    <div className={styles.links_container}>
                        <div>
                            <Link href="/">
                                <h2>Home &gt;</h2>
                            </Link>
                            <Link href="/about">
                                <h2>About &gt;</h2>
                            </Link>
                            <Link href="/team">
                                <h2>Our Team &gt;</h2>
                            </Link>
                            <Link href="/shop">
                                <h2>Shop &gt;</h2>
                            </Link>
                            <Link href="/commissions">
                                <h2>Commissions &gt;</h2>
                            </Link>
                        </div>
                        <div>
                            <h2>Journey to 1000 Trails &gt;</h2>
                            <h2>Medlife &gt;</h2>
                            <h2>To read/watch &gt;</h2>
                        </div>
                    </div>
                </div>
                <div className={styles.ama_container}>
                    <h1>ask me anything.</h1>
                    <div className={styles.ama_info}>
                        <Image src={mailIcon} alt="Mail Icon" />
                        <h3>QandA@gloriousdiaries.com</h3>
                    </div>
                    <div className={styles.ama_info}>
                        <Image src={phoneIcon} alt="Phone Icon" />
                        <h3>+1 (###) - ### - ####</h3>
                    </div>
                </div>
                <div>
                    <h1>let&apos;s connect.</h1>
                    <div className={styles.connect_icons}>
                        <div className={styles.connect_icon}>
                            <a target="_blank" href="https://www.instagram.com/glostar_ma/" rel="noopener noreferrer">
                                <Image src={instaLogo} alt="Instagram Logo" />
                            </a>
                        </div>
                        <div className={styles.connect_icon}>
                            <a target="_blank" href="https://www.facebook.com/xixi.ma.14" rel="noopener noreferrer">
                                <Image src={facebookLogo} alt="Facebook Logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}