import styles from "../styles/Success.module.css"
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import { useRouter } from "next/router"

export default function Success() {

    const router = useRouter()

    return (
        <div className={styles.main_container}>
            <div className={styles.success_container}>
                <div className={styles.icon_container}>
                    <DoneRoundedIcon sx={{ fontSize: "10vw" }} />
                </div>
                <h1>Success!</h1>
                <p className={styles.thanks}>
                    Thank you for your submission
                </p>
                <button className={styles.return_home} onClick={() => router.back()}>
                    Continue
                </button>
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