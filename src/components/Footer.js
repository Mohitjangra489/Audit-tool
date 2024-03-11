import React from 'react';
 import styles from '../styles/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <img src="/your-logo.png" alt="Company Logo" />
          <h1>Your Company</h1>
        </div>
        <div className={styles.footerLinks}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li> 
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className={styles.footerSocial}>
          <h4>Follow Us</h4>
          <div className={styles.socialIcons}>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/twitter-icon.png" alt="Twitter" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/facebook-icon.png" alt="Facebook" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin-icon.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer


