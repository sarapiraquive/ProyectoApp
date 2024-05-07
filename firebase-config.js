import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAKzN341vmSxKlf9Z1HOxhtWJb9zscS_ZI",
  authDomain: "odisea-48ec8.firebaseapp.com",
  projectId: "odisea-48ec8",
  storageBucket: "odisea-48ec8.appspot.com",
  messagingSenderId: "42835133409",
  appId: "1:42835133409:web:be5e94faa4a219eb7248a0",
  measurementId: "G-YYR6RD5V1V"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);