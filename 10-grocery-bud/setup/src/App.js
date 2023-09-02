import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = ()=>{
    let list = localStorage.getItem('list')
    if(list) return JSON.parse(localStorage.getItem('list'))
    else return []
}
const App = () => {
    const [name, setName] = useState('')
    const [list, setList] = useState(getLocalStorage())
    const [isEditing, setIsEditing] = useState(false)
    const [editId, SetEditId] = useState(null)
    const [alert, setAlert] = useState({
        show: false, msg: '', type: ''
    })
    const handleSubmit = (e)=>{
        e.preventDefault()
        if (!name) {
            showAlert(true, 'danger', 'Please Enter Value')
        } else if(name && isEditing){
            setList(
                list.map((item)=> {
                    if (item.id === editId) {
                        return { ...item, title: name}
                    }
                    return item
                })
            )
            setName('')
            SetEditId(null)
            setIsEditing(false)
            showAlert(true, 'success', 'value changed')
        } else {
            showAlert(true, 'success', 'Item added Successfully')
            const newItem = { id: new Date().getTime().toString(), title: name}
            setList([...list, newItem])
            setName('')
        }
    }
    const showAlert = (show=false, type='',msg='')=>{
        setAlert({show, type, msg})
    }
    const clearList = ()=>{
        showAlert(true, 'danger', 'Please Enter Something')
        setList([])
    }
    const removeItem = (id)=>{
        showAlert(true, 'danger', 'Item removed successfully')
        setList(list.filter((item)=>item.id != id))
    }
    const editItem = (id)=>{
        const specificItem = list.filter((item)=> item.id !== id)
        setIsEditing(true)
        SetEditId(id)
        setName(specificItem.title)
    }
    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])
    
  return (
    <>
    <section className="section-center">
        <form className="grocery-form" onSubmit={handleSubmit}>
            {alert.show && <Alert {...alert} list={list} removeAlert={showAlert} />}
            <h3>Grocery Bud</h3>
            <input type="text" className='grocery' placeholder='e.g. eghs' value={name} onChange={(e)=>{setName(e.target.value)}} />
            <button type='submit' className="submit-btn">
                {isEditing ? 'edit' : 'submit'}
            </button>
        </form>
        {list.length > 0 && (<div className="grocery-container">
            <List items={list} removeItem={removeItem} editItem={editItem} />
            <button className="clear-btn" onClick={clearList}>Clear Items</button>
        </div>) }
    </section>
    </>
  )
}

export default App