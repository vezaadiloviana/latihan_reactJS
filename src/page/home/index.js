import React, { useState, useEffect } from 'react'
import axios  from 'axios'
import Card from '../../components/card'


const Home = () => {
  const [items, setItems] = useState('')
  const fetchData = async () => {
    try {
        const response = await axios.get(`https://swapi.dev/api/people`)
        setItems(response.data.results) 
        console.log(response.data.results)     

    } catch (error) {
    
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {/* {Object.values(items).map((data) => {
            return (
              <div key={data.height}>
                  <h1>Nama : {data.eye_color}</h1>
              </div>
            )
        })} */}
        {/* <div className='flex justify-center py-10'>
          <Card 
            cardTitle={'Title Card'}
            to={'/'}
            />
        </div> */}
        <div className='flex flex-col items-center justify-center gap-5 py-10'>
          {Object.values(items).map((data) => {
              return (
                <Card key={data.height}
                  cardTitle={data.name}
                  to={'/'}
                />
              )})
              }
        </div>
    </div>
  )
}

export default Home