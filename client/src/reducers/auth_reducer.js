export default function(state = {}, action) {
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            };
        default:
            return state;
    }
};