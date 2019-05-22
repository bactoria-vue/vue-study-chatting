import Vue from 'vue';
import VueFirestore from 'vue-firestore';
import Firebase from 'firebase';

var config = {
    apiKey: "AIzaSyC_fOEvvGj13n2gw8nVMC1HpsIgY7YmgwM",
    authDomain: "firsttest-1bcae.firebaseapp.com",
    databaseURL: "firsttest-1bcae.firebaseapp.com",
    projectId: "firsttest-1bcae",
    storageBucket: "firsttest-1bcae.appspot.com",
    messagingSenderId: "991788347060"
};
Vue.use(VueFirestore)
export const app = Firebase.initializeApp(config);
export const firestore = Firebase.firestore();
