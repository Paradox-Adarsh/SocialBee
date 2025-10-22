import axios from "axios";
import {API_BASE_URL as url }from "../../config/api";

export const loginActionUser=(loginData)=>async(dispatch)=>{
    dispatch({type:"LOGIN_REQUEST"});
    try {
        const {data}=await axios.post(`${url}/auth/signin`,loginData.data);
        if(data.jwt){
            localStorage.setItem("jwt",data.jwt);
        }
        

        dispatch({type:"LOGIN_SUCCESS",payload:data.jwt});
    } catch (error) {
         dispatch({type:"LOGIN_FAILURE",payload:error});
        
    }
}


export const registerActionUser=(loginData)=>async(dispatch)=>{
    dispatch({type:"LOGIN_REQUEST"});
    try {
        const {data}=await axios.post(`${url}/auth/signup`,loginData.data);
        if(data.jwt){
            localStorage.setItem("jwt",data.jwt);
        }
        

        dispatch({type:"LOGIN_SUCCESS",payload:data.jwt});
    } catch (error) {
         dispatch({type:"LOGIN_FAILURE",payload:data.jwt});
        
    }
}