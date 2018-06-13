import axios from 'axios';

export const getInfo = ({ userId , token }) => async (dispatch) => {
    try {
        console.log('getInfo: ', userId, token );
        let { data } = await axios({
            method: 'get',
            url: `/users/info/${userId}`,
            headers: { 'Authorization': `Bearer ${token}` }
        });
        console.log('schedule: ', data.mealSchedule);
        dispatch({
            type: 'FETCH_SCHEDULE',
            payload: {
                schedule: data.mealSchedule,
                name: "",
                email: "",
                username: "",
                calories: ""
            }
        });
    } catch (error) {
        console.log('fetchSchedule error: ', error);
    }
};