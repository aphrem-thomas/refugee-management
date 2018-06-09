import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter,Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { combineReducers } from 'redux';
import {refreshUpdate,doctorDetails} from './components/reducers/reducer_refugee.js';
import {refresh_vaccine,refresh_medicine,refresh_syringe,refresh_blood} from './components/reducers/reducer_supply.js';
import { applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
const TheReducer=combineReducers({
    RefugeeDetails:refreshUpdate,
    VaccineDetails:refresh_vaccine,
    MedicineDetails:refresh_medicine,
    SyringeDetails:refresh_syringe,
    BloodDetails:refresh_blood,
    DoctorDetails:doctorDetails

});
const store= createStore(TheReducer,applyMiddleware(thunk,reduxImmutableStateInvariant()));

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>

, document.getElementById('root'));
registerServiceWorker();
