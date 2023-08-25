import React, { useState } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'

const App = () => {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#f15025').all(10))

  const handleSubmit = (e)=>{
    e.preventDefault();
    try {
      let colors = new Values(color).all(10)
      // alert(`${color}`)
      console.log(`Colors ${JSON.stringify(colors)}`);
      setList(colors);
    } catch (error) {
      setError(true)
      // alert(`${error.message}`)
      console.log(`Error ${error.message}`);
    }

      // let colors = new Values(color).all(10)
      // // alert(`${color}`)
      // console.log(`Colors ${JSON.stringify(colors)}`);
      // setList(colors);
  }
  return (
    <>
    <section className='container'>
      <h3>Color Generator</h3>
      <form onSubmit={handleSubmit}>
        <input type='text' value={color} onChange={(e)=>{setColor(e.target.value)}} placeholder='#f15025' className={`${error ? 'error' : null}`} />
        <button className='btn' type='submit'>Submit</button>
      </form>
    </section>
    <section className='colors'>
      <h4>List goes here</h4>
      <br />
      {/* {console.log(`Color ${JSON.stringify(color)}`)} */}
      {/* {list.map((color, index)=>{
        return <SingleColor key={index} {...color} index={index} />
      })} */}

      {list.map((color, index)=>{
        return <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
      })}
    </section>
    </>
  )
}

export default App