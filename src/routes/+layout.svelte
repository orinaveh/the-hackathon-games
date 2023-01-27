<script lang="ts">
	import '../globals.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import { auth, firestore } from '$lib/firebase';
	import { FirebaseApp, userStore } from 'sveltefire';
	const user = userStore(auth);
</script>

<FirebaseApp {auth} {firestore}>
	<Navbar name={$user?.displayName ?? ''} />
	<div class="dark:bg-zinc-800 bg-zinc-300 w-screen h-screen">
		<slot />
	</div>
</FirebaseApp>
