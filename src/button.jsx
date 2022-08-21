//useNavigate is the hook in functional component that allows us to navigate from one component to other.This is placed in seperate component and exported to BrowserRouter .
import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Button() {
    const Navigate = useNavigate()
  return (
    <div>
      <button onClick={()=>Navigate('/home')}>Home page</button>
    </div>
  )
}
