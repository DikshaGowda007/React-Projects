import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) =>{
    const newTours = tours.filter((tour)=>tour.id !== id)
    console.log(JSON.stringify(newTours));
    // setTours(newTours)
    // console.log(`Removing tour`);
  }
  
  const fetchTours = async () =>{
    try {
    const response = await fetch(url)
    const tours = await response.json()
    // console.log(`Tours ${JSON.stringify(tours)}`)
    setLoading(false)
    setTours(tours)
    } catch (error) {
      setLoading(true)
      // console.log(`${error.message}`)
    }
  }
  useEffect(()=>{
    fetchTours();
  }, [])
  if (loading) {
    return(
      <>
        <main>
          <Loading />
        </main>
      </>
    )
  } else {
  return(
  <>
  <main>
    <Tours tours={tours} removeTour={removeTour} />
  </main>
  </>)
  }
}

export default App
