import React, { useState } from 'react'
import data from './data'
import List from './List'

const App = () => {
  const [people, setPeople] = useState(data);
  // console.log(`setPeople ${setPeople}`)
  return (
    <>
    {/* {JSON.stringify(data)} */}
    {/* {JSON.stringify(people)} */}
    <main>
      <section className='container'>
      <h3>{people.length} Birthdays Today</h3>
      <List people={people} />
      <button onClick={()=>{
        console.log(`Clicked`);
        setPeople([]);
      }}>Clear All</button>
      </section>
    </main>
    </>
  )
}

export default App