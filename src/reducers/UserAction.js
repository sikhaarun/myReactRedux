import axios from 'axios';

export const getUserName=(res)=>{

    return {type : 'USERS' ,value:res }
}

export const Login =(res)=>{
    return {type :'LOGIN' , value :res}
}

export const setPassword =(res)=>{
    return {type :'SETPASSWORD' , value :res}
}


export const setEmail =(res)=>{
    return {type :'SETEMAIL' , value :res}
}


export const MapDispatchUsers=(dispatch)=>{
    return{
        getUserName:()=>{
            dispatch(getUserName('sikha'));
        },
        setPassword:(password)=>{
            dispatch(setPassword(password));
        },
        setEmail:(email)=>{
            dispatch(setEmail(email));
        },
        Login:(email,password)=>{
            console.log("inside MapDispatchUsers")
            console.log(email)
            console.log(password)
        axios.post('http://localhost:5000/api/users/login', { email : email,password:password  })
                .then(res => {
                console.log(res);
                console.log(res.data);
                dispatch(Login(res));
         })

        }
    }


}


export default MapDispatchUsers