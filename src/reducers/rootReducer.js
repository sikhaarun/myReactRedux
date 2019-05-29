const initState={
    username :'',
    email:'',
    password:'',
    userData :{}
}


const rootReducer=(state=initState,action)=>{

    switch(action.type)
    {
        case 'USERS':
                return {
                         ...state,username:action.value
                         }
        case 'LOGIN':
                return {
                    ...state,email:action.value.email ,password:action.value.password,userData:action.value
              }
        case 'SETPASSWORD':
                return {
                    ...state,password:action.value
            }
        case 'SETEMAIL':
                return {
                    ...state,email:action.value
            }
            default:
              return state
    }
    // if(action.type==="USERS")
    // {
    //     return {
    //         ...state,username:action.value
    //     }

    // }
    // else if()
    // if(!action.value)
    // return state;
}


export default rootReducer;