<script lang="ts">
	import { onDestroy } from 'svelte';

	export let date: Date;
	export let title: string;
    export let message: string;
	const currentDate = new Date();

    message ||= 'Brake Time';

	let initialTimeLeft = (date.getTime() - currentDate.getTime()) / 1000;
	if (initialTimeLeft <= 0) {
		initialTimeLeft = 0;
	}

	$: hours = (initialTimeLeft / 3600).toString().split('.');
	$: minutes = (+`0.${hours[1]}` * 60).toString().split('.');
	$: seconds = (+`0.${minutes[1]}` * 60).toString().split('.');

	const interval = setInterval(() => {
		initialTimeLeft--;
		if (initialTimeLeft <= 0) {
			clearInterval(interval);
			initialTimeLeft = 0;
		}
	}, 1000);

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div class="flex flex-col items-center gap-4 my-4 w-full bg-black">
	{#if initialTimeLeft}<h2 class="text-4xl font-stopwatch">{title}</h2>{/if}
	<p class={`text-9xl font-bold text-center font-stopwatch uppercase ${!initialTimeLeft && 'animate-shift'}`}>
		{initialTimeLeft
			? `${hours[0].length === 1 ? 0 : ''}${hours[0]}:${minutes[0].length === 1 ? 0 : ''}${
					minutes[0]
			  }:${seconds[0].length === 1 ? 0 : ''}${seconds[0]}`
			: message}
	</p>
</div>
