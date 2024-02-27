<script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import projects from "../../project-data.json";
    export let data;

    $: currentProject = projects.data.find(
        (project) => project.attributes.slug === data.project,
    );
</script>

<div class="container mx-auto">
    <div class="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
        <div>
            <!-- Content for first column -->
            <div class="w-full">
                <p>
                    <img
                        class="w-full"
                        alt="feature project image "
                        src={currentProject.attributes.featuredImage.data
                            .attributes.url}
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
        </div>
        <div>
            <!-- Content for second column -->

            <div class="tile col-span-8">
                {#if currentProject.attributes.specialsauce}
                    <div class="mx-8 mb-8 w-full">
                        <iframe
                            class="mb-8 aspect-video w-full"
                            src="https://www.youtube.com/embed/pkqYRPCBCDM"
                            title="Nike Free Plus 2 -  Halftone Video"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                        {@html currentProject.attributes.specialsauce}
                    </div>
                {/if}

                {#each currentProject.attributes.projectImages.data as projectImage, i}
                    <div class="mx-8">
                        <img
                            class="w-full pb-4"
                            src={projectImage.attributes.url}
                            alt="portilio images"
                        />

                        {#if projectImage.attributes.caption}
                            <p class="mb-8 w-full p-4">
                                {projectImage.attributes.caption}
                            </p>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>

<style>
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: "Helvetica Neue", HelveticaNeue, "Inter", sans-serif;
    }
</style>
