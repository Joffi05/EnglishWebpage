import React from 'react'
import logo from '.././pngs/logo.png'
import styles from '.././styles/Header.module.css'

const Header = (props) => {

    const handleSubmit = (event) => {
        if(event.keyCode === 13) {
            props.setEnter(true)
        }
    }

    const handleChange = (event) => {
        props.setSearch(event.target.value)
    }

    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="Logo"/>
            <input className={styles.input} onChange={handleChange} onKeyDown={handleSubmit} placeholder="Search..."></input>
        </header>
    )
}

export default Header
