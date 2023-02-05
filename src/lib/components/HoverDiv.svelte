<script lang="ts">
  export let onHover = false;
</script>

<div
  {...$$props}
  on:mouseenter={() => (onHover = true)}
  on:focus={() => (onHover = true)}
  on:blur={() => (onHover = false)}
  on:mouseleave={() => (onHover = false)}
>
  <slot {onHover} />
</div>
