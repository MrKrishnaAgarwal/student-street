import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img
        src="https://media.discordapp.net/attachments/1048479953592795156/1154312414494478376/student_street.jpg?width=802&height=580"
        alt="Student Street Logo"
        className={styles.logo}
      />
      <div>
        Student Street Logo
      </div>
      <div>
        Made for students by students
      </div>
      <div>
        Copyright © 2023 | Krishna Agarwal | All Rights Reserved
      </div>
    </footer>
  );
}
