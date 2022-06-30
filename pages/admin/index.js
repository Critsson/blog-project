import Link from "next/link"
import Image from "next/image"
import styles from "../../styles/Admin.module.css"
import headerLogo from "../../public/images/glorious_diaries_header.png"

export default function AdminHome() {
    return (
        <div>
            <div className={styles.header_container}>
                <Link href="/">
                    <Image className={styles.admin_image} src={headerLogo} alt="Glorious Diaries Logo" width={450} height={100} />
                </Link>
            </div>
            <div className={styles.main_container}>

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