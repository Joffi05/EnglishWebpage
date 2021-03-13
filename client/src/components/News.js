import React from 'react'
import styles from '.././styles/News.module.css'
import Typewriter from 'typewriter-effect'

const News = () => {
    const[data, setData] = React.useState('')
    
    const apiKey="172e09e7d9834c20b829c411fa48276a";
    let Topic="climate change";
    let url='https://newsapi.org/v2/everything?q='+Topic+'&apiKey='+apiKey;
    
    // React.useEffect(() =>{
    //     fetch(url)
    //     .then(res=>{
    //       return res.json()
    //     })
    //     .then((data)=>{
    //         setData(data)
    //         console.log(data)
    //     })
    // })

    return (
        <form>
            <h1 className={styles.Header}>News</h1>
            <div className={styles.News1}>
            </div>
            <div className={styles.News2}>
                
            </div>
            <div className={styles.News3}>
                
            </div>
        </form>
    )
}

export default News


