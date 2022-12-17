import React from 'react'
import './NewsItem.css'
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

const NewsItem = ({title,description,url,urlToImage,pubAt,content}) => {
  // var imgsrc=Object.values({urlToImage})
  // var img=imgsrc[0]
  // console.log(img)
  //         if(img==='null')
  //         console.log('img is empty')
  //         else
  //         console.log('img not empty')
  return (
    <div className="news-app">
        <div className="news-item">
            <img className='news-img' src={urlToImage} alt={content}></img>
            <div className='container'>
              <h3><a href={url}>{title}</a></h3>
              <h7>{pubAt}</h7>
              <p>{description}</p>
            </div>
        </div>
      
    </div>
    // <Card sx={{ maxWidth: 345 }}>
    //   <CardMedia
    //     component="img"
    //     height="140"
    //     image={urlToImage}
    //     alt="green iguana"
    //   />
    //   <CardContent>
    //     <Typography gutterBottom variant="h5" component="div">
    //     <h3><a href={url}>{title}</a></h3>
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //     <p>{description}</p>
    //     </Typography>
    //   </CardContent>        
    // </Card>
  )
}

export default NewsItem
