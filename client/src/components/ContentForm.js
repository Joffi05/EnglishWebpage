import React from 'react'
import styles from '.././styles/ContentForm.module.css'
import { AiFillLike } from 'react-icons/ai';
const ContentForm = (props) => {

    const [posts, setPosts] = React.useState(null)
    
    //einbauen, dass er immer nur 10 fetched !!WICHTIG
    const rerenderPosts = (searchWord) => {

        if(searchWord === "") {
            searchWord = null
        }

        fetch('/posts/' + searchWord)
        .then(res => res.json())
        .then((data) => setPosts(data.posts))
    }
    
    if(props.enter) {
        props.setEnter(false)
        rerenderPosts(props.searchFor)
    }

    let formattedPosts

    if (posts) {
        // gigantic map function to wrap each post
        formattedPosts = posts.map(
            (data) =>
                <div className={styles.DIV}>
                    <form className={styles.Form}>
                        <h1 className={styles.Titel}> {data.data.title} </h1> {/*Der Header ist für den Titel geacht*/}
                        <div className={styles.Date}> {new Date(data.data.date).toDateString()}</div>
                        <h2 className={styles.Name}> by: {data.data.name ? data.data.name : null} </h2> {/*Der Header ist für den Namen geacht*/}
                        <h3 className={styles.City}> from: {data.data.city ? data.data.city : null} </h3> {/*Der Header ist für die Stadt geacht*/}
                        <div className={styles.Text}> {data.data.text} </div>
                    </form>
                </div>
        )

        return (
            <div>
                {formattedPosts}
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
            
        )
    }
    else{
        //loading icon hinzufügen
        return (
            <div>
                Loading...
            </div>
        )
    }
}

export default ContentForm