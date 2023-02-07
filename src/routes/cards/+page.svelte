<script lang="ts">
  import html2pdf from 'html2pdf.js';
  import cards from './config';
  let page: HTMLElement | null = null;

  let maxPerPage = 9;
  let startFrom = 0;

  $: currentArray = cards.slice(startFrom, startFrom + maxPerPage);

  const downloadImg = () =>
    !!page &&
    html2pdf()
      .set({
        filename: `page.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, letterRendering: true },
        jsPDF: { unit: 'cm', format: 'A4', orientation: 'portrait' }
      })
      .from(page)
      .save();
</script>

{#if startFrom > 0}
  <span on:click={() => (startFrom -= maxPerPage)}>{'<<'}</span>
{/if}
<div
  bind:this={page}
  class="p-2 flex flex-wrap justify-center gap-2 w-[210mm] mt-4"
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
      <img src="logos/courseLogo.png" class="h-12 w-12 absolute left-2 bottom-2" />
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
