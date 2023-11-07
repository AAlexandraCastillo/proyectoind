import { useState } from "react";
import { getByName } from "../../redux/actions";
import { useDispatch } from "react-redux";
const Search=()=>{
const[namedog,setNamedog]=useState('')
const dispatch=useDispatch()
const handleChange=(event)=>{
    setNamedog(event.target.value)
}
const searchName=()=>{
        dispatch(getByName(namedog))
    } 


return(
    <div>
        <input type="search" onChange={handleChange}/>
        <button onClick={searchName}>Buscar</button>
    </div>
)
}
export default Search;