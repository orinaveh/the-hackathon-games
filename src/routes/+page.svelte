<script lang="ts">
	import { Collection, Doc } from 'sveltefire';
	import Page from '$lib/components/Page.svelte';
	import { firestore } from '$lib/firebase';
	import Countdown from '$lib/components/Countdown.svelte';
</script>

<Page class="flex gap-2 flex-col"> 
	<Doc ref="endTime/1" firestore={firestore} let:data={{ time, message }}>
        <Countdown {message} title="Time To Next Brake" date={time?.toDate()} />
	</Doc>

    <Collection ref="groups" firestore={firestore} let:data={groups}>
        {#each groups as group}
        <div style={`background-color: ${group.color}`}>
            {group.name}
            {group.powerUpPoints}
        </div>
        {/each}
	</Collection>

</Page>
