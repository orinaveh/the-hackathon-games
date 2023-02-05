<script>
  import Button from '$lib/components/Buttons/Button.svelte';
  import FaGoogle from 'svelte-icons/fa/FaGoogle.svelte';
  import { signIn } from '$lib/firebase';
</script>

<Button on:click={signIn} size="xl">
  <span class="whitespace-nowrap">Sign In with</span>
  <FaGoogle slot="rightIcon" />
</Button>
