import initState from './refugeeInitialState.js';
import docState from './doctorInitialState.js';

export function refreshUpdate(state=initState, action){
    switch(action.type){
        case 'REFRESH':{
            let newState=action.payload;
            return newState;
        }
        default: return state;
    }
}

export function doctorDetails(state=docState,action){
    switch(action.type){
        case 'DOC_DTL':{
            let newState=action.payload;
            return newState;
        }
        default:return state;
    }
}

