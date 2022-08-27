import React from 'react'
import styles from '../styles/Footer.module.css'
import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_content}>
        <ul className={styles.footer_links_ul}>
            <li><BsGithub /></li>
            <li><BsLinkedin /></li>
            <li><SiGmail /></li>
        </ul>
        <p className={styles.footer_copyright}>@ 2022 Sean Chester</p>
    </div>
    </div>
    
  )
}

export default Footer