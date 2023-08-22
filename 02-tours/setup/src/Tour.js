import React, { useState } from 'react';
import Tours from './Tours';

const Tour = ({id, image, info, price, name, removeTour}) => {
  const [readMore, setReadMore] = useState(false)

  return(
    <>
    {/* <div className='col-lg-3 col-md-4 col-sm-6 col-xs-1'> */}
      <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>$ {price}</h4>
        </div>
        {/* <p>{info}</p> */}
        <p>{readMore ? info: info.substring(0, 200)}
        <button onClick={()=> setReadMore(!readMore)}>{ readMore ? 'Read Less': 'Read More'}</button>
        </p>
        <button className='delete-btn' onClick={removeTour(id)}>Not Interested</button>
      </footer>
      </article>
    {/* </div> */}
    </>
  )
};

export default Tour;
