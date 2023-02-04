<script lang="ts" context="module">
	export type ButtonProps = UIButtonProps & { color?: Colors };
</script>

<script lang="ts">
	import { Button } from '@svelteuidev/core';
	import type { ButtonProps as UIButtonProps } from '@svelteuidev/core';
	import type { ButtonSlots } from '@svelteuidev/core/types/components/Button/Button.svelte';

	import type { Colors } from '$lib/types/colors';
	type $$Props = ButtonProps;
	type $$Slots = ButtonSlots;
</script>

<Button
	on:click
	on:keydown
	{...$$props}
	class={`hover:!brightness-90 dark:bg-${$$props.color ?? 'primary'} !items-center !gap-2 !p-4 ${
		$$props?.class ?? ''
	} `}
	><slot name="leftIcon" />
	<slot />
	<slot name="rightIcon" />
</Button>
