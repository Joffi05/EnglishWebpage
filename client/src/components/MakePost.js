import React from 'react'
import styles from '.././styles/MakePost.module.css'
import firebase from 'firebase'

function MakePost() {

    const [postData, setPostData] = React.useState({
        "name": null,
        "date": new Date(),
        "city": null,
        "text": null
    })

    const handleChange = (event) => {
        setPostData({
            ...postData,
            [event.target.name]: event.target.value
        })
        console.log(postData)
    }

    const handleClick = () => {

    }

    return (
        <div>
            <input onChange={handleChange} type="text" placeholder="Name" name="name"></input>
            <input onChange={handleChange} type="text" placeholder="Inhalt" name="text"></input>
            <input onChange={handleChange} type="text" placeholder="Stadt" name="city"></input>
            <button onClick={handleClick}>Send</button>
        </div>
    )
}

export default MakePost
