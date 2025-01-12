import { useState } from "react"
import Itemlist from "./Itemlist"



const ResCart = (props) => {
    const[showItem, setShowItem] = useState(false)
    console.log(props)
    const {itemCards, title} =props.item.card.card
  return (
    <div className="my-2 p-4 w-1/2 mx-auto  shadow-2xl">
       <div className="flex justify-between">
        <span className="font-bold text-xl">{title}=({itemCards.length})</span>
        <span  className="cursor-pointer"onClick={()=>{
            setShowItem(!showItem)
        }}>{showItem?"⬆️":"⬇️"}</span>
        </div>
        {showItem && <Itemlist items ={itemCards}/>}
    </div>
  )
}

export default ResCart