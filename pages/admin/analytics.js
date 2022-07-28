import adminStyles from "../../styles/Admin.module.css"
import Link from "next/link"
import Image from "next/image"
import logo from "../../public/images/glorious_diaries_header.png"
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import BookRoundedIcon from '@mui/icons-material/BookRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import ModeRoundedIcon from '@mui/icons-material/ModeRounded';
import { useSession, signIn, signOut } from "next-auth/react"
import React from "react"
import Head from "next/head"

export default function AdminAnalytics() {

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
                <title>Analytics</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div className={adminStyles.main_container}>
                <div className={adminStyles.side_nav_container}>
                    <div className={adminStyles.logo_container}>
                        <Link href="/">
                            <Image src={logo} alt="Glorious Diaries Logo" />
                        </Link>
                    </div>
                    <Link href="/admin">
                        <div className={adminStyles.nav_link_container}>
                            <DashboardRoundedIcon sx={{ fontSize: "170%" }} />
                            <p>Dashboard</p>
                        </div>
                    </Link>
                    <Link href="/admin/inbox">
                        <div className={adminStyles.nav_link_container}>
                            <CommentRoundedIcon sx={{ fontSize: "170%" }} />
                            <p>Inbox</p>
                        </div>
                    </Link>
                    <Link href="/admin/posts">
                        <div className={adminStyles.nav_link_container}>
                            <BookRoundedIcon sx={{ fontSize: "170%" }} />
                            <p>My Posts</p>
                        </div>
                    </Link>
                    <Link href="/admin/drafts">
                        <div className={adminStyles.nav_link_container}>
                            <ModeRoundedIcon sx={{ fontSize: "170%" }} />
                            <p>My Drafts</p>
                        </div>
                    </Link>
                    <Link href="/admin/analytics">
                        <div className={adminStyles.nav_link_container}>
                            <AnalyticsRoundedIcon sx={{ fontSize: "170%" }} />
                            <p>Analytics</p>
                        </div>
                    </Link>
                    <p className={adminStyles.designed_by}>Designed &amp; Built by Chris Gao</p>
                    <p className={adminStyles.version}>Version 1.0</p>
                    <button className={adminStyles.logout_button} onClick={()=>signOut({callbackUrl: "/"})}><LogoutRoundedIcon sx={{fontSize: "160%"}} />Log Out</button>
                </div>
                <div className={adminStyles.dashboard_container}>
                </div>
            </div>
        </div>
    )
}


AdminAnalytics.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
        </>
    )
}