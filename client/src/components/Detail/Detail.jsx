import {useParams} from 'react-router-dom'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getById } from '../../redux/actions';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';

const Detail=()=>{
  const{id}=useParams();
  const dog=useSelector((state)=>state.detailDog)
  const dispatch=useDispatch()
 console.log(id)

  useEffect(()=>{
   dispatch(getById(id))
  },[dispatch,id])

return(<div>
    <Link to={'/home'}><button>HOME</button></Link>
   


   <Card
    key={dog.id}
    id={dog.id}
    name={dog.name}
    image={dog.image}
    height_min={dog.height_min}
    height_max={dog.height_max}
    weight_min={dog.weight_min}
    weight_max={dog.weight_max}
    life_span_min={dog.life_span_min}
    life_span_max={dog.life_span_max}
    temperament={dog.temperament}
    />
</div>)

};

export default Detail;