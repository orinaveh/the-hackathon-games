<script lang="ts">
	import { getDoc, type DocumentReference } from 'firebase/firestore';

	interface Group {
		color: string;
		name: string;
		powerUpPoints: number;
		currentMission?: DocumentReference;
	}
	export let group: Group;
</script>

<div
	class="px-8 py-2 flex flex-col gap-2 rounded items-center max-w-md h-40 bg-zinc-900"
>
<header class="flex justify-center items-center gap-2">
	<h3 class="text-center font-bold uppercase">{group.name}</h3>
	<div class="rounded-[50%] w-4 h-4" style={`background-color: ${group.color}`}
	/>
</header>
	<span>{group.powerUpPoints} Power Up Points Available</span>
	{#if group.currentMission}
		{#await getDoc(group.currentMission) then resolve}
			<span class="bg-yellow-400 !text-black">Current Mission: {resolve.get('name')}</span>
		{/await}
	{/if}
</div>
