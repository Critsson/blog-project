import React from "react"
import Image from "next/image"
import Link from "next/link"
import headerLogo from "../public/images/glorious_diaries_header.png"
import personIcon from "../public/images/icon_person.svg"
import menuArrow from "../public/images/menu_arrow.png"
import bagIcon from "../public/images/icon_bag.png"
import styles from "../styles/Header.module.css"

export default function Header() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.logo_container}>
                    <Link href="/">
                        <Image className={styles.header_logo} src={headerLogo} alt="Glorious Diaries Logo" width={470} height={100} />
                    </Link>
                </div>
                <div className={styles.links_container}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <div className={styles.blog_container}>
                        <Link href="/blog">
                            <a>Blog</a>
                        </Link>
                        <div className={styles.menu_arrow_container} style={{ paddingTop: "12px" }}>
                            <Image src={menuArrow} alt="Menu Arrow" width={19} height={19} />
                        </div>
                    </div>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </div>
                <div className={styles.icon_container}>
                    <Image src={personIcon} alt="Account Avatar" width={35} height={35} />
                    <Image src={bagIcon} alt="Shopping Bag" width={35} height={35} />
                </div>
            </div>
        </>
    )
}