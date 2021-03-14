import React from 'react'
import styles from '.././styles/MakePost.module.css'
import { BiError } from 'react-icons/bi';
import { BsCheckCircle } from 'react-icons/bs';

function MakePost(props) {
    const [error, seterror] =React.useState('')
    const [Success, setSucces] = React.useState('')

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
            seterror("Titel and text are required !")
        }
        else {
            fetch('/newPost', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(postData)
            }, [])
            .then(response => {
                if (response) {
                    setSucces("Succesfull")
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
            {error && <li className={styles.Error}> {error} <BiError/></li>}
            {Success && <li className={styles.Success}> {Success}<BsCheckCircle/></li>}
            <li ><input className={styles.PostShort} onChange={handleChange} type="text" placeholder="name" name="name"></input></li>
            <li ><input className={styles.PostCity} onChange={handleChange} type="text" placeholder="city" name="city"></input></li>
            <li ><input className={styles.PostShort} onChange={handleChange} type="text" placeholder="title" name="title"></input></li>
            <li ><textarea className={styles.PostText} onChange={handleChange} type="text" placeholder="text" name="text"></textarea></li>
            <li><button className={styles.PostButton} onClick={handleClick}>Send</button></li> 
        </div>
    )
}

export default MakePost
