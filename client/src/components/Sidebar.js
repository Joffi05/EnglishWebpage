import React from 'react'
import styles from '.././styles/Sidebar.module.css'
import MakePost from './MakePost.js'
const Sidebar = () => {
    return (
        <div className={styles.Sidebar}>
            <MakePost/>
        </div>
    )
}

export default Sidebar
