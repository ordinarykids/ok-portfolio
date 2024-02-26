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
</script>

<nav
    class={`fixed left-0 top-0  z-10 flex w-full  items-center justify-between transition-all  duration-300`}
    on:mouseenter={handleHover}
    on:mouseleave={handleLeave}
>
    <div class="container m-auto w-3/4 bg-[#F9F9F9]">
        <div class="tile nav-links col-span-12 mb-4 bg-[#F9F9F9] pt-4">
            <a href="/blog/" class="font-bold">Jason Herring</a><br />

            <div
                class={` transition-all duration-300 ${
                    isHovered ? "h-32" : "h-0"
                } z-10  overflow-hidden `}
            >
                <span class="font-bold">Info</span>
                <!-- 	<a href="/blog/"  id="bio">Blog</a> <span class="slash">/</span> -->
                <!-- <a href="./bio.php"  id="bio">Biography</a> <span class="slash">/</span> -->
                <a href="/" id="resume">CV RESUME</a>
                <span class="slash"></span>
                <!-- <a href="resume.php"  id="resume">BOARD CAM [ <span class="liveRed">LIVE </span> ]</a> <span class="slash">/</span>-->
                <br />
                <a href="/projects-db/nike-free/" id="nike-free">
                    Nike Free
                </a><br />
                <a href="/projects-db/helix/" id="nike-free"> Helix </a><br />
                <span class="font-bold">INFORMATION</span>

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
                <br />
                <span class="font-bold">EXPERIMENTS</span>
                <NavLink
                    href="/projects/covid-gans"
                    title="Early Covid GANs"
                    on:navigate={handleNavigate}
                />
                <NavLink
                    href="/projects/surrealist-dreams"
                    title="Surrealist Dreams"
                    on:navigate={handleNavigate}
                />
                <NavLink
                    href="/projects/mercurius"
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

                <br />
                <span class="font-bold">SELECTED KQED PROJECTS</span>
                <NavLink
                    href="/projects/kqed-articles"
                    title="Article Template"
                    on:navigate={handleNavigate}
                />
                <NavLink
                    href="/projects/kqed-lp"
                    title="Election Dashoards"
                    on:navigate={handleNavigate}
                />

                <NavLink
                    href="/projects/kqed-arts-app"
                    title="Arts App"
                    on:navigate={handleNavigate}
                />
            </div>
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

    a:hover {
        text-decoration: underline;
        cursor: pointer;
    }
</style>
