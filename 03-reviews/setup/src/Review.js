import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  // alert(`${index}`)
  const {name, job, image, text} = people[index];
  // console.log(`${JSON.stringify(people)}`);
  console.log(`${JSON.stringify(name)}`);


  const checkNumber = (number)=>{
    if (number > people.length - 1) return 0;
    if (number < 0) return people.length - 1;
    return number;
  }

  const nextPerson = ()=>{
    setIndex(()=>{
      let newIndex = index + 1;
      return checkNumber(newIndex);
    })
  }
  const prevPerson = ()=>{
    setIndex(()=>{
      let newIndex = index - 1;
      return checkNumber(newIndex);
    })
  }
  const randomPerson = ()=>{
    // console.log(`Random Person ${Math.random()}`);
    // set range for random number
    const randNo = (min, max) =>{
      return (Math.floor(Math.random()) * (max - min) + min)
    }
    let randomNumber = randNo(0, 4) * people.length;
    console.log(randomNumber);
    if (randomNumber === index) randomNumber = index+1;
    setIndex(checkNumber(randomNumber))
  }
  return(
    <>
      {/* {JSON.stringify(people)} */}
      <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        {/* <span>{people}</span> */}
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
        <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
        <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>Suprise Me</button>
      </article>
    </>
  );
};

export default Review;
