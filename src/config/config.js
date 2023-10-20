// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const config = {
  firebaseConfig: {
    apiKey: "AIzaSyC9Fmg7Xpwls3UIOUVdbfmzLq6CimzJ-ls",
    authDomain: "saray-nakliyat.firebaseapp.com",
    projectId: "saray-nakliyat",
    storageBucket: "saray-nakliyat.appspot.com",
    messagingSenderId: "743041601532",
    appId: "1:743041601532:web:66712a9e90b1e260db6c79",
    measurementId: "G-R7BB6JJ45P",
  },
};

const appFBConfig = initializeApp(config.firebaseConfig);
export const authFBConfig = getAuth(appFBConfig);
export default appFBConfig;
