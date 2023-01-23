<script>
	import { auth, firestore } from '$lib/firebase';
	import { FirebaseApp } from 'sveltefire';

	import '../globals.css';    
</script>

<FirebaseApp {auth} {firestore}>
	<div class="dark:bg-slate-800 bg-slate-300 w-screen h-screen">
		<slot />
	</div>
</FirebaseApp>
