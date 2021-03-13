import React from 'react'
import styles from '.././styles/MakePost.module.css'
import { BiError } from 'react-icons/bi';


<<<<<<< HEAD
function MakePost() {
    const [error, seterror] =React.useState('')
=======
function MakePost(props) {

>>>>>>> 83482a36512c0c26ae9572975ab753b8afa8cc52
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
            seterror("Titel and text is required !")
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
            {error && <li className={styles.error}> {error} <BiError/></li>}
            <li ><input className={styles.PostShort} onChange={handleChange} type="text" placeholder="Name" name="name"></input></li>
            <li ><input className={styles.PostCity} onChange={handleChange} type="text" placeholder="Stadt" name="city"></input></li>
            <li ><input className={styles.PostShort} onChange={handleChange} type="text" placeholder="Title" name="title"></input></li>
            <li ><textarea className={styles.PostText} onChange={handleChange} type="text" placeholder="Inhalt" name="text"></textarea></li>
            <li><button className={styles.PostButton} onClick={handleClick}>Send</button></li> 
        </div>
    )
}

export default MakePost
