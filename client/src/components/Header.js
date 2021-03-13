import React from 'react'
import logo from '.././pngs/logo.png'
import styles from '.././styles/Header.module.css'

const Header = (props) => {

    const [search, setSearch] = React.useState(null)

    const handleChange = (event) => {
        setSearch(event.target.value)
        props.setSearch(search)
    }

    const handleSubmit = () => {
        
    }



    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="Logo"/>
            <input className={styles.input} onChange={handleChange} onSubmit={handleSubmit} placeholder="Search..."></input>
        </header>
    )
}

export default Header
