import axios from 'axios';

export const RegisterUser = (email,password,username,name,callback) => async(dispatch) =>{
    try{
        let { data } = await axios.post('/users/register', {email,password,username,name});
        dispatch({
            type: 'REGISTER',
            payload:{
                user: data.user,
                token: data.token
            }
        });
        callback();
    }
    catch(err) {
        console.log(err);
    }
};