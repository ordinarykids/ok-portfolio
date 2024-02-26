<script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import SplideShow from "@/Splideshow.svelte";
    export const prerender = false;
    export const router = false;

    import { Splide, SplideSlide } from "@splidejs/svelte-splide";
    // or only core styles
    import "@splidejs/svelte-splide/css";

    let slideshowImages = ["/aleph/peaceout.jpg", "/art/blush.jpg"];

    function toggleButton(slide) {
        mySlider.go(slide - 1);
        window.scrollTo(0, 0);
    }

    let mySlider;
    onMount(() => {
        console.log(mySlider.splide);
    });
</script>

<div class="container m-auto w-3/4"></div>

<style>
    h2 {
        padding-bottom: 1rem;
    }
    li {
        padding-bottom: 1rem;
    }
    a {
        text-decoration: underline;
        cursor: pointer;
    }
    a:hover {
        text-decoration: none;
        cursor: pointer;
    }
</style>
