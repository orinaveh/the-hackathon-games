<script>
	import Button from "$lib/components/Button.svelte";
	import { signIn } from "$lib/firebase";
</script>

<Button on:click={signIn}>Click Here To Sign In</Button>