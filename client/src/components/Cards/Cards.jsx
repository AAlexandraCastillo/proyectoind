import Card from "../Card/Card";
import style from './Cards.module.css'

const Cards=({dogs,currentPage,perPage})=>{
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    const dogsToDisplay = dogs.slice(startIndex, endIndex);
return(
    <div className={style.miDiv}>
      {dogsToDisplay.map((dog)=>(
        <div className={style.card}>
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
    temperament={dog.temperament?dog.temperament: "indefinido"}
    />
    </div>
))}
    </div>
)
}
export default Cards; 