<script lang="ts">
  import { signOut } from '$lib/firebase';
  import GoSignOut from 'svelte-icons/fa/FaSignOutAlt.svelte';
  import IconButton from './Buttons/IconButton.svelte';
  export let name = '';
</script>

<navbar class="dark:bg-primary flex justify-between py-4 px-8 w-screen">
  <div class="flex gap-4" href="/">
    {#if name}<IconButton color="accent" on:click={signOut}><GoSignOut /></IconButton>{/if}
    <span class="self-center whitespace-nowrap text-xl font-semibold hidden md:block">
      {name}
    </span>
  </div>
  <span class="self-center whitespace-nowrap text-xl font-semibold"> The Hackathon Games </span>
</navbar>
