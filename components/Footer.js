import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made for students by students
        Copyright © 2022. All Rights Reserved.
          <img src="https://github.com/MrKrishnaAgarwal/next-netlify-starter/blob/main/pages/student%20street.jpg" alt="Student Street Logo" className={styles.logo} />
      </footer>
    </>
  )
}
