var axios =require('axios');

export function refresh(data){
    return({'type':"REFRESH", 'payload':data});
}

export function fetch(id){
    console.log("inside fetch");
    return(function(dispatch){
        return axios.get("").then((data)=>{
            dispatch(refresh(data));
        })
    })
}

export function updateVaccineRecord(id){
    return(function(dispatch){
        return axios.post("").then(()=>{
            fetch(id);
        })
    })
}

export function updateMedicalRecord(id){
    return(function(dispatch){
        return axios.post("").then(()=>{
            fetch(id);
        })
    })
}