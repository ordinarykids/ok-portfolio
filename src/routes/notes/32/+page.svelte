<script>
    let response = "";

    async function callAPI() {
        try {
            const res = await fetch("/api/langchain", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (res.ok) {
                const data = await res.json();
                response = data;
            } else {
                console.error("Error:", res.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
</script>

<div class="container mx-auto max-w-screen-lg">
    <div
        class="mx-4 grid gap-4 bg-cyan-50 p-4 md:grid-cols-1 lg:mx-0 lg:grid-cols-2"
    >
        <div>
            <!-- Content for first column -->
            <div class="w-full" style="height: 50vh;">
                <h1 class="py-4 text-6xl font-black">test</h1>
                <button on:click={callAPI}>Call API</button>

                {#if response}
                    <p>{response}</p>
                {/if}
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

    .inputContainer {
        display: flex;
        align-items: baseline;
        margin-bottom: 1rem;
    }

    input {
        margin-right: 0.5rem;
    }

    main {
        max-width: 65rem;
        margin: 0 auto;
    }
</style>
