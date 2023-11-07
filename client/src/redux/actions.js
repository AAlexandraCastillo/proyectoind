import axios from 'axios';
const GET_DOGS= 'GET_DOGS';
const GET_BY_NAME='GET_BY_NAME';
const GET_BY_ID='GET_BY_ID';
const URL='http://localhost:3001/dogs/'

export const getDogs=()=>{
    const endpoint='http://localhost:3001/dogs/'
    return async (dispatch)=>{
    try {
        const {data}= await axios(endpoint);
        return dispatch({type:GET_DOGS, payload:data})
    } catch (error) {
        console.error('Error al requerir todos los dogs:', error)
    }}};


    export const getByName=(dogname)=>{
    const endpoint=URL+`name?name=${dogname}`
    return async (dispatch)=>{
        try {
           
            const response= await axios(endpoint)
            const dog=response.data[0]
            return dispatch({type:GET_BY_NAME,payload:dog.name})
        } catch (error) {
            console.error('Error al buscar por nombre',error.message)
        }
    }
    };

    export const getById=(id)=>{
        const endpoint='http://localhost:3001/dogs/'+id
        console.log(endpoint)
        console.log(id)
        return async (dispatch)=>{
            try {
                const response= await axios(endpoint)
                const dog=response.data
                
                return dispatch({type:GET_BY_ID,payload:dog})
            } catch (error) {
                console.error('Error al buscar por id')
            }
        }
    };

export const filterTemperamentApi=(temp)=>{
return {type:'FILTER_TEMPERAMENT_API', payload:temp}
}
export const filterTemperamentDb=(temp)=>{
return {type:'FILTER_TEMPERAMENT_DB' , payload:temp}
}

export const filterByOrden=(orden)=>{
    return {type:'FILTER_BY_ORDEN', payload:orden}
}