import React from 'react'
import logo from '.././pngs/logo.png'
import { FaSearch } from 'react-icons/fa'
import styles from '.././styles/Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="Logo"/>
            <i className="input-group-prepend" ><FaSearch/></i>
            <input className={styles.input} placeholder="Search..."></input>
        </header>
    )
}

export default Header
