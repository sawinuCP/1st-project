import React from 'react'

export default function NewsCard({newsTitle,newsDescription,imgURL}) {
  return (
    
    <>
    <div className="card m-4">
  <img src={imgURL} className="card-img-top" alt={newsTitle}/>
  <div className="card-body">
    <h5 className="card-title">{newsTitle}</h5>
    <p className="card-text">{newsDescription}</p>
    <a href="#" className="btn btn-primary">Search</a>
  </div>
</div></>
  )
}
