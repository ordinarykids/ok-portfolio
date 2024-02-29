<script lang="ts">
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";

    import { navigating } from "$app/stores";
    import { onMount } from "svelte";
    import "@fontsource/lekton";
    import "@fontsource/ibm-plex-mono/200-italic.css";
    import "@fontsource/ibm-plex-mono/400-italic.css";
    import "@fontsource/ibm-plex-mono/700-italic.css";
    import "../app.css";
    import { fade, fly } from "svelte/transition";
    import { cubicIn, cubicOut } from "svelte/easing";
    export let data;

    let animate = !$navigating;
    let loaded = false;

    onMount(() => (loaded = true));
</script>

<Header />

{#if animate}
    {#if loaded}
        <div in:fade={{ delay: 500, duration: 500 }} class="contents">
            <slot />
        </div>
    {/if}
{:else}
    <slot />
{/if}

<!-- {#key data.pathname}
    <div
        in:fly={{ easing: cubicOut, y: 10, duration: 300, delay: 400 }}
        out:fly={{ easing: cubicIn, y: -10, duration: 300 }}
    >
        <div class="m-auto py-16 sm:w-full sm:px-4">
            <slot />
        </div>
    </div>
{/key} -->

<!-- <div class="container m-auto ">
  <slot />
</div> -->

<Footer />
