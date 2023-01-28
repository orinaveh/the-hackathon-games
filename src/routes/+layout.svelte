<script lang="ts">
	import '../globals.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { auth, firestore } from '$lib/firebase';
	import { FirebaseApp, userStore } from 'sveltefire';
	const user = userStore(auth);
</script>

<svelte:head>
	<title>The Hackathon Games</title>
</svelte:head>
<FirebaseApp {auth} {firestore}>
	<main class=" dark:bg-zinc-800 bg-zinc-300 w-screen h-screen flex items-center flex-col gap-8 p-4">
		<Navbar name={$user?.displayName ?? ''} />
	<slot />
	<Footer />
	</main>
</FirebaseApp>
