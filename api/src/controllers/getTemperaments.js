const axios = require('axios');
require("dotenv").config();
const { API_KEY } = process.env;
const { Temperament } = require('../db');

const getTemperaments = async (req, res) => {
    const { data } = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
    const temp = data.map((tem) => {
        return tem.temperament;
    }).toString().split(",").map(item => item.trim()); // Asegurarse de que no haya espacios antes o después

    // Obtener temperamentos que ya existen en la base de datos
    const existingTemperaments = await Temperament.findAll({
        where: {
            name: temp // Aquí se asume que el campo de la tabla se llama 'name'. Cambia según tu modelo.
        }
    })
    const existing=existingTemperaments.map(tem => tem.name);

    // Filtrar temperamentos nuevos
    const newTemperaments = temp.filter(tem => !existing.includes(tem));

    // Preparar los datos para la inserción masiva
    const bulkData = newTemperaments.map(tem => ({ name: tem }));

    // Insertar nuevos temperamentos en la base de datos de una sola vez
    if (bulkData.length) {
        await Temperament.bulkCreate(bulkData);
    }
 const tempFinal= await Temperament.findAll()
 const nameTemp= tempFinal.map(temp=>temp.name)
    res.status(200).json(nameTemp);
}

module.exports = {
    getTemperaments,
};