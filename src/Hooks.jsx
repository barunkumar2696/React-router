import React, { useEffect,useState } from 'react'

export default function Hooks() {
    const[counter,setCounter]=useState(0)

    useEffect(()=>{
        console.log('use effect hooks called')
    },[])

    useEffect(()=>{
        console.log('use effect hooks called')
    },[counter])
  return (
    <div>
      <h1>Hook component</h1>
      <button onClick={()=>setCounter(counter+1)}>+</button>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter(counter-1)}>-</button>
    </div>
  )
}
//useEffect hooks accepts two parameter on is call back function and other is dependencies list.its has properties of both componentdidmount and componentdidupdate.in line 12 [counter] is dependencies.
//by passing empty dependencies[] we can invoke the properties od componentdidmount in useEffect.
//by passing counter dependencies we can invoke componentdidupdate.