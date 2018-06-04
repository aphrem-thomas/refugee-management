import initState from './refugeeInitialState.js';

export default function refreshUpdate(state=initState, action){
    switch(action.type){
        case 'REFRESH':{
            let newState=action.payload;
            return newState;
        }
        default: return state;
    }
}