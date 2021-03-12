import React from 'react'
import styles from '.././styles/ContentForm.module.css'
import { AiFillLike } from 'react-icons/ai';
const ContentForm = () => {
    return (
        <div className={styles.DIV}>
            <form className={styles.Form}>
                <div className={styles.DIV}>
                    <button className={styles.Contribute}><AiFillLike/></button>
                    
                </div>
                
                <h1 className={styles.Titel}>ExampleTitel</h1> {/*Der Header ist für den Titel geacht*/}
                <h2 className={styles.Name}> von: Max Mustermann</h2> {/*Der Header ist für den Namen geacht*/}
                <h3 className={styles.City}>in: Musterstadt</h3> {/*Der Header ist für den Stadt geacht*/}
                <div className={styles.Text}> {/*Der Header ist für den Stadt geacht*/}
                This can be confusing for new users, which is why it's important to read up on the proper etiquette before posting. It basically boils down to learning what kind of posts people like in a given community but there's a bit more to it than that. I recommend spending some time browsing posts on a particular community before posting there. Reading Reddit's outline of Reddiquette, along with the rules outlined by any particular subreddit, is also a good idea.Take this seriously. Bad behavior, particularly spam, is really looked down upon by Reddit users, and there's a good chance someone will point it out.
                </div>
            </form>
        </div>

    )
}

export default ContentForm
