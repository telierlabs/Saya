import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "vynix-stream.firebaseapp.com",
  projectId: "vynix-stream",
  storageBucket: "vynix-stream.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456:web:abcdef"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logoutUser = () => signOut(auth);
export { onAuthStateChanged };
