import Link from "next/link"
import Head from "next/head"
import Image from "next/image"
import styles from "../../styles/Admin.module.css"
import logo from "../../public/images/glorious_diaries_header.png"
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import BookRoundedIcon from '@mui/icons-material/BookRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { useSession, signIn, signOut } from "next-auth/react"
import React from "react"

export default function AdminHome() {

    const { status, data: session } = useSession();

    React.useEffect(() => {
        if (status === "unauthenticated") {
            signIn();
        }
    })

    if (status !== "authenticated") {
        return <div></div>
    }


    return (
        <div>
            <Head>
                <title>Admin Home</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div className={styles.main_container}>
                <div className={styles.side_nav_container}>
                    <div className={styles.logo_container}>
                        <Link href="/">
                            <Image src={logo} alt="Glorious Diaries Logo" />
                        </Link>
                    </div>
                    <Link href="/admin">
                        <div className={styles.nav_link_container}>
                            <DashboardRoundedIcon sx={{ fontSize: "170%" }} />
                            <p>Dashboard</p>
                        </div>
                    </Link>
                    <Link href="/admin/inbox">
                        <div className={styles.nav_link_container}>
                            <CommentRoundedIcon sx={{ fontSize: "170%" }} />
                            <p>Inbox</p>
                        </div>
                    </Link>
                    <Link href="/admin/posts">
                        <div className={styles.nav_link_container}>
                            <BookRoundedIcon sx={{ fontSize: "170%" }} />
                            <p>My Posts</p>
                        </div>
                    </Link>
                    <Link href="/admin/analytics">
                        <div className={styles.nav_link_container}>
                            <AnalyticsRoundedIcon sx={{ fontSize: "170%" }} />
                            <p>Analytics</p>
                        </div>
                    </Link>
                    <p className={styles.designed_by}>Designed &amp; Built by Chris Gao</p>
                    <p className={styles.version}>Version 1.0</p>
                    <button className={styles.logout_button} onClick={()=>signOut({callbackUrl: "/"})}><LogoutRoundedIcon sx={{fontSize: "160%"}} />Log Out</button>
                </div>
                <div className={styles.dashboard_container}>
                </div>
            </div>
        </div>
    )
}

AdminHome.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
        </>
    )
}