const{Dog,Temperament}=require('../db')

const postDog =async(req,res)=>{
  try {
    const{name,image,height_min,height_max,weight_min,weight_max,life_span_min,life_span_max,temperament}=req.body;

  if (!temperament)return res.status(400).send({ error: "At least one temperament is required." });
     const newDog = await Dog.create({
      
      image,
      name,
      height_min,
      height_max,
      weight_min,
      weight_max,
      life_span_min,
      life_span_max
    });
    const temperamentsArray = temperament.split(',').map(temp => temp.trim());

    for (const tempName of temperamentsArray) {
      let temperamento = await Temperament.findOne({ where: { name: tempName } });
      if (!temperamento) {
        temperamento = await Temperament.create({ name: tempName });}
      await newDog.addTemperament(temperamento);}

    // Aca formateo la respuesta para que tenga la estructura que deseo
    const formattedResponse={
      id: newDog.id,
      name: newDog.name,
      image: newDog.image,
      height_min: newDog.height_min,
      height_max:newDog.height_max,
      weight_min:newDog.weight_min,
      weight_max: newDog.weight_max,
      life_span: newDog.life_span,
      temperament: temperamentsArray.join(", ")  // Convertir el array de temperamentos en una cadena
    };
    res.status(200).json(formattedResponse);}
    catch (error){
    res.status(500).send({ error: error.message });
  }}

module.exports={
    postDog,
}