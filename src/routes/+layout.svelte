<script>
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
    import "@fontsource/lekton";
    import "@fontsource/ibm-plex-mono/200-italic.css";
    import "@fontsource/ibm-plex-mono/400-italic.css";
    import "@fontsource/ibm-plex-mono/700-italic.css";
    import "../app.css";
    import HeaderButtons from "./Header-Buttons.svelte";
</script>

<!-- <div class="container m-auto ">
  <slot />
</div> -->
<Header />
<div class="mt-24 py-16">
    <slot />
</div>

<Footer />
