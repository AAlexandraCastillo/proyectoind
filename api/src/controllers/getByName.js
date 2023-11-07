const { functionAux } = require('./functionAux');

const getByName= async (req,res)=>{
const { name } = req.query;
if (!name)return res.status(400).send({ error: "Insert name" });
  try{
    const allDogs = await functionAux();
    const dogFilter = allDogs.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()));
    dogFilter.length > 0?res.status(200).json(dogFilter):res.status(404).json({ error:"Dog not found" });}
catch(error){
    res.status(500).json({ error: error.message });
  }};

module.exports={getByName,}