export default function(state = {}, action) {
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                currentUser: action.currentUser
            };
        default:
            return state;
    }
}