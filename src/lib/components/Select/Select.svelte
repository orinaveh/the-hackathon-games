<script lang="ts">
  import { Menu, MenuButton, MenuItems, MenuItem } from '@rgossiaux/svelte-headlessui';

  type Item = { label: string; value: any };
  export let title = 'More';
  export let items: Item[] = [];
  export let selected: Item;
</script>

<Menu>
  <MenuButton class="rounded bg-secondary p-2">{title}</MenuButton>
  <MenuItems class="bg-secondary flex max-h-40 flex-col overflow-y-scroll rounded mt-1">
    {#each items as item}
      <MenuItem on:click={() => (selected = item)} class="p-2 rounded">
        {item.label}
      </MenuItem>
    {/each}
  </MenuItems>
</Menu>
