const{functionAux}=require('./functionAux')

const getDogs = async (req,res)=>{
try{
    const getAllDogs= await functionAux()
    res.status(200).json(getAllDogs)}
 catch(error){
    res.status(404).send({error:error.message});}}


module.exports={getDogs,}