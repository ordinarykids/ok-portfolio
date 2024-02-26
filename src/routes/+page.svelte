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

<div class="fixed top-0 z-50 w-full bg-white p-2">
    <div class="container m-auto w-3/4">
        <h1 class="text-4xl">Jason Herring</h1>
        <button
            class="w-full rounded border-2 px-4 py-2 text-xs font-semibold transition-colors duration-300 ease-in-out focus:outline-none sm:w-auto"
            on:click={() => toggleButton(1)}
        >
            TracyChapman - 'Expressive Web Design'
        </button>
        <button
            class="w-full rounded border-2 px-4 py-2 text-xs font-semibold transition-colors duration-300 ease-in-out focus:outline-none sm:w-auto"
            on:click={() => toggleButton(2)}
        >
            Nike Free - 'Global Campaigns'
        </button>
        <button
            class="w-full rounded border-2 px-4 py-2 text-xs font-semibold transition-colors duration-300 ease-in-out focus:outline-none sm:w-auto"
            on:click={() => toggleButton(3)}
        >
            KQED - 'The Future of Journalism'
        </button>
    </div>
</div>

<div class="container m-auto w-3/4">
    <Splide bind:this={mySlider} aria-label="My Favorite Images">
        <SplideSlide>
            <!-- <img src="/aleph/peaceout.jpg" alt="collage" class="draggable" /> -->

            <div
                class="container m-0 mb-16 mt-8 sm:columns-1 md:columns-2 lg:columns-3"
                style="column-gap: 3rem"
            >
                <div class="projectHeader mb-4">
                    <img src="/selfie.jpg" alt="collage" class="draggable" />
                    <p class="pb-8 font-bold">
                        As a seasoned Creative Director and strategist based in
                        San Francisco, I bring over two decades of pioneering
                        experience in the software industry. My journey began
                        with groundbreaking site designs characterized by their
                        expressive use of Flash, setting a new standard in early
                        web aesthetics. Transitioning into the era of Web 2.0, I
                        spearheaded the development of cutting-edge
                        applications, utilizing data analytics and user testing
                        to not only achieve but exceed measurable success
                        criteria.
                    </p>

                    <p class="py-8 font-bold">
                        Throughout my career, I have been at the forefront of
                        technological evolution, constantly exploring and
                        adapting to new tools and methodologies. The recent
                        advancements in Artificial Intelligence, particularly in
                        Large Language Models (LLMs) and image generation
                        technologies, have opened up unprecedented possibilities
                        for user experience design. I am eager to leverage my
                        deep understanding of digital innovation and
                        user-centric design principles to pioneer new design
                        patterns. My goal is to seamlessly integrate AI
                        capabilities into user interfaces, creating intuitive
                        and engaging experiences that anticipate and exceed user
                        expectations in the evolving digital landscape.
                    </p>
                </div>

                <h2>Experience</h2>

                <div class="text-xl font-bold">
                    <a href="https://www.aleph.dev" target="_blank">AlephSF</a> -
                    Director of Design and Technology
                </div>
                <div class="font-bold">as</div>
                <div class="text-xs">
                    San Francisco, US – (March 2020 - Present)
                </div>
                <ul>
                    <li>
                        Creative Director of designer and software engineer, UX
                    </li>
                    <li>
                        Joined during the early, dark days of Covid to build a
                        design team. Annual billings were up by 86%
                    </li>
                    <li>
                        Managed multiple projects for high profile Bio-Tech
                        startups including Kodiak, Karius and Helix.
                    </li>
                    <li>
                        Performed coaching of junior developers joining the
                        team, doing frequent pair and mob programming sessions,
                        while working with senior engineers to define roadmaps
                        and feature priorities.
                    </li>
                    <ul>
                        ### Director of Design and Development ***KQED**, San
                        Francisco, US – (August 2018 - February 2020)* -
                        Successfully lead the entire KQED Product team in
                        designing and developing its infratstucture on a -
                        Developed automation workflows for segmented audio feeds
                        distributing KQED’s content to Google Voice - ### Lead
                        UX Designer ***KQED**, San Francisco, US – (January
                        2015- August 2018)* - Successfully created first
                        realtime election dashboard for all down ballot races in
                        the 2016 election. More than 1 million page views of the
                        coverage the - Evaluated new client requirements,
                        defined use cases and maintained a local testing
                        environment. ### Creative Director and partner.
                        Dualforces, *San Francisco, US – (March 2011- December
                        2013)* - Creative applications for Nike, Undftd, Stussy,
                        Docker - Created the 2011 Nike Free Plus 2 global
                        campaign including retail design, influencer workshops
                        at Nike HQ, and the first use of Nike+ data to drive
                        consumer installation. - ### Creative Director, Founder
                        OrdinaryKids, *San Francisco, US – (May 2001- December
                        2015)* - Developed pioneering

                        <p class="pb-4">
                            At a time of exponential innovation in
                            biotechnology, a focus on leveraging genomics at the
                            scale of populations made Helix a vital repository
                            of data and information during the COVID-19
                            pandemic.
                        </p>

                        <p class="py-4">
                            As Helix refined its approach to messaging and other
                            aspects of their brand, the technology they used for
                            publishing content was fragmented and tough to use.
                            Aleph engaged in an ambitious effort to shape a new
                            visual presence around their existing identity, and
                            to deliver a stable-but-malleable content platform
                            to meet a diverse set of requirements with
                            enterprise-level confidence.
                        </p>
                        <p class="py-4">
                            As Helix refined its approach to messaging and other
                            aspects of their brand, the technology they used for
                            publishing content was fragmented and tough to use.
                            Aleph engaged in an ambitious effort to shape a new
                            visual presence around their existing identity, and
                            to deliver a stable-but-malleable content platform
                            to meet a diverse set of requirements with
                            enterprise-level confidence.
                        </p>
                        <p class="py-4">
                            As Helix refined its approach to messaging and other
                            aspects of their brand, the technology they used for
                            publishing content was fragmented and tough to use.
                            Aleph engaged in an ambitious effort to shape a new
                            visual presence around their existing identity, and
                            to deliver a stable-but-malleable content platform
                            to meet a diverse set of requirements with
                            enterprise-level confidence.
                        </p>
                        <p class="py-4">
                            As Helix refined its approach to messaging and other
                            aspects of their brand, the technology they used for
                            publishing content was fragmented and tough to use.
                            Aleph engaged in an ambitious effort to shape a new
                            visual presence around their existing identity, and
                            to deliver a stable-but-malleable content platform
                            to meet a diverse set of requirements with
                            enterprise-level confidence.
                        </p>
                        <img
                            src="/scan.jpg"
                            alt="collage2"
                            class="draggable h-64 py-8"
                        />
                        <p class="py-4">
                            This migration presented us with a few major
                            challenges from the word “go”. We were tasked with
                            refining the online presentation of Helix’s identity
                            and messaging through a comprehensive design
                            process. In addition, we needed to conceptualize and
                            build a tech platform that would modernize their
                            publishing workflows while deftly handling several
                            years of legacy content.
                        </p>

                        <p>
                            Aleph delivered on a purposeful project plan,
                            including the migration of content from multiple
                            legacy platforms, a broad approach to content
                            strategy and management, and a complete interactive
                            design system featuring well-documented processes,
                            usage and development recommendations. We’re proud
                            to support Helix in their mission to innovate with
                            population genomics, and excited to see what’s next.
                        </p>
                    </ul>
                </ul>
            </div>
        </SplideSlide>

        <SplideSlide>
            <img src="/aleph/peaceout.jpg" alt="collage" class="draggable" />

            <div
                class="container m-0 mb-16 mt-8 sm:columns-1 md:columns-2 lg:columns-3"
                style="column-gap: 3rem"
            >
                <div class="projectHeader mb-4">
                    <h1 class="text-4xl">Jason Herring</h1>
                    <img src="/selfie.jpg" alt="collage" class="draggable" />
                    <p class="pb-8 font-bold">
                        As a seasoned Creative Director and strategist based in
                        San Francisco, I bring over two decades of pioneering
                        experience in the software industry. My journey began
                        with groundbreaking site designs characterized by their
                        expressive use of Flash, setting a new standard in early
                        web aesthetics. Transitioning into the era of Web 2.0, I
                        spearheaded the development of cutting-edge
                        applications, utilizing data analytics and user testing
                        to not only achieve but exceed measurable success
                        criteria.
                    </p>

                    <p class="py-8 font-bold">
                        Throughout my career, I have been at the forefront of
                        technological evolution, constantly exploring and
                        adapting to new tools and methodologies. The recent
                        advancements in Artificial Intelligence, particularly in
                        Large Language Models (LLMs) and image generation
                        technologies, have opened up unprecedented possibilities
                        for user experience design. I am eager to leverage my
                        deep understanding of digital innovation and
                        user-centric design principles to pioneer new design
                        patterns. My goal is to seamlessly integrate AI
                        capabilities into user interfaces, creating intuitive
                        and engaging experiences that anticipate and exceed user
                        expectations in the evolving digital landscape.
                    </p>
                </div>

                <h2>Experience</h2>

                <div class="text-xl font-bold">
                    <a href="https://www.aleph.dev" target="_blank">AlephSF</a> -
                    Director of Design and Technology
                </div>
                <div class="font-bold">as</div>
                <div class="text-xs">
                    San Francisco, US – (March 2020 - Present)
                </div>
                <ul>
                    <li>
                        Creative Director of designer and software engineer, UX
                    </li>
                    <li>
                        Joined during the early, dark days of Covid to build a
                        design team. Annual billings were up by 86%
                    </li>
                    <li>
                        Managed multiple projects for high profile Bio-Tech
                        startups including Kodiak, Karius and Helix.
                    </li>
                    <li>
                        Performed coaching of junior developers joining the
                        team, doing frequent pair and mob programming sessions,
                        while working with senior engineers to define roadmaps
                        and feature priorities.
                    </li>
                    <ul>
                        ### Director of Design and Development ***KQED**, San
                        Francisco, US – (August 2018 - February 2020)* -
                        Successfully lead the entire KQED Product team in
                        designing and developing its infratstucture on a -
                        Developed automation workflows for segmented audio feeds
                        distributing KQED’s content to Google Voice - ### Lead
                        UX Designer ***KQED**, San Francisco, US – (January
                        2015- August 2018)* - Successfully created first
                        realtime election dashboard for all down ballot races in
                        the 2016 election. More than 1 million page views of the
                        coverage the - Evaluated new client requirements,
                        defined use cases and maintained a local testing
                        environment. ### Creative Director and partner.
                        Dualforces, *San Francisco, US – (March 2011- December
                        2013)* - Creative applications for Nike, Undftd, Stussy,
                        Docker - Created the 2011 Nike Free Plus 2 global
                        campaign including retail design, influencer workshops
                        at Nike HQ, and the first use of Nike+ data to drive
                        consumer installation. - ### Creative Director, Founder
                        OrdinaryKids, *San Francisco, US – (May 2001- December
                        2015)* - Developed pioneering

                        <p class="pb-4">
                            At a time of exponential innovation in
                            biotechnology, a focus on leveraging genomics at the
                            scale of populations made Helix a vital repository
                            of data and information during the COVID-19
                            pandemic.
                        </p>

                        <p class="py-4">
                            As Helix refined its approach to messaging and other
                            aspects of their brand, the technology they used for
                            publishing content was fragmented and tough to use.
                            Aleph engaged in an ambitious effort to shape a new
                            visual presence around their existing identity, and
                            to deliver a stable-but-malleable content platform
                            to meet a diverse set of requirements with
                            enterprise-level confidence.
                        </p>
                        <p class="py-4">
                            As Helix refined its approach to messaging and other
                            aspects of their brand, the technology they used for
                            publishing content was fragmented and tough to use.
                            Aleph engaged in an ambitious effort to shape a new
                            visual presence around their existing identity, and
                            to deliver a stable-but-malleable content platform
                            to meet a diverse set of requirements with
                            enterprise-level confidence.
                        </p>
                        <p class="py-4">
                            As Helix refined its approach to messaging and other
                            aspects of their brand, the technology they used for
                            publishing content was fragmented and tough to use.
                            Aleph engaged in an ambitious effort to shape a new
                            visual presence around their existing identity, and
                            to deliver a stable-but-malleable content platform
                            to meet a diverse set of requirements with
                            enterprise-level confidence.
                        </p>
                        <p class="py-4">
                            As Helix refined its approach to messaging and other
                            aspects of their brand, the technology they used for
                            publishing content was fragmented and tough to use.
                            Aleph engaged in an ambitious effort to shape a new
                            visual presence around their existing identity, and
                            to deliver a stable-but-malleable content platform
                            to meet a diverse set of requirements with
                            enterprise-level confidence.
                        </p>
                        <img
                            src="/scan.jpg"
                            alt="collage2"
                            class="draggable h-64 py-8"
                        />
                        <p class="py-4">
                            This migration presented us with a few major
                            challenges from the word “go”. We were tasked with
                            refining the online presentation of Helix’s identity
                            and messaging through a comprehensive design
                            process. In addition, we needed to conceptualize and
                            build a tech platform that would modernize their
                            publishing workflows while deftly handling several
                            years of legacy content.
                        </p>

                        <p>
                            Aleph delivered on a purposeful project plan,
                            including the migration of content from multiple
                            legacy platforms, a broad approach to content
                            strategy and management, and a complete interactive
                            design system featuring well-documented processes,
                            usage and development recommendations. We’re proud
                            to support Helix in their mission to innovate with
                            population genomics, and excited to see what’s next.
                        </p>
                    </ul>
                </ul>
            </div>
        </SplideSlide>

        <SplideSlide>
            <img src="/kqed-1/lp1.jpg" alt="collage" class="draggable" />
            <h1 class="m-16 text-4xl">KQED</h1>
            <div
                class="container m-0 mb-16 mt-8 sm:columns-1 md:columns-2 lg:columns-3"
                style="column-gap: 3rem"
            >
                <div class="projectHeader mb-4">
                    <h1 class="text-4xl">Jason Herring</h1>
                    <img src="/selfie.jpg" alt="collage" class="draggable" />
                    <p class="pb-8 font-bold">
                        As a seasoned Creative Director and strategist based in
                        San Francisco, I bring over two decades of pioneering
                        experience in the software industry. My journey began
                        with groundbreaking site designs characterized by their
                        expressive use of Flash, setting a new standard in early
                        web aesthetics. Transitioning into the era of Web 2.0, I
                        spearheaded the development of cutting-edge
                        applications, utilizing data analytics and user testing
                        to not only achieve but exceed measurable success
                        criteria.
                    </p>

                    <p class="py-8 font-bold">
                        Throughout my career, I have been at the forefront of
                        technological evolution, constantly exploring and
                        adapting to new tools and methodologies. The recent
                        advancements in Artificial Intelligence, particularly in
                        Large Language Models (LLMs) and image generation
                        technologies, have opened up unprecedented possibilities
                        for user experience design. I am eager to leverage my
                        deep understanding of digital innovation and
                        user-centric design principles to pioneer new design
                        patterns. My goal is to seamlessly integrate AI
                        capabilities into user interfaces, creating intuitive
                        and engaging experiences that anticipate and exceed user
                        expectations in the evolving digital landscape.
                    </p>
                </div>

                <h2>Experience</h2>

                <div class="text-xl font-bold">
                    <a href="https://www.aleph.dev" target="_blank">AlephSF</a> -
                    Director of Design and Technology
                </div>
                <div class="font-bold">as</div>
                <div class="text-xs">
                    San Francisco, US – (March 2020 - Present)
                </div>
                <ul>
                    <li>
                        Creative Director of designer and software engineer, UX
                    </li>
                    <li>
                        Joined during the early, dark days of Covid to build a
                        design team. Annual billings were up by 86%
                    </li>
                    <li>
                        Managed multiple projects for high profile Bio-Tech
                        startups including Kodiak, Karius and Helix.
                    </li>
                    <li>
                        Performed coaching of junior developers joining the
                        team, doing frequent pair and mob programming sessions,
                        while working with senior engineers to define roadmaps
                        and feature priorities.
                    </li>
                    <ul>
                        ### Director of Design and Development ***KQED**, San
                        Francisco, US – (August 2018 - February 2020)* -
                        Successfully lead the entire KQED Product team in
                        designing and developing its infratstucture on a -
                        Developed automation workflows for segmented audio feeds
                        distributing KQED’s content to Google Voice - ### Lead
                        UX Designer ***KQED**, San Francisco, US – (January
                        2015- August 2018)* - Successfully created first
                        realtime election dashboard for all down ballot races in
                        the 2016 election. More than 1 million page views of the
                        coverage the - Evaluated new client requirements,
                        defined use cases and maintained a local testing
                        environment. ### Creative Director and partner.
                        Dualforces, *San Francisco, US – (March 2011- December
                        2013)* - Creative applications for Nike, Undftd, Stussy,
                        Docker - Created the 2011 Nike Free Plus 2 global
                        campaign including retail design, influencer workshops
                        at Nike HQ, and the first use of Nike+ data to drive
                        consumer installation. - ### Creative Director, Founder
                        OrdinaryKids, *San Francisco, US – (May 2001- December
                        2015)* - Developed pioneering

                        <p class="pb-4">
                            At a time of exponential innovation in
                            biotechnology, a focus on leveraging genomics at the
                            scale of populations made Helix a vital repository
                            of data and information during the COVID-19
                            pandemic.
                        </p>

                        <p class="py-4">
                            As Helix refined its approach to messaging and other
                            aspects of their brand, the technology they used for
                            publishing content was fragmented and tough to use.
                            Aleph engaged in an ambitious effort to shape a new
                            visual presence around their existing identity, and
                            to deliver a stable-but-malleable content platform
                            to meet a diverse set of requirements with
                            enterprise-level confidence.
                        </p>
                        <p class="py-4">
                            As Helix refined its approach to messaging and other
                            aspects of their brand, the technology they used for
                            publishing content was fragmented and tough to use.
                            Aleph engaged in an ambitious effort to shape a new
                            visual presence around their existing identity, and
                            to deliver a stable-but-malleable content platform
                            to meet a diverse set of requirements with
                            enterprise-level confidence.
                        </p>
                        <p class="py-4">
                            As Helix refined its approach to messaging and other
                            aspects of their brand, the technology they used for
                            publishing content was fragmented and tough to use.
                            Aleph engaged in an ambitious effort to shape a new
                            visual presence around their existing identity, and
                            to deliver a stable-but-malleable content platform
                            to meet a diverse set of requirements with
                            enterprise-level confidence.
                        </p>
                        <p class="py-4">
                            As Helix refined its approach to messaging and other
                            aspects of their brand, the technology they used for
                            publishing content was fragmented and tough to use.
                            Aleph engaged in an ambitious effort to shape a new
                            visual presence around their existing identity, and
                            to deliver a stable-but-malleable content platform
                            to meet a diverse set of requirements with
                            enterprise-level confidence.
                        </p>
                        <img
                            src="/scan.jpg"
                            alt="collage2"
                            class="draggable h-64 py-8"
                        />
                        <p class="py-4">
                            This migration presented us with a few major
                            challenges from the word “go”. We were tasked with
                            refining the online presentation of Helix’s identity
                            and messaging through a comprehensive design
                            process. In addition, we needed to conceptualize and
                            build a tech platform that would modernize their
                            publishing workflows while deftly handling several
                            years of legacy content.
                        </p>

                        <p>
                            Aleph delivered on a purposeful project plan,
                            including the migration of content from multiple
                            legacy platforms, a broad approach to content
                            strategy and management, and a complete interactive
                            design system featuring well-documented processes,
                            usage and development recommendations. We’re proud
                            to support Helix in their mission to innovate with
                            population genomics, and excited to see what’s next.
                        </p>
                    </ul>
                </ul>
            </div>
        </SplideSlide>
    </Splide>
</div>
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
