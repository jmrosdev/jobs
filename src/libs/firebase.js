import * as firebase from 'firebase'
let database
export const init = () => {
  let config = {
    apiKey: "AIzaSyCsF_5ujmdysGbvSbVoRJUp2zRUVNNcHH0",
    authDomain: "jobs-a6e28.firebaseapp.com",
    databaseURL: "https://jobs-a6e28.firebaseio.com",
    projectId: "jobs-a6e28",
    storageBucket: "jobs-a6e28.appspot.com",
    messagingSenderId: "824551680009"
  };
  firebase.initializeApp(config)
  database = firebase.database().ref('companies')
}