import Head from 'next/head'
import Image from 'next/image'
import ellipse1 from "../public/images/ellipse_1.png"
import ellipse2 from "../public/images/ellipse_2.png"
import welcomeImage from "../public/images/welcome.svg"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.center_banner}>
          <Image src={welcomeImage} alt="Welcome to the Blog" width={350} height={100} />
          <p>Whatever is your reason for stopping by, I hope you find what you&apos;re looking for and enjoy your stay</p>
          <div>
            <Image src={ellipse1} alt="Creative Works" width={200} height={200} />
            <Image src={ellipse2} alt="Entertainment" width={200} height={200} />
          </div>
        </div>
      </div>
    </div>
  )
}
