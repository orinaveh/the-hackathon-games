<script context="module" lang="ts">
	export interface Group {
		color: string;
		name: string;
		powerUpPoints: number;
		currentMission?: DocumentReference;
		id: string;
	}
</script>

<script lang="ts">
	import { getDoc, type DocumentReference } from 'firebase/firestore';
	import { onMount } from 'svelte';
	import MdAdd from 'svelte-icons/md/MdAdd.svelte';
	import IconButton from '../Buttons/IconButton.svelte';
	import HoverDiv from '../HoverDiv.svelte';
	import GroupCardDialog from './GroupCardDialog.svelte';

	let missionName: string;

	onMount(async () => {
		if (group.currentMission) {
			const resolve = await getDoc(group.currentMission);
			missionName = resolve.get('name');
		}
	});

	export let group: Group;
	let isOpen: boolean;
</script>

<HoverDiv
	class="px-8 py-2 flex flex-col gap-2 relative rounded items-center w-64 h-40 bg-zinc-900 hocus:shadow-lg hocus:bg-accent transition-colors"
	let:onHover
>
	<header class="flex justify-center items-center gap-2">
		<h3 class="text-center font-bold uppercase">{group.name}</h3>
		<div class="rounded-[50%] w-4 h-4" style={`background-color: ${group.color}`} />
	</header>
	<span>{group.powerUpPoints || 0} Power Up Points Available</span>
	{#if missionName}
		<span class="bg-yellow-400 animate-pulse !text-black">Current Mission: {missionName}</span>
	{/if}
	<IconButton
		on:click={() => (isOpen = true)}
		class="!absolute !bottom-2 !right-2 !bg-secondary focus:opacity-100 {!onHover && 'opacity-0'}"
		><MdAdd /></IconButton
	>
</HoverDiv>
<GroupCardDialog bind:isOpen {group} bind:missionName />
