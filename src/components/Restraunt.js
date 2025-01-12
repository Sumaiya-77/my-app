import { useContext } from "react";
import {img_url } from "../utils/Constants";
import Hra from "../utils/Hra";

const Restraunt = (props) => {

const{name,areaName, avgRating, costForTwo, cuisines, cloudinaryImageId} =props.item.info


 const {out} = useContext(Hra)
// const { out } = useContext(Hra);


  return(
    <div className="h-[360px] w-[260px] rounded-2xl p-4 m-4 bg-green-200 hover:bg-green-300">


<img className="h-[150px] w-[250px] rounded-2xl" alt="res-card" src={img_url+cloudinaryImageId}/>
    <h1 className="font-bold text-2xl">{name}</h1>
    <p>{areaName}</p>
    <p>{costForTwo}</p>
    <p>{cuisines[0]}</p>
    <p>{avgRating}</p>
    <p>{out}</p>
    </div>
  )
}

export default Restraunt;