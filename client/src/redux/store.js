import {createStore , applyMiddleware, compose} from 'redux';
import ThunkMiddleware from 'redux-thunk'; //para manejar acciones asincronicas
import reducer from './reducer.js'
const composeEnhacers=window.__REDUX__DEVTOOLS__EXTENSION__COMPOSE__ || compose;

const store= createStore(
    reducer,
    composeEnhacers(applyMiddleware(ThunkMiddleware))
 )
 export default store;


