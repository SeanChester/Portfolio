import Link from 'next/link'
import React, { useState } from 'react'
import { BsFillBrightnessHighFill, BsFillMoonFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import styles from '../styles/Navbar.module.css'


const MobileNav = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false)
    const [darkMode, setDarkMode] = useState(false)
  return (
    <nav className={styles.mobileNav_container}>
        <ul className={styles.mobileNavIcons}>
        <li>{darkMode ? <BsFillBrightnessHighFill className={styles.brightness_icon}/> : <BsFillMoonFill className={styles.brightness_icon}/> }</li>
        <li><GiHamburgerMenu className={styles.hamburger} onClick={() => setHamburgerOpen(!hamburgerOpen)}/></li>
        </ul>
        {hamburgerOpen && (
            <ul className={styles.nav_links_ul}>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/Projects"><a>Projects</a></Link></li>
            <li><Link href="/About"><a>About</a></Link></li>
            <li><Link href="/Contact"><a>Contact</a></Link></li>
        </ul>
        )}
    </nav>
  )
}

export default MobileNav