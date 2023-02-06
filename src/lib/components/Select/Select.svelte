<script lang="ts">
    import {
      Menu,
      MenuButton,
      MenuItems,
      MenuItem,
    } from '@rgossiaux/svelte-headlessui';

    export let title = 'More';
    export let items: { label: string, value: string }[] = [];
    export let onClick: () => void;
  </script>
  
  <Menu>
    <MenuButton>{title}</MenuButton>
    <MenuItems>
        {#each items as item}
            <MenuItem on:click={onClick}>
            {item.label}
          </MenuItem>     
        {/each}
    </MenuItems>
  </Menu>
  