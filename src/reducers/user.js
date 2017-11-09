import { 
    LOGIN_USER_ERROR,
    LOGIN_USER_SUCCESS 
} from '../actions/types';


const initialState = {
    name: '',
    email: '',
    photoUrl: '',
    error: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
        const {displayName, email, photoURL} = action.payload
            return {
                ...state,
                name: displayName,
                email: email,
                photoUrl: photoURL
            }
        break;
        case LOGIN_USER_ERROR:
            return {
                ...state,
                error: true
            }
        }
             
    return state;
}