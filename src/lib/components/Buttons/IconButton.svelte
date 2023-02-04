<script lang="ts">
	import Button from './Button.svelte';
	import type { ButtonProps } from './Button.svelte';

	type $$Props = ButtonProps;
</script>

<Button
	on:click
	on:keydown
	{...$$props}
	class={`!rounded-[50%] !p-2 !flex !justify-center !items-center ${$$props.class}`}
	><slot /></Button
>
