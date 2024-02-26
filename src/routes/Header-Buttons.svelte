<script>
    import { onMount } from "svelte";
    let scrollY;
    let isScrolled = false;
    let isHovered = false;
    let prevScrollPos = scrollY;
    import NavLink from "../lib/NavLink.svelte";
    let pageTitle = "Jason Herring";
    import { page } from "$app/stores";
    console.log($page.route.id);
    function handleNavigate(event) {
        pageTitle = event.detail.title;
    }

    const handleScroll = () => {
        const currentScrollPos = scrollY;

        if (prevScrollPos > currentScrollPos) {
            isScrolled = false;
        } else {
            isScrolled = true;
        }

        prevScrollPos = currentScrollPos;
    };

    const handleHover = () => {
        isHovered = true;
    };

    const handleLeave = () => {
        isHovered = false;
    };

    onMount(() => {
        window.addEventListener("scroll", handleScroll);
    });
    let isBlack = false;

    function toggleButton() {
        isBlack = !isBlack;
    }
</script>

<svelte:window bind:scrollY />

<!--
<div class="container grid grid-cols-1 fixedHeader ">
    <div class="row">

        <div class="eightcol" id="titleHeader">


            <br />





        </div>
        <div class="twocol" id="titleHeader">
        </div>
        <div class="twocol last">
            <h4></h4>
            <a href="mailto:jason@ordinarykids.com">Jason@OrdinaryKids.com</a>

        </div>
    </div>
</div> -->

<style>
    .nav-links {
        text-decoration: uppercase;
    }

    a:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    button {
        /* Ensure the button is massive */
        width: 120px; /* Adjust the width as needed */
        height: 50px; /* Adjust the height as needed */
    }
</style>
