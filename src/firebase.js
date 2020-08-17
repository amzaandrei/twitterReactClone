import firebase from 'firebase'
var firebaseConfig = {
apiKey: "AIzaSyD9bzDC1Pf0-LR03Osx0qCFz_WCEVNai6c",
authDomain: "gm-scoala-altfel.firebaseapp.com",
databaseURL: "https://gm-scoala-altfel.firebaseio.com",
projectId: "gm-scoala-altfel",
storageBucket: "gm-scoala-altfel.appspot.com",
messagingSenderId: "860094858526",
appId: "1:860094858526:web:636a0fd2be590101c4750f"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;