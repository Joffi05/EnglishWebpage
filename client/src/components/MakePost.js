import React from 'react'
import styles from '.././styles/MakePost.module.css'


function MakePost() {

    const [postData, setPostData] = React.useState({
        name: "",
        date: new Date(),
        city: "",
        title: "",
        text: ""
    })

    const handleChange = (event) => {
        setPostData({
            ...postData,
            [event.target.name]: event.target.value
        })
    }

    const handleClick = async(event) => {
        event.preventDefault()

        fetch('/newPost', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(postData)
        }, [])
        .then(response => console.log(response)) // hier popup für erfolgreich

        Array.from(document.querySelectorAll('input')).forEach(
            input => (input.value = "")
        )
        Array.from(document.querySelectorAll('textarea')).forEach(
            input => (input.value = "")
        )

        if ((postData.text === "" || postData.text === String) || (postData.title === "" || postData.title === String) ) {
            alert("Empty")
        }
        else {
            alert("Successfull")
        }

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
            <li ><input className={styles.PostShort} onChange={handleChange} type="text" placeholder="Title" name="title"></input></li>
            <li ><textarea className={styles.PostText} onChange={handleChange} type="text" placeholder="Inhalt" name="text"></textarea></li>
            <li ><input className={styles.PostShort} onChange={handleChange} type="text" placeholder="Stadt" name="city"></input></li>
            
            <li><button className={styles.PostButton} onClick={handleClick}>Send</button></li> 
        </div>
    )
}

export default MakePost
