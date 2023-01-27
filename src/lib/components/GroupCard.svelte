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
	class="px-8 py-2 flex flex-col gap-2 rounded max-w-md h-40 bg-zinc-900"
	style={`border: 4px solid ${group.color}`}
>
	<h3 class="text-center font-bold">{group.name}</h3>
	<span>PowerUp Points: {group.powerUpPoints}</span>
	{#if group.currentMission}
		{#await getDoc(group.currentMission) then resolve}
			<span class="bg-yellow-400 !text-black">Current Mission: {resolve.get('name')}</span>
		{/await}
	{/if}
</div>
