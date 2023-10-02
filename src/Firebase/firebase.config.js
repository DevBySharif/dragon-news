
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBi9lnUVz8vRYARUu2q1RyL37tCSHAG_BA",
  authDomain: "dragon-news-6618d.firebaseapp.com",
  projectId: "dragon-news-6618d",
  storageBucket: "dragon-news-6618d.appspot.com",
  messagingSenderId: "482913326096",
  appId: "1:482913326096:web:24e69263ce307ba2296695"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth