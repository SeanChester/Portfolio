import Link from 'next/link'
import {useState} from 'react'
import styles from '../styles/Navbar.module.css'
import {BsFillBrightnessHighFill, BsFillMoonFill} from 'react-icons/bs'


const Navigation = ({darkMode, handleBrightness}) => {

  return (
    <nav className={styles.container}>
    <div className={styles.space_maker}></div>
      <ul className={styles.nav_links_ul}>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/Projects"><a>Projects</a></Link></li>
          <li><Link href="/About"><a>About</a></Link></li>
          <li><Link href="/Contact"><a>Contact</a></Link></li>
          <li>{darkMode ? <BsFillBrightnessHighFill className={styles.brightness_icon} onClick={handleBrightness} /> : <BsFillMoonFill className={styles.brightness_icon} onClick={handleBrightness}/> }</li> 
      </ul>
  </nav>
  )
}

export default Navigation