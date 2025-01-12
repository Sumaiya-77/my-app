import Restraunt from "./Restraunt";
import { api } from "../utils/Constants";
import {useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom"
import useOnline from "../utils/useOnline";
import Hra from "../utils/Hra";


const Body = () => {
  const [data, setData] = useState([]);
  const [value, setValue] =useState("")


const {setNe}=  useContext(Hra)

  const isOnline = useOnline()

 
  useEffect(()=>{
    const fetchData = async()=>{
      const res = await fetch(api);
      const out = await res.json();
      console.log(out?.data?.cards[1]?.card?.card?.gridElements.infoWithStyle.restaurants); 
      setData(out?.data?.cards[1]?.card?.card?.gridElements.infoWithStyle.restaurants);
    };
    fetchData();
  },[]);

  if(isOnline=== false) return <h1>your connection is diconnected try to acess internet🥴🥴</h1>
  return(data.length===0)?<Shimmer/>:(
    <div>
      <div>
        <button className ="m-2 p-2 bg-green-300 rounded-lg"onClick={()=>{
          const res =data.filter(each=> each.info.avgRating >4.5)

          setData(res)
        }}>Top rated Restraunt</button>
      </div>
<div>
  <input  className="bg-gray-400"type="text" onChange={(e)=>{
   setValue(e.target.value)
  }}/>
  <button className ="m-2 p-2 bg-green-300 rounded-lg"onClick={()=>{
    const res = data.filter(each => each.info.name.toUpperCase().includes(value.toUpperCase()))
    setData(res)
  }}>Search</button>
</div>

<div>
    <input className="border-white bg-pink-200"type="text"onChange={(e)=>setNe(e.target.value)}/>
</div>
   
    <div className="flex flex-wrap">
      {data.map(each=> <Link to ={"/menu/"+ each.info.id} > <Restraunt key={each.info.id} item={each} /></Link>
    )}
    </div>
    </div>
  );  
};

export default Body;
