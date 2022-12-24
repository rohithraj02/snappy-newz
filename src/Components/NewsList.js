import React , {useState, useEffect} from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'
import './Newslist.css'
// To query /v2/top-headlines

const NewsList = ({qr}) => {
    const [articles,setArticles]= useState([])
    const category=qr
    console.log(qr)
    useEffect(() => {
        const getArticles = async()=>{
            const response = await axios.get('https://newsapi.org/v2/top-headlines?country=in&pageSize=39&category='+category+'&sortBy=popularity&apiKey=74f0efd0fe3d47e2a9e6295c6ba71d0c')
            console.log(response)
            setArticles(response.data.articles)
        }
        getArticles()
    },[category]);
  return (
    <div className='News'>
      {articles.map(article => {
        return (
            <NewsItem title={article.title} description={article.description} url={article.url} urlToImage={article.urlToImage} pubAt={article.publishedAt} content={article.content}/>
        )
      })}
    </div>
  )
}



//newsdata.io


// const NewsList = ({qr}) => {
//   const [results,setArticles]= useState([])
//   const query=qr
//   console.log(qr)
//   useEffect(() => {
//       const getArticles = async()=>{
//           const response = await axios.get('https://newsdata.io/api/1/news?apikey=pub_144471c9e3c4e7e979ef3cc048e78779425d7&country=in&language=en&category='+query)
//           console.log(response)
//           setArticles(response.data.results)
//       }
//       getArticles()
//   },[query]);
// return (
//   <div className='News'>
//     {results.map(article => {
//       return (
//           <NewsItem title={article.title} description={article.description} url={article.link} urlToImage={article.image_url} pubAt={article.pubDate} content={article.content}/>
//       )
//     })}
//   </div>
// )
// }
export default NewsList
// https://newsapi.org/v2/everything?q=tesla&from=2022-10-21&sortBy=publishedAt&apiKey=API_KEY
//cda5af4d037e43a8860b350a2ae6439d