<script lang="ts">
  export let onClick: (e: MouseEvent) => void;
  export let href: string;
</script>

{#if href}
  <a 
    class="button" 
    on:click={onClick} 
    href={href}
  >
    <slot></slot>
  </a>
{:else}
  <button 
    class="button" 
    on:click={onClick}
  >
    <slot></slot>
  </button>
{/if}

<style>
	.button {
    border: 2px solid rgba(0,0,0,0.2);
    font-size: 16px;
    border-radius: 4px;
    background-color: #FEFEFE;
    cursor: pointer;
    line-height: 30px;
  }

  a.button {
    width: 34px;
    text-align: center;
    padding-top: 4px;
    line-height: 26px;
    text-decoration: none;
    color: black;
    padding: 0.4em;
  }

  .button:hover {
    background-color: #F4F4F4;
  }
</style>
