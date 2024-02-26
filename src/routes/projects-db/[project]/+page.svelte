<script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import projects from "../../project-data.json";
    export let data;

    $: currentProject = projects.data.find(
        (project) => project.attributes.slug === data.project,
    );
</script>

<div
    class="container grid w-full gap-4 sm:m-4 sm:w-full sm:grid-cols-12 md:w-full md:grid-cols-12 lg:m-auto lg:grid-cols-12"
>
    <div class="tile col-span-12 md:col-span-12 lg:col-span-4">
        <h1 class="text-3xl">{currentProject.attributes.title}</h1>
        <h2>
            Real time coding using TouchDesigner to explore AI generated
            moodboards
        </h2>

        <div>{@html currentProject.attributes.description}</div>

        <div class="underLine"></div>
        <h2>Info</h2>
        <p>
            <img
                src={currentProject.attributes.featuredImage.data.attributes
                    .url}
            />
        </p>
        <div class="">
            .
            <div>
                <h2>Tags</h2>
                <ul>
                    <li>Creative Direction</li>
                    <li>UX Design</li>
                    ≥
                    <li>Moodboards</li>
                    <li>Web Developement</li>
                </ul>
            </div>
            <div>
                <h2>Credits</h2>
                <ul>
                    <li>Jason Herring - Creative Director</li>
                    <li>Sony Maharjan- UX Designer</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="tile col-span-8">
        {#each currentProject.attributes.projectImages.data as projectImage, i}
            <div class="mx-8">
                <img class="w-full p-4" src={projectImage.attributes.url} />
                <p class="mb-8 w-full p-4">{projectImage.attributes.caption}</p>
            </div>
        {/each}

        <img src="/aleph/peaceout.jpg" alt="collage" />
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
