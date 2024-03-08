<script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import Agent from "./notes/09/Agent.svelte";
    // import { Wiper } from "../../lib/wiper.svelte";
</script>

<div class="container mx-auto max-w-screen-lg">
    <div class="mx-4 grid gap-4 md:grid-cols-1 lg:mx-0 lg:grid-cols-1">
        <div>
            <!-- Content for first column -->
            <div class="w-full">
                <h1 class="py-4 text-6xl font-black">Jason Herring</h1>
                <h2>
                    Creative Director, Engineering Leader, Javascript
                    Enthusiast, Smart Speaker Believer
                </h2>
            </div>
            <div class="max-w-md">
                <div>
                    <p class="my-4">
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
                    <p class="my-4">
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
                    <!-- Replace with your content -->
                    <h3 class="mb-4 mt-16 text-xs">EXPERIENCE</h3>
                    <div class="mb-8">
                        <h4 class="text-xl">Aleph</h4>
                        <div class="text-lg">Director of Technology</div>
                        <div class="sm">MAR 2020 - PRESENT</div>
                        <p>
                            Creative direction and management for an enterprise
                            development studio specializing in React, Node,
                            WordPress and UX.
                        </p>
                        <ul class="list-disc p-4">
                            <li>
                                Increased annual revenue by more than 85% since
                                joining in 2020.
                            </li>
                            <li>
                                Developed a mobile app that helped doctors and
                                clinicians align to strict clinical trial
                                protocols through notifications, emails, and
                                dashboards.
                            </li>
                            <li>
                                Increased Helix’s success metric around user
                                acquisition by over 22%
                            </li>
                        </ul>
                    </div>

                    <div class="my-8">
                        <h4 class="text-xl">KQED</h4>
                        <div class="text-lg">
                            Director of Design and Development
                        </div>
                        <div class="sm">AUG 2018 - MAR 2020</div>
                        <p>
                            Managed product design and engineering teams in
                            launching KQED.org redesign, segmented audio
                            workflows for Newscasts, Google News and voice
                            speakers.
                        </p>
                        <ul class="list-disc p-4">
                            <li>
                                Developed new segmented audio workflow to Google
                                News requested more than 600K audio
                                downloads/month
                            </li>
                            <li>
                                Created Alexa application that allowed members
                                to listen to Pledge Free Stream
                            </li>
                            <li>
                                Successfully recruited and hired 2 UX designers,
                                1 product design lead, and 3 engineers.
                            </li>
                        </ul>
                    </div>

                    <div class=" my-8">
                        <h4 class="text-xl">KQED</h4>
                        <div class="text-lg">Lead UX Designer</div>
                        <div class="sm">JAN 2015 - AUG 2018</div>
                        <p>
                            Built a small team of designers and engineers to
                            redesign and rebuild KQED on a React frontend and an
                            entirely new backend using Node/ElasticSearch
                            managed by WordPress.
                        </p>
                        <ul class="list-disc p-4">
                            <li>
                                Led the design and development of KQED.org with
                                an emphasis on listening KPI. Exceeded goal of
                                4% by more than 3 times.
                            </li>
                            <li>
                                Prototyped and built new election dashboard
                                culminating with more than 1M views on election
                                night 2016
                            </li>
                        </ul>
                    </div>

                    <div class="my-8">
                        <h4 class="text-xl">OrdinaryKids</h4>
                        <div class="text-lg">Founder, Creative Director</div>
                        <div class="sm">JAN 2010 - OCT 2015</div>
                        <p>
                            Founded and managed an award-winning studio
                            recognized for groundbreaking Flash animation and
                            innovative design.
                        </p>
                        <ul class="list-disc p-4">
                            <li>
                                Secured and managed high-profile client projects
                                (MoMA, Nike, Adidas, etc.)
                            </li>
                            <li>
                                Created an animated coloring book web experience
                                for Tracy Chapman that allowed users to color
                                the website while the animations unfolded.
                            </li>
                            <li>
                                Designed and developed a ecommerce experience
                                using Flash and Magento for Stussy.
                            </li>
                        </ul>
                    </div>
                    <div class="my-8">
                        <h4 class="text-xl">DUALFORCES</h4>
                        <div class="text-lg">
                            Founder and Digital Creative Director
                        </div>
                        <div class="sm">JAN 2010 - OCT 2013</div>
                        <p>
                            Developed branded marketing campaigns for Nike,
                            Levis, Undftd.
                        </p>
                        <ul class="list-disc p-4">
                            <li>
                                Creative direction and management over the Nike
                                Free project, which was the first public use of
                                real Nike+data in a marketing campaign.
                            </li>
                            <li>
                                Coordinate influencer campaign for Nike FuelBand
                                in NYC with over 60 events in 90 days.
                            </li>
                        </ul>
                    </div>

                    EDUCATION Hillsborough Community College, Tampa — AA
                    1992-1993 Associate of Arts coursework. University of South
                    Florida, Tampa — N/A 1994 - 1996 Studied English Literature
                    and fell in love with the library and discovered the
                    internet.

                    <h3 class="mb-4 mt-16 text-xs">EDUCATION</h3>
                    <div class="mb-8">
                        <h4 class="text-xl">
                            Hillsborough Community College, Tampa
                        </h4>
                        <div class="text-lg">Associates of the Arts</div>
                        <div class="sm">1992-1993</div>

                        <h4 class="text-xl">
                            University of South Florida, Tampa
                        </h4>
                        <div class="text-lg">Associates of the Arts</div>
                        <div class="sm">1992-1993</div>
                        <p>
                            Studied English Literature and fell in love with the
                            library and discovered the internet.
                        </p>
                    </div>
                </div>
            </div>
        </div>
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

    /* p,
    li {
        font-size: 1rem;
    } */
</style>
