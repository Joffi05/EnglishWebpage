import React from 'react'
import styles from '.././styles/MakePost.module.css'
import FlashMessage from 'react-flash-message'


function MakePost(props) {

    const [postData, setPostData] = React.useState({
        name: String,
        date: new Date(),
        city: String,
        title: String,
        text: String
        //nochne id für posts einbauen
    })

    const handleChange = (event) => {
        setPostData({
            ...postData,
            [event.target.name]: event.target.value
        })
    }

    const handleClick = async(event) => {
        event.preventDefault()


        if (postData.text === String || postData.title === String) {
            //popup "fill at least text and title"
        }
        else {
            fetch('/newPost', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(postData)
            }, [])
            .then(response => {
                if (response) {
                    //popup success
                    //reload posts component
                    window.location.reload()
                }
                else {
                    //popup unknonwn error
                }
            }) 
        }

        //deleting evidence of made post
        Array.from(document.querySelectorAll('input')).forEach(
            input => (input.value = "")
        )
        Array.from(document.querySelectorAll('textarea')).forEach(
            input => (input.value = "")
        )

        setPostData({
            name: String,
            date: new Date(),
            city: String,
            text: String
        })
    }

    return (
        <div className={styles.PostInput}>
            <h1>Design the future</h1>
           
            <li ><input className={styles.PostShort} onChange={handleChange} type="text" placeholder="Name" name="name"></input></li>
            <li ><input className={styles.PostCity} onChange={handleChange} type="text" placeholder="Stadt" name="city"></input></li>
            <li ><input className={styles.PostShort} onChange={handleChange} type="text" placeholder="Title" name="title"></input></li>
            <li ><textarea className={styles.PostText} onChange={handleChange} type="text" placeholder="Inhalt" name="text"></textarea></li>
            
            <li><button className={styles.PostButton} onClick={handleClick}>Send</button></li> 
        </div>
    )
}

export default MakePost
