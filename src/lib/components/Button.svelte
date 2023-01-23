<script lang="ts">
  import { Button } from '@svelteuidev/core';
  import type { ButtonProps } from '@svelteuidev/core';
  type $$Props = ButtonProps;
</script>

<Button on:click on:keydown {...$$props} class="p-2 bg-cyan-700 rounded active:bg-cyan-900 hover:bg-cyan-800"><slot /></Button>