import React from "react"
import Image from "next/image"
import Link from "next/link"
import headerLogo from "../public/images/glorious_diaries_header.png"
import styles from "../styles/Header.module.css"

export default function Header() {
    return (
        <div className={styles.container}>
            <Link href="/">
                <Image className={styles.header_image} src={headerLogo} alt="Glorious Diaries Logo" width={450} height={100} />
            </Link>
            <div className={styles.links_container} style={{ marginRight: "400px" }}>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/blog">
                    <a>Blog</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
                <Link href="/contact">
                    <a>Contact</a>
                </Link>
            </div>
            <h2>Test</h2>
        </div>
    )
}