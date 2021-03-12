import React from 'react'
import styles from '.././styles/MakePost.module.css'


function MakePost() {

    const [postData, setPostData] = React.useState('')

    const handleChange = (event) => {
        setPostData({
            ...postData,
            [event.target.name]: event.target.value
        })
        console.log(postData)
    }

    const handleClick = async(event) => {
        event.preventDefault()
    }

    return (
        <div className={styles.PostInput}>
            <h1>Design the future</h1>
            <li ><input className={styles.PostShort} onChange={handleChange} type="text" placeholder="Name" name="name"></input></li>
            <li ><textarea className={styles.PostText} onChange={handleChange} type="text" placeholder="Inhalt" name="text"></textarea></li>
            <li ><input className={styles.PostShort} onChange={handleChange} type="text" placeholder="Stadt" name="city"></input></li>
            <li><button className={styles.PostButton} onClick={handleClick}>Send</button></li> 
        </div>
    )
}

export default MakePost
