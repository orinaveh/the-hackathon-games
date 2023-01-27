<script lang="ts">
	import { Collection, Doc } from 'sveltefire';
	import Page from '$lib/components/Page.svelte';
	import { firestore } from '$lib/firebase';
	import Countdown from '$lib/components/Countdown.svelte';
	import GroupCard from '$lib/components/GroupCard.svelte';
</script>

<Page class="flex gap-2 flex-col">
	<Doc ref="endTime/1" {firestore} let:data={{ time, message, title }}>
		<Countdown {message} title={title || 'Time To Next Brake'} date={time?.toDate()} />
	</Doc>
	<h2 class="text-center">Groups</h2>
	<Collection ref="groups" {firestore} let:data={groups}>
		<section class="p-4 flex justify-evenly">
			{#each groups as group}
				<GroupCard {group} />
			{/each}
		</section>
	</Collection>
</Page>
