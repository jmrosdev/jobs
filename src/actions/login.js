import firebase from 'firebase';

import { 
        LOGIN_USER,
        LOGIN_USER_SUCCESS
} from './types'

export function loginUser (email, password) {
    return (dispatch) => {
        dispatch({
            type: LOGIN_USER
        });
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch((error) => {
                console.log(error);
                // return;
            });
    }
}

export function loginUserGoogle () {
    const provider = new firebase.auth.GoogleAuthProvider();
    return (dispatch) => {
        dispatch({
            type: LOGIN_USER
        });
        return firebase.auth().signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: LOGIN_USER_SUCCESS,
                    payload: result.user
                  });
            })
            .catch((error) => {
                console.log(error);
                dispatch({
                    type: LOGIN_USER_ERROR,
                    payload: result
                  });
            })
    }
}