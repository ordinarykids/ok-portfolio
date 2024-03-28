<script>
    import { onMount } from "svelte";
    let animate = true;

    onMount(() => {
        const shapes = document.querySelectorAll(".shape");
        shapes.forEach((shape) => {
            shape.addEventListener("mouseover", () => {
                animate = !animate;
            });
        });
    });
</script>

<svg viewBox="0 0 400 400" class="h-full w-full">
    <defs>
        <radialGradient
            id="gradient"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
        >
            <stop offset="0%" style="stop-color:#7F00FF;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#E100FF;stop-opacity:1" />
        </radialGradient>
    </defs>

    <rect x="0" y="0" width="400" height="400" fill="url(#gradient)" />

    <g class="shape" transform="translate(200, 200)">
        <circle
            cx="0"
            cy="0"
            r="100"
            fill="none"
            stroke="white"
            stroke-width="4"
        >
            {#if animate}
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0"
                    to="360"
                    dur="10s"
                    repeatCount="indefinite"
                />
            {/if}
        </circle>
        <circle cx="0" cy="-80" r="20" fill="white">
            {#if animate}
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0"
                    to="360"
                    dur="5s"
                    repeatCount="indefinite"
                />
            {/if}
        </circle>
    </g>

    <g class="shape" transform="translate(200, 200) rotate(120)">
        <path
            d="M0,-100 L50,-40 L50,40 L0,100 L-50,40 L-50,-40 Z"
            fill="none"
            stroke="white"
            stroke-width="4"
        >
            {#if animate}
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="360"
                    to="0"
                    dur="8s"
                    repeatCount="indefinite"
                />
            {/if}
        </path>
    </g>

    <g class="shape" transform="translate(200, 200) rotate(240)">
        <path
            d="M0,-100 C-50,-50 -50,50 0,100 C50,50 50,-50 0,-100"
            fill="none"
            stroke="white"
            stroke-width="4"
        >
            {#if animate}
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0"
                    to="360"
                    dur="6s"
                    repeatCount="indefinite"
                />
            {/if}
        </path>
    </g>
</svg>

<style>
    svg {
        background: radial-gradient(circle at center, #7f00ff, #e100ff);
    }
</style>
