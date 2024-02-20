<script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import projects from "../../project-data.json";
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    // or only core styles
    import '@splidejs/svelte-splide/css';

    export async function get() {
        return {
            status: 200,
            body: {
                projects,
            },
        };
    }

    onMount(() => {
        let test = get();
        console.log($page.url);

        $: console.log($page.params);

        let projectSlug = $page.params.project;
    });
    let test = get();
    console.log(test);

    $: console.log($page.params);

    let projectSlug = $page.params.project;
</script>


<div class="container m-auto w-3/4">
    <Splide aria-label="My Favorite Images">
        <SplideSlide>
            <img src="/aleph/peaceout.jpg" alt="collage" />
        </SplideSlide>
        <SplideSlide>
            <img src="/helix/2.webp" alt="collage" />
        </SplideSlide>
      </Splide>
</div>


<div class="container m-auto w-3/4">
    <div class="container m-0 w-1/2">
        <h1>Helix</h1>
        <h2>
            Real time coding using TouchDesigner to explore AI generated
            moodboards
        </h2>

        <p class="py-4">
            At a time of exponential innovation in biotechnology, a focus on
            leveraging genomics at the scale of populations made Helix a vital
            repository of data and information during the COVID-19 pandemic.
        </p>

        <p class="py-4">
            As Helix refined its approach to messaging and other aspects of
            their brand, the technology they used for publishing content was
            fragmented and tough to use. Aleph engaged in an ambitious effort to
            shape a new visual presence around their existing identity, and to
            deliver a stable-but-malleable content platform to meet a diverse
            set of requirements with enterprise-level confidence.
        </p>

        <p class="py-4">
            This migration presented us with a few major challenges from the
            word “go”. We were tasked with refining the online presentation of
            Helix’s identity and messaging through a comprehensive design
            process. In addition, we needed to conceptualize and build a tech
            platform that would modernize their publishing workflows while
            deftly handling several years of legacy content.
        </p>

        <p>
            Aleph delivered on a purposeful project plan, including the
            migration of content from multiple legacy platforms, a broad
            approach to content strategy and management, and a complete
            interactive design system featuring well-documented processes, usage
            and development recommendations. We’re proud to support Helix in
            their mission to innovate with population genomics, and excited to
            see what’s next.
        </p>
    </div>


    <div class="tile col-span-7">
       

        <Splide aria-label="My Favorite Images">
            <SplideSlide>
                <img src="/aleph/peaceout.jpg" alt="collage" />
            </SplideSlide>
            <SplideSlide>
                <img src="/aleph/2.webp" alt="collage" />
            </SplideSlide>
          </Splide>


        <h5>
            Numerous collages mixing Midjounery generated images and traditonal
            design elements were developed during my leadership at Aleph.
        </h5>
        <iframe
            width="100%"
            height="600px"
            src="https://www.youtube.com/embed/FFpdC3Qbggg"
            title="Random Stuff on my Figma Boards"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
        ></iframe>
        <h5>
            Overview of the product photography we art directed and had
            photographed.
        </h5>
    </div>
</div>
