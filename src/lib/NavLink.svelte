<!-- NavLink.svelte -->
<script>
    export let href;
    export let title;

    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    function handleClick() {
        dispatch("navigate", {
            title,
        });
    }
</script>

<a {href} on:click={handleClick}>{title} </a> /

<style>
    a {
        text-decoration: none;
        color: #333;
        /* display: block; */
    }

    a:hover {
        text-decoration: underline;
    }
</style>
