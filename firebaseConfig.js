import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const firebaseConfig = {
  // ...Config của mình
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const dangNhap = async (auth, email, password) => {
  let info;
  let isChecked;
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    info = user;
    isChecked = true;
  } catch (err) {
    console.log(err.code);
    info = err.code;
    isChecked = false;
  }
  return {
    isChecked,
    info,
  };
};

export const dangKy = async (auth, email, password) => {
  let info;
  let isChecked;
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    info = user;
    isChecked = true;
  } catch (err) {
    console.log(err.code);
    info = err.code;
    isChecked = false;
  }
  return {
    isChecked,
    info,
  };
};
