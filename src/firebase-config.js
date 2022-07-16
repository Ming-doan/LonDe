import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyChSZF7dI3dznxi14PLaLLnKUGkrze3b4c",
  authDomain: "learn-on-demand-2c06c.firebaseapp.com",
  projectId: "learn-on-demand-2c06c",
  storageBucket: "learn-on-demand-2c06c.appspot.com",
  messagingSenderId: "52929575237",
  appId: "1:52929575237:web:a91616ef62dadc5534662c",
  measurementId: "G-1LNRBPV41T"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const database = getFirestore(app)
// const analytics = getAnalytics(app);
