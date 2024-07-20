import React from 'react'
import './NewsItem.css'
import myimg from './alt_img.webp'
import Card from 'react-bootstrap/Card';

const NewsItem = ({ title, description, url, urlToImage, pubAt, content }) => {
  var imgsrc = Object.values({ urlToImage })
  var img = imgsrc[0]
  if (img)
    console.log('img is not empty')
  else {
    urlToImage = myimg
  }
  return (
    <div className='white'>
    {/* <div className="news-app">
      <div className="news-item">
        <header><center><h7>{pubAt.substring(0, 10) + ' ' + pubAt.substring(11, 16)}</h7></center></header>
        <img className='news-img' src={urlToImage} alt={content}></img>
        <div className='container'>
          <h3><a href={url}>{title}</a></h3>
          <br />

          <p>{description}</p>
        </div>
      </div>
    </div> */}


<Card bg="light" text="dark" className="news_item" style={{ width: '30rem' }}>
{/* <header><center><h7>{pubAt.substring(0, 10) + ' ' + pubAt.substring(11, 16)}</h7></center></header> */}
<Card.Img className="news-img" variant="top" src={urlToImage} />
<Card.Body bg="light">
  {/* <Card.Title bg="light"></Card.Title> */}
  <Card.Text bg="light">
  <h3><a href={url}>{title}</a></h3><br></br>
  <p>{description}</p>
  </Card.Text>

</Card.Body>
</Card>
</div>

  )
}

export default NewsItem
