import { useEffect, useState } from "react";
let y=0
export default function Home() {

  const [x,setX]=  useState(0)


  useEffect(() => {
    console.log('ana 7y');
    
  
   
  }, [x])
  




  const Inc=()=>{
    setX(x+1)
      y+=1
    
  }


  const Dec=()=>{
    setX(x-1)
    y-=1
  }







  return (<>
  
    <h1>Welcome </h1>
    <h3>Counter : {x}</h3>
    <h3 className="bg-danger">y = {y}</h3>
    <button className="btn btn-success mx-2" onClick={Inc}>Increment</button>
    <button className="btn btn-danger mx-2" onClick={Dec}>Decrement</button>
  </>
  )

}
