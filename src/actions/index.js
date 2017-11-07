import firebase from 'firebase';

import { FETCH_COMPANIES,
        FETCH_COMPANIES_SUCCESS,
        FETCH_COMPANIES_ERROR,
        LOGIN_USER,
        LOGIN_USER_SUCCESS
} from './types'

const config = {
    apiKey: "AIzaSyCsF_5ujmdysGbvSbVoRJUp2zRUVNNcHH0",
    authDomain: "jobs-a6e28.firebaseapp.com",
    databaseURL: "https://jobs-a6e28.firebaseio.com",
    projectId: "jobs-a6e28",
    storageBucket: "jobs-a6e28.appspot.com",
    messagingSenderId: "824551680009"
  };
  const app = firebase.initializeApp(config);
  const database = firebase.database().ref();
  const companiesRef = database.child('companies');

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
                loginUserSuccess(dispatch, result.user);
                console.log(result.user);
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export function loginUserSuccess(dispatch, user) {
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: user
    });
  }

export function fetchCompanies () {
    return (dispatch, getState) => {
        const companies = getState().companies;
        dispatch({
            type: FETCH_COMPANIES
        });
        companiesRef.on('value', snapshot => {
            dispatch({
                type: FETCH_COMPANIES_SUCCESS,
                payload: snapshot.val()
            });
        }, function(error) {
            console.log("ERROR FETCHCOMPANIES "+error);
            dispatch({
                type: FETCH_COMPANIES_ERROR,
                payload: error
            });
        })
    }
}

