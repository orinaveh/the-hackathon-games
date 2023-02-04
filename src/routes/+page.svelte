<script lang="ts">
	import { Collection, Doc } from 'sveltefire';
	import { firestore } from '$lib/firebase';
	import Countdown from '$lib/components/Countdown.svelte';
	import GroupCard from '$lib/components/GroupCard/GroupCard.svelte';
</script>

<h1 class="text-center md:text-5xl">Hackathon Dashboard</h1>
<Doc ref="endTime/1" {firestore} let:data={{ time, message, title }}>
	<Countdown {message} title={title || 'Time To Next Brake'} date={time?.toDate()} />
</Doc>
<h2 class="text-center">Groups</h2>
<Collection ref="groups" {firestore} let:data={groups}>
	<section class="flex max-w-6xl text-center justify-evenly md:gap-20 gap-6 flex-wrap">
		{#each groups as group}
			<GroupCard {group} />
		{/each}
	</section>
</Collection>
