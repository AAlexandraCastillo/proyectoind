import Search from "../Search/Search";
import style from './Nav.module.css';
import { useState } from "react";
import { filterTemperamentApi } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { filterTemperamentDb } from "../../redux/actions";
import { filterByOrden } from "../../redux/actions";



   const Nav=()=>{
   const[selectedTemp,setSelectedTemp]=useState("");
   const [selectedOrd,setSelectedOrd]=useState("");



   const dispatch=useDispatch()

  
   
   const handleFilter=()=>{
      dispatch(filterTemperamentApi(selectedTemp))
   }
   const handleFilterDb=()=>{
      dispatch(filterTemperamentDb(selectedTemp))
   }

 const handleOrder=()=>{
   
   dispatch(filterByOrden(selectedOrd))
 }
    return(
    <div className={style.container}>
      <button onClick={handleOrder}>Order peso/alfab</button>
<select value={selectedOrd}  onChange={(e)=> setSelectedOrd(e.target.value)}>
   <option value="">Orden</option>
   <option>Peso-Asc</option>
   <option>Peso-Desc</option>
   <option>A-Z</option>
   <option>Z-A</option>
</select>


   <Search/>
   <select value={selectedTemp}  onChange={(e) => setSelectedTemp(e.target.value)}>
    <option value="">Seleciona un temperamento</option>
    <option>Dominant</option>
    <option>Obedient</option> 
    <option>Friendly</option>
    <option>Protective</option>
    <option>Energetic</option>
    <option>Alert</option>
    <option>Agile</option>
    <option>Loving</option>
    <option>Loco</option>
   </select>
   <button onClick={handleFilter}>Filtrar temperamento por api</button>
   <button onClick={handleFilterDb}>Filtrar en DB</button>
    </div>
    )
}
export default Nav;