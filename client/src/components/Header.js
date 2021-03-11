import React from 'react'
// import logo from './Logo.jpg'
import { FaSearch } from 'react-icons/fa'
import styles from '.././styles/Header.js.css'

const Header = () => {
    return (
        <header className={styles.header}>
            {/* <img src={logo} alt="Logo" style={styles.logoStyle}/> */}
            <i><FaSearch/></i>
            <input style={styles.inputStyle} placeholder="Search..."></input>
        </header>
    )
}

export default Header
