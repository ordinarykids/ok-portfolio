<script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    // import { Wiper } from "../../lib/wiper.svelte";
</script>

<div class="container mx-auto max-w-screen-lg">
    <div class="mx-4 grid gap-4 md:grid-cols-1 lg:mx-0 lg:grid-cols-1">
        <div>
            <!-- Content for first column -->
            <div class="w-full">
                <div class="underLine"></div>
                <h2>Info</h2>
            </div>
        </div>
        <div></div>
    </div>
</div>

<style>
    @font-face {
        font-family: "Geist-Medium";

        src: url("/fonts/Geist/Geist-Medium.woff2") format("woff2");
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: "Geist-Medium", serif, HelveticaNeue, "Inter", sans-serif;
    }
</style>
