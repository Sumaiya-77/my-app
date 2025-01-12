import { useEffect, useState} from "react"

const Test = () => {
    
  const[value,setValue]=useState(0);
  const[name,setName]=useState(true);
  
useEffect(()=>{
  console.log("render");

},[name,value])
  
    const handleItem =()=>{
        setValue(value+1)
    }
  

  return (
    <div>
        <h1>{value}</h1>
        <button onClick={handleItem}>click</button>
       <h1>{name?"HTML":"React"}</h1>
       <button onClick={()=>{
        setName(!name)
       }}>name changer</button>
           </div>
  )

//   const [count, setCount] =useState(0);

// function decrement(){
//   setCount(count-1);
// }
// function increment (){
//   setCount(count+1);
// }
  
//   return(
//     <>
//     <button onClick={decrement}>-</button>
//     <span>{count}</span>
//     <button onClick={increment}>+</button>
//     </>
//   )
}


export default Test