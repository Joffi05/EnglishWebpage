import React from 'react'
import styles from '.././styles/News.module.css'
import Typewriter from 'typewriter-effect'

const News = () => {
    return (
        <form>
            <h1 className={styles.Header}></h1>
            <div className={styles.News1}>
                <Typewriter 
                onInit={(typewriter) =>{
                    typewriter.typeString("Feature is coming soon...").start();
                }}
                />
            </div>
            <div className={styles.News2}>
                
            </div>
            <div className={styles.News3}>
                
            </div>
        </form>
    )
}

export default News
