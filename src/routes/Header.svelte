<script>

import { slide } from 'svelte/transition'
    let isExpanded = false
    let isExpanded2 = false

    function clickHandler() {
      isExpanded = !isExpanded
    }
    function clickHandler2() {
		  isExpanded2 = !isExpanded2
	  }
    function clickHandlerAll() {
      isExpanded = !isExpanded
		  isExpanded2 = !isExpanded2
	  }
</script>

<nav class="fixed m-4 p-8 w-64 text-white bg-black z-50">
  <h1 class="text-2xl">Jason Herring</h1>
	<button on:click={clickHandler}>Menu</button>
	{#if isExpanded}
	<ul  transition:slide>
		<li class="px-2 py-1">Bio</li>
    <li class="px-2 py-1"><a href="/projects/surrealist-dreams"  on:click={clickHandler} class="hover:underline">Experiments</a></li>
		<button class="px-2 py-1" on:click={clickHandler2}>Work</button>
		{#if isExpanded2}
			<ul  transition:slide>
				<li class="px-4 py-1"><a href="/projects/aleph"  on:click={clickHandlerAll} class="hover:underline">Aleph</a></li>
				<li class="px-4 py-1"><a href="/projects/helix"  on:click={clickHandlerAll} class="hover:underline">Helix</a></li>
        <li class="px-4 py-1"><a href="/projects/aleph"  on:click={clickHandlerAll} class="hover:underline">KQED</a></li>
			</ul>
			{/if}
		<li>Projects</li>
		<li>Contact</li>
	</ul>
	{/if}
</nav>