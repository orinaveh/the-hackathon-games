<script lang="ts">
	import { getDoc, type DocumentReference } from 'firebase/firestore';
	import IconButton from './Buttons/IconButton.svelte';
	import MdAdd from 'svelte-icons/md/MdAdd.svelte';
	import HoverDiv from './HoverDiv.svelte';

	interface Group {
		color: string;
		name: string;
		powerUpPoints: number;
		currentMission?: DocumentReference;
	}
	export let group: Group;
</script>

<HoverDiv
	class="px-8 py-2 flex flex-col gap-2 relative rounded items-center w-64 h-40 bg-zinc-900 hocus:shadow-lg hocus:bg-accent transition-colors"
	let:onHover
>
<header class="flex justify-center items-center gap-2">
	<h3 class="text-center font-bold uppercase">{group.name}</h3>
	<div class="rounded-[50%] w-4 h-4" style={`background-color: ${group.color}`}
	/>
</header>
	<span>{group.powerUpPoints || 0} Power Up Points Available</span>
	{#if group.currentMission}
		{#await getDoc(group.currentMission) then resolve}
			<span class="bg-yellow-400 !text-black">Current Mission: {resolve.get('name')}</span>
		{/await}
	{/if}
	<IconButton on:click={() => console.log('Dialog')} class="!absolute !bottom-2 !right-2 !bg-secondary focus:opacity-100 {!onHover && 'opacity-0'}"><MdAdd /></IconButton>
</HoverDiv>
