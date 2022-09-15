import React, { useState, useEffect } from 'react'
import axios  from 'axios'


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
      {Object.values(items).map((data) => {
            return (
                <div key={data.height}>
                    <h1>Nama : {data.eye_color}</h1>
                </div>
            )
        })}
    </div>
  )
}

export default Home