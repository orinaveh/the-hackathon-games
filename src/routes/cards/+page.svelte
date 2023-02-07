<script lang="ts">
  import * as htmlToImage from 'html-to-image';
  import download from 'downloadjs';
  import cards from './config';
  let page: HTMLElement | null = null;

  let maxPerPage = 9;
  let startFrom = 0;

  $: currentArray = cards.slice(startFrom, startFrom + maxPerPage);

  const downloadImg = () =>
    !!page &&
    htmlToImage
      .toPng(page, { quality: 1, canvasHeight: 2480, canvasWidth: 3508 })
      .then((dataUrl) => {
        download(dataUrl, 'page.png');
      });
</script>

{#if startFrom > 0}
  <span on:click={() => (startFrom -= maxPerPage)}>{'<<'}</span>
{/if}
<div
  bind:this={page}
  class="p-2 flex flex-wrap justify-center gap-2 w-[21cm] h-[29.7cm]"
  on:click={downloadImg}
  on:keypress={downloadImg}
>
  {#each currentArray as card}
    <div
      class="w-[6cm] h-[8cm] flex gap-2 flex-col relative border-black border-4 p-2 bg-white"
      dir="rtl"
    >
      <span class="text-xl underline font-bold !text-black">
        {card.name}
      </span>
      <span class="text-lg !text-black">
        {card.description}
      </span>
      <div class="h-12 w-12 absolute left-2 bottom-2 image" />
    </div>
  {/each}
</div>
{#if startFrom + maxPerPage < cards.length}
  <span on:click={() => (startFrom += maxPerPage)}>{'>>'}</span>{/if}

<style>
  .image {
    background: url('logos/bgCourse.svg');
  }
</style>
