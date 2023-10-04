import React from 'react'

const CardItem = (props) => {
  const placeHolderImage = 'https://thealmanian.com/wp-content/uploads/2019/01/product_image_thumbnail_placeholder.png'

  const handleImageError = (e) => {
    e.target.src = placeHolderImage
  }

  return (
    <>
      <div className='card' style={{ width: '18rem' }}>
        <img src={props.image || placeHolderImage} className='card-img-top' alt='' onError={handleImageError} />
        <div className='card-body'>
          <h5 className='card-title'>{props.product_name}</h5>
          <p className='card-text'>{props.description}</p>
          <p className='card-text'>${props.price}</p>
          <a href='#' className='btn btn-primary'>Details</a>
        </div>
      </div>
    </>
  )
}

export default CardItem
