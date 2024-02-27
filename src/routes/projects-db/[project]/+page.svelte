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
    class="container grid w-full gap-16 sm:m-4 sm:w-full sm:grid-cols-12 md:w-full md:grid-cols-12 lg:m-auto lg:grid-cols-12"
>
    <div class="tile col-span-12 md:col-span-12 lg:col-span-4">
        <p>
            <img
                src={currentProject.attributes.featuredImage.data.attributes
                    .url}
            />
        </p>
        <h1 class="py-4 text-6xl font-black">
            {currentProject.attributes.title}
        </h1>

        <h2 class="font-this text-xl">
            {@html currentProject.attributes.shortdescription}
        </h2>
        <div>{@html currentProject.attributes.longdescription}</div>

        <div class="underLine"></div>
        <h2>Info</h2>
    </div>

    <div class="tile col-span-8">
        {#if currentProject.attributes.specialsauce}
            <p class="mb-8 w-full">
                {@html currentProject.attributes.specialsauce}
            </p>
        {/if}

        {#each currentProject.attributes.projectImages.data as projectImage, i}
            <div class="mx-8">
                <img class="w-full pb-4" src={projectImage.attributes.url} />

                {#if projectImage.attributes.caption}
                    <p class="mb-8 w-full p-4">
                        {projectImage.attributes.caption}
                    </p>
                {/if}
            </div>
        {/each}
        <!--
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
        </h5> -->
    </div>
</div>
