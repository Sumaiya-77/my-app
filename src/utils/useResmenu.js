import { useEffect,useState } from "react"
import { menu_api } from "./Constants";

const useResmenu=(id)=>{
    const[menu, setMenu] =useState(null)

    
  useEffect(() => {
    const fetchMenu = async()=>{
      const res = await fetch(menu_api + id);
      const out = await res.json();
      setMenu(out);
    };
    fetchMenu();
  }, [id]);

  return menu
}
export default useResmenu