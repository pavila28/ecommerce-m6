import CardItem from '../Components/CardItem/CardItem'
import { useEffect, useState } from 'react'
import './home.css'

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({})

  useEffect(() => {
    if (loading) {
      fetch('https://ecommerce-json-jwt.onrender.com/items')
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setData(data)
          setLoading(false)
        })
    }
  }, [loading])

  if (loading) {
    return (
      <>
        <p>Loading...</p>
      </>
    )
  } else {
    return (
      <>
        <h1 className='title-principal'>List of items</h1>
        <div className='container-fluid mt-5'>
          <div className='row'>
            {data.map((item, index) => {
              return (
                <div className='col cardHover' key={index}>
                  <CardItem key={index} name={item.product_name} image={item.image} description={item.description} price={item.price} />
                </div>
              )
            })}
          </div>
        </div>
      </>
    )
  }
}

export default Home
