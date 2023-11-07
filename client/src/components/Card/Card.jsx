import { Link } from "react-router-dom";
import style from './Card.module.css'
const Card=({id,name,image,height_min,height_max,weight_min,weight_max,temperament,life_span_min,life_span_max})=>{
return(
    <div>
        <img src={image} alt={name}/>
        <Link to={`/detail/${id}`} style={{ textDecoration: 'none' }}>
        <h2>Name:{name}</h2>
        <h2>id:{id}</h2>
        <h2>height_min:{height_min}</h2>
        <h2>height_max:{height_max}</h2>
        <h2>weight-min:{weight_min}</h2>
        <h2>weight_max:{weight_max}</h2>
        <h2>life_span_min:{life_span_min}</h2>
        <h2>life_span_max:{life_span_max}</h2>
        <h2>temperament:{temperament}</h2>
        </Link>
    </div>
)
}
   
export default Card;