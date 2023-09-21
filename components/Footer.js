import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made for students by students
        Copyright © 2022. All Rights Reserved.
          <br> </br>
          <img src="https://media.discordapp.net/attachments/1048479953592795156/1154312414494478376/student_street.jpg?width=802&height=580" alt="Student Street Logo" className={styles.logo} />
      </footer>
    </>
  )
}
