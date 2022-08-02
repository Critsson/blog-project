import styles from "../styles/Success.module.css"
import Link from "next/link"
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';

export default function Success() {
    return (
        <div className={styles.main_container}>
            <div className={styles.success_container}>
                <div className={styles.icon_container}>
                    <DoneRoundedIcon sx={{fontSize: "10vw"}} />
                </div>
                <h1>Success!</h1>
                <p className={styles.thanks}>
                    Thank you for your submission
                </p>
                <Link href="/">
                    <button className={styles.return_home}>
                        Continue
                    </button>
                </Link>
            </div>
        </div>
    )
}

Success.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
        </>
    )
}