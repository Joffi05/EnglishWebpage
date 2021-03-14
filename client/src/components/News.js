import React from 'react'
import styles from '.././styles/News.module.css'
import Typewriter from 'typewriter-effect'

const News = () => {
    const[data, setData] = React.useState(null)
    
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
    let NewsJson=[]
    if(data){
        NewsJson = data.articles.slice(0,3)

    }

    return (
        <div className={styles.NewsForm}>
            <h1 className={styles.Header}>News</h1>
            <div className={styles.News}>
                <h2 className={styles.NewsHeader}>{data ? NewsJson[0].title : null}</h2>
                <span>{data ? NewsJson[0].author : null}</span>
                <br/>
                <br/>
                <a  className={styles.Button} href={data ? NewsJson[0].url : null}>Link</a>
            </div>
             <div className={styles.News}>
                <h2  className={styles.NewsHeader}>{data ? NewsJson[1].title : null}</h2>
                <span>{data ? NewsJson[1].author : null}</span>
                <br/>
                <br/>
                <a  className={styles.Button} href={data ? NewsJson[1].url : null}>Link</a>
            </div>
            <div className={styles.News}>
                <h2  className={styles.NewsHeader}>{data ? NewsJson[2].title : null}</h2>
                <span>{data ? NewsJson[2].author : null}</span>
                <br/>
                <br/>
                <a className={styles.Button} href={data ? NewsJson[2].url : null}>Link</a>
            </div> 
        </div>
    )
}

export default News


