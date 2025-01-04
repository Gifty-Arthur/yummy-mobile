import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD3yynFBd_aH1wKnmIaVU1gWkvQIGtI9oA",
  authDomain: "dress-1f59a.firebaseapp.com",
  projectId: "dress-1f59a",
  storageBucket: "dress-1f59a.appspot.com",
  messagingSenderId: "1028821875162",
  appId: "1:1028821875162:web:4012e8e3545fb2e3a7e8e3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
