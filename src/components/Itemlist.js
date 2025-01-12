

import React, { useContext } from 'react'
import { img_url } from '../utils/Constants'
import Hra from '../utils/Hra'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/store/cartSlice'
const Itemlist = (props) => {
   const {items,x}= props

  const {out}=useContext(Hra)
  const dispatch = useDispatch()
  
  const handleList=(item)=>{
    dispatch(addItem(item))

  }
  return (
    <div>


      {
        items.map(item =>(
          <div className=' p-2 m-2 border-gray-200  border-b-2  text-left flex justify-between'>
            <div className=' w-9/12'>
            <div className=' flex flex-col'>
              <span className=' font-bold text-xl'>{item.card.info.name}</span>
              <span>💰{item.card.info.price/100}</span>
              <p>{item.card.info.description}</p>
              <p>{x}</p>
              <p>{out}</p>
              </div>
            </div>
            <div className=' w-3/12'>
            <button onClick={()=>handleList(item)}className=' p-2 mx-16 rounded-lg bg-black text-white shadow-xl absolute'>Add+</button>
              {item.card.info.imageId && <img className='rounded-2xl h-[120px] w-[150px]' src={img_url+item.card.info.imageId} alt="img" />}
            </div>
          </div>
        ))
      }

    </div>
  )
}


export default Itemlist;
