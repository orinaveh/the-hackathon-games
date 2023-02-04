<script lang="ts">
	import { firestore } from '$lib/firebase';
	import { doc, updateDoc } from 'firebase/firestore';
	import Button from '../Buttons/Button.svelte';
	import BaseDialog from '../Dialog/BaseDialog.svelte';
	import type { Group } from './GroupCard.svelte';

	export let group: Group;
	export let missionName: string | null;
	export let isOpen: boolean;

	const finishMission = async (success = true) => {
		await updateDoc(doc(firestore, 'groups', group.id), {
			...(success && { powerUpPoints: (group?.powerUpPoints ?? 0) + 1 }),
			currentMission: null
		});
		missionName = null;
		isOpen = false;
	};
</script>

<BaseDialog bind:isOpen title="Modify Group - {group?.name}">
	{#if missionName}
		<span class="bg-yellow-400 animate-pulse !text-black text-lg self-center p-1"
			>Current Mission: {missionName}</span
		>
		<div class="flex gap-2 w-full justify-center">
			<Button on:click={() => finishMission(false)} color="red">Mission Failed</Button>
			<Button on:click={() => finishMission()} color="green">Mission Succeeded</Button>
		</div>
	{:else}
		<span>Add Mission</span>
	{/if}
</BaseDialog>
