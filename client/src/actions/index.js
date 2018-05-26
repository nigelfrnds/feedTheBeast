import axios from 'axios';

export const fetchUser = (user,password) => async(dispatch) =>{
    try{
        let { data } = await axios.get('/user/login');
        
    }
    catch(err) {
        console.log(err);
    }
};