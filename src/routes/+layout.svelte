<script>
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
    import "@fontsource/lekton";
    import "@fontsource/ibm-plex-mono/200-italic.css";
    import "@fontsource/ibm-plex-mono/400-italic.css";
    import "@fontsource/ibm-plex-mono/700-italic.css";
    import "../app.css";
    import { fade, fly } from "svelte/transition";
    import { cubicIn, cubicOut } from "svelte/easing";
    export let data;
</script>

<Header />

{#key data.pathname}
    <div
        in:fly={{ easing: cubicOut, y: 10, duration: 300, delay: 400 }}
        out:fly={{ easing: cubicIn, y: -10, duration: 300 }}
    >
        <div class="m-auto max-w-screen-lg py-16 sm:w-full sm:px-4">
            <slot />
        </div>
    </div>
{/key}

<!-- <div class="container m-auto ">
  <slot />
</div> -->

<Footer />
