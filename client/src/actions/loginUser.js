import axios from 'axios';

export const loginUser = (email,password,callback) => async(dispatch) =>{
    try{
        let { data } = await axios.post('/users/login', {email,password});
        dispatch({
            type: 'LOGIN',
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