


const initialState={
    allDogs:[],
    copyDogs:[],
    detailDog:[]
    
}

const reducer=(state=initialState, action)=>{
    switch(action.type){
        case 'GET_DOGS': return { ...state, allDogs:action.payload, copyDogs:action.payload };
        case 'GET_BY_NAME':{
            const filByName=state.copyDogs.filter((dog)=>dog.name===action.payload);
            return{...state,
            allDogs:filByName}};
        case 'GET_BY_ID': return { ...state,detailDog:action.payload};
        case 'FILTER_TEMPERAMENT_API':{ 
            const dogFiltered=state.copyDogs.filter((dog)=>dog.temperament?.includes(action.payload) && typeof dog.id=== 'number');
         return {...state, allDogs:dogFiltered}
        };
        case 'FILTER_TEMPERAMENT_DB':{ 
            const dogFiltered=state.copyDogs.filter((dog)=> dog.temperament?.includes(action.payload) && !/^\d+$/.test(dog.id));
          return {...state, allDogs:dogFiltered}
        };
        case 'FILTER_BY_ORDEN':{
            const dogfilter=[...state.copyDogs].sort((a,b)=>{
               
                if(action.payload==='Peso-Asc'){
                return parseInt(a.weight_max)-parseInt(b.weight_max)};
                if(action.payload==='Peso-Desc'){
                     return parseInt(b.weight_max)-parseInt(a.weight_max)
                    }
                if(action.payload==='A-Z'){
                    return a.name.localeCompare(b.name)
                } else{return b.name.localeCompare(a.name)}
                

            });
        return{...state, allDogs:dogfilter}}
        
    
    default: return {...state}
    }
}
export default reducer;