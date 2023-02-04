<script lang="ts">
	import { useFullScreen } from '$lib/refHooks/useFullScreen';
	import { onDestroy } from 'svelte';
	import MdOpenInNew from 'svelte-icons/md/MdOpenInNew.svelte';
	import MdExitToApp from 'svelte-icons/md/MdExitToApp.svelte';
	import IconButton from './Buttons/IconButton.svelte';

	export let date: Date;
	export let title: string;
	export let message: string;

	let isfullScreen = false;

	let screenH: number, screenW: number;

	message ||= 'Brake Time';

	const getInitialTimeLeft = (date: Date, currentDate: Date) =>
		(date.getTime() - currentDate.getTime()) / 1000;

	let initialTimeLeft = getInitialTimeLeft(date, new Date());
	const syncTime = 30;
	let syncCycle = 0;
	if (initialTimeLeft <= 0) {
		initialTimeLeft = 0;
	}

	$: hours = (initialTimeLeft / 3600).toString().split('.');
	$: minutes = (+`0.${hours[1]}` * 60).toString().split('.');
	$: seconds = (+`0.${minutes[1]}` * 60).toString().split('.');

	const interval = setInterval(() => {
		initialTimeLeft--;
		syncCycle++;
		if (syncCycle === syncTime) {
			syncCycle = 0;
			initialTimeLeft = getInitialTimeLeft(date, new Date());
		}
		if (initialTimeLeft <= 0) {
			clearInterval(interval);
			initialTimeLeft = 0;
		}
	}, 1000);

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div
	use:useFullScreen={isfullScreen}
	bind:clientHeight={screenH}
	bind:clientWidth={screenW}
	class="flex relative flex-col justify-center items-center gap-4 p-4 w-full bg-black"
>
	{#if initialTimeLeft}<h2
			class="{isfullScreen && 'leading-[9rem]'} text-4xl text-center font-stopwatch"
			style={isfullScreen ? `font-size: ${screenW / 15}px` : ''}
		>
			{title}
		</h2>{/if}
	<p
		class="font-bold text-center font-stopwatch uppercase text-7xl md:text-9xl {!initialTimeLeft &&
			'animate-shift'} {isfullScreen && 'leading-[9rem]'}"
		style={isfullScreen ? `font-size: ${screenW / 6}px` : ''}
	>
		{initialTimeLeft
			? `${hours[0].length === 1 ? 0 : ''}${hours[0]}:${minutes[0].length === 1 ? 0 : ''}${
					minutes[0]
			  }:${seconds[0].length === 1 ? 0 : ''}${seconds[0]}`
			: message}
	</p>
	<IconButton
		class="!absolute right-4 bottom-4 invisible md:visible"
		on:click={() => (isfullScreen = !isfullScreen)}
		>{#if isfullScreen} <MdExitToApp /> {:else} <MdOpenInNew />{/if}</IconButton
	>
</div>
