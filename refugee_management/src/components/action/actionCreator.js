var axios =require('axios');

export function refresh(data){
    console.log("inside refresh");
    return({'type':"REFRESH", 'payload':data});
}

export function fetch(id, callback){
    console.log("inside fetch");
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

export function updateVaccineRecord(id,data){
    return(function(dispatch){
        return axios.post("https://hps-bna-client.mybluemix.net/calltransaction",
                {params:data}
    ).then(()=>{
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


export function refresh_blood(data){
    return({'type':"REFRESH_BLOOD", 'payload':data});
}

export function refresh_syringe(data){
    return({'type':"REFRESH_SYRINGE", 'payload':data});
}

export function refresh_vaccine(data){
    return({'type':"REFRESH_VACCINE", 'payload':data});
}

export function refresh_medicine(data){
    return({'type':"REFRESH_MEDICINE", 'payload':data});
}

export function blood(){
    return(function(dispatch){
        return axios.get("https://hps-bna-client.mybluemix.net/getAssetDetails",{
            params: {
                param0: 'Blood',
                param1:'all'
            }
          }).then((response)=>{
        console.log(response.data);    
        dispatch(refresh_blood(response.data));
        }).catch((error)=>{throw(error);});
    })

}

export function Vaccine(){
    return(function(dispatch){
        return axios.get("https://hps-bna-client.mybluemix.net/getAssetDetails",{
            params: {
                param0: 'Vaccine',
                param1:'all'
            }
          }).then((response)=>{
        console.log(response.data);    
        dispatch(refresh_blood(response.data));
        }).catch((error)=>{throw(error);});
    })
}

export function Medicine(){
    return(function(dispatch){
        return axios.get("https://hps-bna-client.mybluemix.net/getAssetDetails",{
            params: {
                param0: 'Medicine',
                param1:'all'
            }
          }).then((response)=>{
        console.log(response.data);    
        dispatch(refresh_blood(response.data));
        }).catch((error)=>{throw(error);});
    })
}

export function Syringe(){
    return(function(dispatch){
        return axios.get("https://hps-bna-client.mybluemix.net/getAssetDetails",{
            params: {
                param0: 'Syringe',
                param1:'all'
            }
          }).then((response)=>{
        console.log(response.data);    
        dispatch(refresh_blood(response.data));
        }).catch((error)=>{throw(error);});
    })
}

export function updateDoctor(value){
    return({"type":"DOC_DTL","payload":value})
}