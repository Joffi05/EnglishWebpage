import React from 'react'
import styles from '.././styles/News.module.css'
import Typewriter from 'typewriter-effect'

const News = () => {
    const[data, setData] = React.useState('')
    
    const apiKey="de7a6efadb284f598012913141f52b42";
    let Topic="climate change";
    let url='https://newsapi.org/v2/everything?q='+Topic+'&apiKey='+apiKey;
    
    React.useEffect(() =>{
        fetch(url)
        .then(res=>{
          return res.json()
        })
        .then((data)=>{
            setData(data)
        })
    }, [])
    
    if(data){
        let NewsJson = data.articles.slice(0,3)
        console.log(NewsJson)

    }

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


