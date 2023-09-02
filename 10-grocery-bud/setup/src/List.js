import React from 'react'
import { FaEdit, FaTrash} from 'react-icons/fa'

const List = ({items, removeItem, editItem}) => {
  return (
    <div className="grocery-list">
      {items.map((i)=>{
        const { id, title } = i;
        return (<article key={id} className="grocery-item">
          <p className="title">{title}</p>
          <button type='submit' className="edit-btn" onClick={(i)=>editItem(id)}>
            <FaEdit />
          </button>
          <button type='submit' className="delete-btn" onClick={(i)=>{removeItem(id)}} >
            <FaTrash />
          </button>
        </article>
        )
      })}
    </div>
  )
}

export default List