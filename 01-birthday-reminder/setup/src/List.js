import React from 'react';

const List = ({people}) => {
  // console.log(`People ${JSON.stringify(people.length)}`)
  if (people.length !== undefined) {
    return (
      <>
      {people.map((person)=>{
        const { id, name, age, image } = person;
        return <> <article key={id} className='person'>
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{age} years</p>
          <p className='remove_btn'>Remove</p>
          {/* <button onClick={()=>{
        console.log(`Clicked`);
      }}>Clear All</button> */}
        </div>
        </article></>
      })}
      </>
    );
  } else {
    return(
      <>No Data Found ❗</>
    )
  }
};

export default List;
