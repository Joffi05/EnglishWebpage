import React from 'react'
import logo from '.././pngs/logo.png'
import { FaSearch } from 'react-icons/fa'
import styles from '.././styles/Header.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo} className="logo"/>
            <i className="input-group-prepend" ><FaSearch/></i>
            <input className={styles.input} placeholder="Search..."></input>
        </header>
    )
}

export default Header
