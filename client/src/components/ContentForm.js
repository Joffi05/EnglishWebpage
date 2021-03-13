import React from 'react'
import styles from '.././styles/ContentForm.module.css'
import { AiFillLike } from 'react-icons/ai';
const ContentForm = (props) => {

    const [posts, setPosts] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(true)

    //einbauen, dass er immer nur 10 fetched !!WICHTIG
    const rerenderPosts = async () => {
        fetch('/posts/' + props.searchFor)
        .then(res => res.json())
        .then((data) => setPosts(data.posts))
        .then(() => setIsLoading(false))
    }

    
    React.useEffect(() => {
        rerenderPosts()
    }, [])

    

    let formattedPosts

    if (!isLoading) {
        // gigantic map function to wrap each post
        formattedPosts = posts.map(
            (data) =>
                <div className={styles.DIV}>
                    <form className={styles.Form}>
                        <div className={styles.DIV}>
                            <button className={styles.Contribute}><AiFillLike/></button> {/*Iwann like zähl funktion mit index und addLike request*/}
                        </div>
                        
                        <h1 className={styles.Titel}> {data.data.title} </h1> {/*Der Header ist für den Titel geacht*/}
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