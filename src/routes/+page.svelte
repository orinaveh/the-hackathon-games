<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { signOut } from '$lib/firebase';
	import { User } from 'sveltefire';
</script>

<User let:user>
	Hello {user?.displayName}
	<Button on:click={signOut}>Sign Out</Button>
</User>
