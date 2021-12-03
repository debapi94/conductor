import { initializeApp } from "firebase/app";

//console.log(process.env.FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey: "AIzaSyB9SfX2AQ4wTaTGT2-we3Dl_33M37kIXMY",
  authDomain: "orkes-dev-raj.firebaseapp.com",
  projectId: "orkes-dev-raj",
  storageBucket: "orkes-dev-raj.appspot.com",
  messagingSenderId: "925336252805",
  appId: "1:925336252805:web:cf571c92e3ce550261d4ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;