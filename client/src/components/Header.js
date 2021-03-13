import React from 'react'
import logo from '.././pngs/logo.png'
import { FaSearch } from 'react-icons/fa'
import styles from '.././styles/Header.module.css'

const Header = (props) => {

    const [search, setSearch] = React.useState(null)

    const handleSubmit = () => {
        props.setEnter()
    }

    const handleChange = (event) => {
        setSearch(event.target.value)
        props.setSearch(search)
    }

    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="Logo"/>
            <input className={styles.input} onChange={handleChange} onSubmit={handleSubmit} placeholder="Search..."></input>
        </header>
    )
}

export default Header
