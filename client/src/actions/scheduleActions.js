import axios from 'axios';

export const fetchSchedule = ({ userId , token }) => async (dispatch) => {
    try {
        console.log('fetchSchedule: ', userId, token );
        let { data } = await axios({
            method: 'get',
            url: `/schedules/users/${userId}`,
            headers: { 'Authorization': `Bearer ${token}` }
        });
        console.log('schedule: ', data.mealSchedule);
        dispatch({
            type: 'FETCH_SCHEDULE',
            payload: {
                schedule: data.mealSchedule
            }
        });
    } catch (error) {
        console.log('fetchSchedule error: ', error);
    }
};