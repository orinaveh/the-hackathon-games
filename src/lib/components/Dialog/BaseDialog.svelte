<script lang="ts">
  import {
    Dialog,
    DialogOverlay,
    DialogTitle,
    DialogDescription,
  } from '@rgossiaux/svelte-headlessui';

  let isOpen = true;
  let title = '';
  let subTitle = '';
</script>

<Dialog open={isOpen} on:close={() => (isOpen = false)}>
  <DialogOverlay />

  {#if title}<DialogTitle>{title}</DialogTitle>{/if}
  {#if subTitle}<DialogDescription>
    {subTitle}
  </DialogDescription>{/if}

  <slot />

  <div aria-label="buttons">
    <slot name="buttons" />
  </div>
</Dialog>