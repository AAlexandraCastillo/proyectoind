const axios=require ('axios')
require("dotenv").config();
const {API_KEY}=process.env;
const {Dog,Temperament}=require('../db')



const functionAux= async () => {
    const { data } = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
    console.log(data)
    const dogApi = data.map(dog => ({
   
        id: dog.id,
        image: dog.image?.url,
        name: dog.name,
        height_min:dog.height.metric.split(' - ')[0],
        height_max:dog.height.metric.split(' - ')[1],
        weight_min:dog.weight.metric.split(' - ')[0],
        weight_max:dog.weight.metric.split(' - ')[1],
        life_span_min: dog.life_span.split('-')[0],
        life_span_max: dog.life_span.split('-')[1],
        temperament: dog.temperament
    }));

    const dogDb = await Dog.findAll({
        include: Temperament
    });
    

    const dogJson = dogDb.map(dog => {
        const { id, image, name, height_min, height_max, weight_min, weight_max, life_span_min, life_span_max } = dog;
        const temperament = dog.temperaments.map(temp => temp.name).join(',');
        return {
        id,
        image,
        name,
        height_min,
        height_max,
        weight_min,
        weight_max,
        life_span_min,
        life_span_max,
        temperament,}
     
    });

    //return [...dogJson, ...dogApi];
    if(dogJson.length>0){return [...dogJson,...dogApi]}
    else{ return dogApi}
   
   
};
module.exports={
    functionAux,
}