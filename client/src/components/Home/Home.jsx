import { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDogs } from "../../redux/actions";
import Cards from "../Cards/Cards";
import Nav from "../Nav/Nav";
import Pagination from "../Pagination/Pagination";

const Home=()=>{

const dispatch=useDispatch();
const dogs=useSelector((state)=>state.allDogs)
const[currentPage,setCurrentPage]=useState(1)
const perPage=8;
console.log('soy los dog',dogs)
useEffect(()=>{
    dispatch(getDogs())
},[]);
    return (
<div>
<Nav/>

<Cards dogs={dogs} currentPage={currentPage} perPage={perPage}/>
<Pagination currentPage={currentPage} totalPages={Math.ceil(dogs.length/ perPage)} onPagesChange={setCurrentPage} />
    
</div>
    )
}

export default Home;