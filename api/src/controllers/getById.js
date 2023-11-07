const axios=require('axios')
require("dotenv").config();
const{API_KEY}=process.env
const{Dog}=require('../db')
const{Temperament}=require('../db')

const getById = async (req, res) => {
    const id = req.params.idRaza;
    const numericId = Number(id);

    if (!isNaN(numericId)) { // Si es un número
        try {
            const { data } = await axios(`https://api.thedogapi.com/v1/breeds/?api_key=${API_KEY}`);
            const dogId = data.find(dog => dog.id === numericId);

            if (dogId) {
                const dogById = {
                    id: dogId.id,
                    image: dogId.image?.url,
                    name: dogId.name,
                    height_min: dogId.height.metric.split(' - ')[0],
                    height_max: dogId.height.metric.split('-')[1],
                    weight_min: dogId.weight.metric.split('-')[0],
                    weight_max: dogId.weight.metric.split('-')[1],
                    life_span_min: dogId.life_span.split('-')[0],
                    life_span_max: dogId.life_span.split('-')[1],
                    temperament: dogId.temperament
                };
                return res.status(200).json(dogById);
            } else {
                return res.status(404).send({ error: 'Dog Not Found in API' });
            }
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    } else { // Si no es un número, busca en la base de datos
        try {
            const dogBd = await Dog.findOne({
                where: { id: id },
                include: [{
                    model: Temperament,
                    through: { attributes: [] }
                }]
            });

            if (dogBd) {
                const temperamentNames = dogBd.temperaments.map(temp => temp.name);
                const dogData = {
                    id: dogBd.id,
                    image: dogBd.image,
                    name: dogBd.name,
                    height_min: dogBd.height_min,
                    height_max: dogBd.height_max,
                    weight_min: dogBd.weight_min,
                    weight_max: dogBd.weight_max,
                    life_span_min: dogBd.life_span_min,
                    life_span_max: dogBd.life_span_max,
                    temperament: temperamentNames.join(", ")
                };
                return res.status(200).json(dogData);
            } else {
                return res.status(404).send({ error: 'Dog Not Found in DB' });
            }
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    }}
    module.exports={
        getById,
    }