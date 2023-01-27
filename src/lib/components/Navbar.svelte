<script lang="ts">
	import { signOut } from '$lib/firebase';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import GoSignOut from 'svelte-icons/fa/FaSignOutAlt.svelte';
	import IconButton from './Buttons/IconButton.svelte';
	export let name = '';
</script>

<Navbar color="none" navClass="dark:bg-primary p-4 md:p-2" let:hidden let:toggle>
	<NavBrand class="flex gap-4" href="/">
		{#if name}<IconButton color="accent" on:click={signOut}><GoSignOut /></IconButton>{/if}
		<span class="self-center whitespace-nowrap text-xl font-semibold">
			{name ?? 'The Hackathon Games'}
		</span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi href="/" active={true}>Home</NavLi>
		<NavLi href="/about">About</NavLi>
		<NavLi href="/services">Services</NavLi>
		<NavLi href="/pricing">Pricing</NavLi>
		<NavLi href="/contact">Contact</NavLi>
	</NavUl>
</Navbar>
