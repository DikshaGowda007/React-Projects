import React from 'react';
import Tour from './Tour';

const Tours = ({tours, removeTour}) => {
  return(
    <>
    <div className='title'>
      <h2>Our Tours</h2>
      <div className='underline'>{}</div>
    </div>
    <div>
    {/* <div className='row'> */}
    {tours.map((tour)=>{
      return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
    })}
    </div>
    </>
  )
};

export default Tours;
