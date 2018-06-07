var axios =require('axios');

export function refresh(data){
    console.log("inside refresh");
    return({'type':"REFRESH", 'payload':data});
}

export function fetch(id, callback){
    return(function(dispatch){
        return axios.get("https://hps-bna-client.mybluemix.net/getAssetDetails",{
            params: {
                param0: 'Refugee',
                param1:id
            }
          }).then((response)=>{
        console.log(response.data);    
        dispatch(refresh(response.data));
        }).catch((error)=>{throw(error);});
    })
}

export function updateVaccineRecord(id){
    return(function(dispatch){
        return axios.post("").then(()=>{
            dispatch(fetch(id));
        })
    })
}

export function updateMedicalRecord(id){
    return(function(dispatch){
        return axios.post("").then(()=>{
            dispatch(fetch(id));
        })
    })
}