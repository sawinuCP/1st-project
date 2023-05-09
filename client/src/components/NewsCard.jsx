import React from 'react'

export default function NewsCard({newsTitle,newsDescription}) {
  return (
    
    <>
    <div className="card m-4">
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{newsTitle}</h5>
    <p className="card-text">{newsDescription}</p>
    <a href="#" className="btn btn-primary">Search</a>
  </div>
</div></>
  )
}
