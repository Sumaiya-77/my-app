import { useParams } from "react-router-dom";
import useResmenu from "../utils/useResmenu";
import ResCart from "./ResCart";

const ResMenu = () => {

  const {id} = useParams();


 const menu =useResmenu(id)
  if (menu == null)
    return <h1>menu is loading please wait for a minutes....</h1>

  const { name, costForTwoMessage, areaName } =menu.data.cards[2].card.card.info

  const itemCards =menu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(each=> each.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  return (
    <div className="text-center">
      <h1 className="font-bold text-xl">{name}</h1>
      <p>{costForTwoMessage}</p>
      <span>{areaName}</span>
    

    {
      itemCards.map(each => <ResCart item = {each}/>)
    }
    
    </div>

  );
};

export default ResMenu;
