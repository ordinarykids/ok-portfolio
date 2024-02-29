<script>
    import { onMount } from "svelte";
    let scrollY;
    let isScrolled = false;
    let isHovered = false;
    let prevScrollPos = scrollY;
    import NavLink from "../lib/NavLink.svelte";
    let pageTitle = $page.route.id;
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

    function reloadPage() {
        console.log(window.location);
        window.location.href = "/randoms/";
        window.location.reload();
    }
</script>

<div class="container mx-auto px-4">
    <nav
        class={` left-0 top-0 z-10 m-auto  flex w-full max-w-screen-lg  items-center justify-between px-4 transition-all  duration-300`}
        on:mouseenter={handleHover}
        on:mouseleave={handleLeave}
    >
        <div class="container m-auto w-full bg-[#F9F9F9]">
            <div class="tile nav-links col-span-12 mb-0 bg-[#F9F9F9] pt-4">
                <a href="/blog/" class="text-xl font-thin hover:no-underline"
                    >Jason Herring</a
                ><br />
                <!-- <div
                class={` transition-all duration-300 ${
                    isHovered ? "h-24" : "h-0"
                } z-10  overflow-hidden `}
            > -->
                <div
                    class={` transition-all duration-300 ${
                        isHovered ? "h-16" : "h-16"
                    } z-10  overflow-hidden `}
                >
                    <!-- 	<a href="/blog/"  id="bio">Blog</a> <span class="slash">/</span> -->
                    <!-- <a href="./bio.php"  id="bio">Biography</a> <span class="slash">/</span> -->
                    <!-- <a href="/" id="resume">CV RESUME</a>
                    <span class="slash"></span> -->
                    <!-- <a href="resume.php"  id="resume">BOARD CAM [ <span class="liveRed">LIVE </span> ]</a> <span class="slash">/</span>-->
                    <!-- <br /> -->

                    <span class="font-bold">CASE STUDIES</span>

                    <NavLink
                        href="/projects-db/helix"
                        title="Helix"
                        on:navigate={handleNavigate}
                    />
                    <NavLink
                        href="/projects-db/nike-free"
                        title="Nike Free"
                        on:navigate={handleNavigate}
                    />
                    <NavLink
                        href="/projects-db/tracy-chapman"
                        title="Tracy Chapman"
                        on:navigate={handleNavigate}
                    />
                    <NavLink
                        href="/projects-db/nike-free"
                        title="Nike Free"
                        on:navigate={handleNavigate}
                    />
                    <br />
                    <span class="font-bold">EXPERIMENTS</span>
                    <NavLink
                        href="/projects-db/style-gan2"
                        title="Early Covid GANs"
                        on:navigate={handleNavigate}
                    />
                    <NavLink
                        href="/projects/surrealist-dreams"
                        title="Surrealist Dreams"
                        on:navigate={handleNavigate}
                    />
                    <NavLink
                        href="/projects-db/mercurius"
                        title="Mercurius Beer"
                        on:navigate={handleNavigate}
                    />

                    <NavLink
                        href="/projects/kodiak"
                        title="Kodiak"
                        on:navigate={handleNavigate}
                    />

                    <br />
                    <span class="font-bold">RECENT WORK</span>
                    <NavLink
                        href="/projects/aleph"
                        title="Aleph Rebrand"
                        on:navigate={handleNavigate}
                    />
                    <NavLink
                        href="/projects/helix"
                        title="Helix"
                        on:navigate={handleNavigate}
                    />

                    <NavLink
                        href="/projects/kodiak"
                        title="Kodiak"
                        on:navigate={handleNavigate}
                    />
                </div>
                <a href="/randoms/">Randoms</a>
                <div><button on:click={reloadPage}>Reload Page</button></div>
            </div>
            <!-- <div class="font-bold">Logo</div>
    <ul class="flex space-x-4">
        <li class="hover:text-gray-400"><a href="#">Home</a></li>
        <li class="hover:text-gray-400"><a href="#">About</a></li>
        <li class="hover:text-gray-400"><a href="#">Services</a></li>
        <li class="hover:text-gray-400"><a href="#">Contact</a></li>
    </ul> -->
        </div>
    </nav>
</div>
<div class="fixed"></div>
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

    nav-links a:hover {
        text-decoration: underline;
        cursor: pointer;
    }
</style>
