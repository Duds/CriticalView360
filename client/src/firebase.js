// ./client/src/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import axios from 'axios';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

export const register = async ({ username, email, password }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await axios.post('http://localhost:3000/api/user/register', { username, email, uid: userCredential.user.uid });
    return true;
  } catch (error) {
    console.error('Registration Error:', error);
    throw new Error('Failed to register. Please try again.'); // Custom error message
  }
};

export const login = async ({ email, password }) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error) {
    console.error('Login Error:', error);
    throw new Error('Failed to login. Please check your credentials.'); // Custom error message
  }
};

export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    // Password reset email sent successfully
    // You can perform additional actions or display a success message if needed
  } catch (error) {
    console.error('Password Reset Error:', error);
    throw new Error('Failed to send password reset email. Please try again.'); // Custom error message
  }
};
