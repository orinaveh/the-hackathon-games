import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { goto } from '$app/navigation';

const firebaseConfig = {
	apiKey: 'AIzaSyA97hO8IRNTJLkPSDiPLpD9axWmwxJdkqY',
	authDomain: 'hackathon-games.firebaseapp.com',
	projectId: 'hackathon-games',
	storageBucket: 'hackathon-games.appspot.com',
	messagingSenderId: '773979290894',
	appId: '1:773979290894:web:1eadb30f85f6d242096b5f',
	measurementId: 'G-BNMY2D5F9L'
};

const provider = new GoogleAuthProvider();
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);

export const signIn = () =>
	signInWithPopup(auth, provider).then((result) => {
		// This gives you a Google Access Token. You can use it to access the Google API.
		const credential = GoogleAuthProvider.credentialFromResult(result);
		if (credential) {
			const user = result.user;
			auth.updateCurrentUser(user);
		}
		// ...
	});

export const signOut = () => { 
	auth.signOut();
	goto('/login');
};
