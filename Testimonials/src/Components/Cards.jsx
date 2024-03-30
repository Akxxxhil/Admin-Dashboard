import React from 'react'


const Cards = (props) => {
    let review=props.review
  return (
    <div>
      <h1 className='text-2xl text-center'>{review.Name}</h1>
      <p>{review.description}</p>
    </div>
  )
}

export default Cards
