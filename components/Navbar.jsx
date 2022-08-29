import {useState} from 'react'
import Navigation from './Navigation'
import MobileNav from './MobileNav'

 const Navbar = () => {

  const [darkMode, setDarkMode] = useState(false)

   const handleBrightness = () => {
     setDarkMode(!darkMode)
   }

  return (
    <>
    <Navigation  handleBrightness={handleBrightness} darkMode={darkMode} setDarkMode={setDarkMode}/>
    <MobileNav handleBrightness={handleBrightness} darkMode={darkMode}/>
    </>
  )
}
export default Navbar
