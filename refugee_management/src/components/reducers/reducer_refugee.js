import initState from './refugeeInitialState.js';
import docState from './doctorInitialState.js';
import childInitState from './childrenInitialState.js';
import parentInitState from './parentInitState.js';

export function refreshUpdate(state=initState, action){
    switch(action.type){
        case 'REFRESH':{
            let newState=action.payload;
            return newState;
        }
        default: return state;
    }
}

export function childRecord(state=childInitState,action){
    switch(action.type){
        case 'ADDCHILD':{
            return [...state,action.payload]
        }
        default : return state;
    }
}

export function parentRecord(state=parentInitState,action){
    switch(action.type){
        case 'ADDPARENT':{
            return [...state,action.payload]
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

