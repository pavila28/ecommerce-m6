import { useEffect, useState } from 'react'
import { getAllItemsService } from '../Services/itemService'
import './home.css'

const Home = () => {
  const [itemsList, setItemList] = useState([])

  useEffect(() => {
    const fetchItemsData = async () => {
      try {
        const response = await getAllItemsService()
        if (response.status === 200) {
          setItemList(response.data)
        }
      } catch (error) {
        console.log('Ocurrio un error en Home', error)
      }
    }
    fetchItemsData()
  }, [])

  const placeHolderImage = 'https://thealmanian.com/wp-content/uploads/2019/01/product_image_thumbnail_placeholder.png'

  const handleImageError = (e) => {
    e.target.src = placeHolderImage
  }

  return (
    <>
      <h1>List of items</h1>
      <div className='d-flex flex-row flex-wrap justify-content-center'>
        {/* Si itemsData no esta vacio, recorro el arreglo con Map y creo un Card de Bootstrap para cada elemento */}
        {itemsList && itemsList.map((product) => (
          <div className='card' style={{ width: '18rem' }} key={product.id}>
            <img className='card-img-top' style={{ maxHeight: '300px' }} src={product.image || placeHolderImage} alt={product.product_name} onError={handleImageError} />
            <div className='card-body'>
              <h5 className='card-title'>{product.product_name}</h5>
              <p className='card-text'>{product.description}</p>
              {/* Aqui no se implementa el botón, pero basta con sustituir "a" por Link de react-router-dom y la ruta del enlace indicar el componente que mostrará la información de un solo producto, seguido del id del producto */}
              <a href='#' className='btn btn-primary'>Comprar</a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
