import React, { useEffect } from 'react'
import { BiCheck} from 'react-icons/bi'

const Alert = ({ list, type, msg, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 3000);
    return () => {
      clearTimeout(timeout)
    }
  }, [list])
  
  return (
    <>
    <div className="d-flex">   
      <p className={`alert alert-${type}`}>{msg}</p>
      {/* <BiCheck /> */}
    </div>
    </>
  )
}

export default Alert