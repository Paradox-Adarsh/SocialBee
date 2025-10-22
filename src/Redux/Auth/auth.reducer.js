const intialState={
    jwt:null,
    error:null,
    Loading:false
}


const authReducer=(state=intialState,action)=>{


    switch(action.type){
        case "LOGIN_REQUEST":
        case "REGISTER_REQUEST":
            return {...state ,loading:true,error:null}
        case "LOGIN_SUCCESS":
        case "REGISTER_SUCCESS":
            return {...state,loading:false,jwt:action.payload}
        case "LOGIN_FAILURE":
        case "REGISTER__FAILURE":
            return {...state,loading:false,error:action.payload}
       default:
           return state;



    }
}