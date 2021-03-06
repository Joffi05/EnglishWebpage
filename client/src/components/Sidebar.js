import React from 'react'
import styles from '.././styles/Sidebar.module.css'
import MakePost from './MakePost.js'
import News from './News.js'

const Sidebar = (props) => {
    return (
        <div className={styles.Sidebar}>
            <form className={styles.Form}>
                <MakePost/>
            </form>
            <form className={styles.News}>
                <News/>
            </form>
        </div>
    )
}

export default Sidebar
