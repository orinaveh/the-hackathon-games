<script lang="ts">
	import {
		Dialog,
		DialogOverlay,
		DialogTitle,
		DialogDescription,
		Transition
	} from '@rgossiaux/svelte-headlessui';

	export let isOpen = false;
	export let title = '';
	export let subTitle = '';
</script>

<Transition
	show={isOpen}
	enter="transition duration-100 ease-out"
	enterFrom="transform scale-95 opacity-0"
	enterTo="transform scale-100 opacity-100"
	leave="transition duration-75 ease-out"
	leaveFrom="transform scale-100 opacity-100"
	leaveTo="transform scale-95 opacity-0"
>
	<Dialog
		open={isOpen}
		class="fixed inset-0 z-10 flex justify-center items-center"
		on:close={() => (isOpen = false)}
	>
		<DialogOverlay class="fixed inset-0 bg-black opacity-30" />
		<div
			aria-labelledby="panel"
			class="inline-block w-full max-w-md p-6 overflow-hidden transition-all transform shadow-xl rounded-2xl bg-accent"
		>
			<div class="flex flex-col gap-3 items-start">
				{#if title}<DialogTitle class="mb-2">{title}</DialogTitle>{/if}
				{#if subTitle}<DialogDescription>
						{subTitle}
					</DialogDescription>{/if}

				<slot />

				<div aria-label="buttons">
					<slot name="buttons" />
				</div>
			</div>
		</div>
	</Dialog>
</Transition>
