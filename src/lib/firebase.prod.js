import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "",
  authDomain: "yt-react-netflix-clone.firebaseapp.com",
  projectId: "yt-react-netflix-clone",
  storageBucket: "yt-react-netflix-clone.appspot.com",
  messagingSenderId: "821165843463",
  appId: ""
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };