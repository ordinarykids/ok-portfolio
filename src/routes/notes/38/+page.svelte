<script>
    import { tweened } from "svelte/motion";
    import { cubicOut } from "svelte/easing";

    const rotation = tweened(0, {
        duration: 4000,
        easing: cubicOut,
    });

    function animate() {
        rotation.set(360);
        setTimeout(() => {
            rotation.set(0);
            animate();
        }, 4000);
    }

    animate();
</script>

<div class="illusion" style="transform: rotate({$rotation}deg)">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
</div>

<style>
    .illusion {
        width: 200px;
        height: 200px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: rotate 4s infinite linear;
    }

    .line {
        position: absolute;
        width: 100%;
        height: 20px;
        background: linear-gradient(
            to right,
            black 0%,
            black 50%,
            white 50%,
            white 100%
        );
        transform-origin: center;
    }

    .line:nth-child(1) {
        transform: rotate(0deg);
    }

    .line:nth-child(2) {
        transform: rotate(30deg);
    }

    .line:nth-child(3) {
        transform: rotate(60deg);
    }

    .line:nth-child(4) {
        transform: rotate(90deg);
    }

    .line:nth-child(5) {
        transform: rotate(120deg);
    }

    .line:nth-child(6) {
        transform: rotate(150deg);
    }

    .line:nth-child(7) {
        transform: rotate(180deg);
    }

    .line:nth-child(8) {
        transform: rotate(210deg);
    }

    .line:nth-child(9) {
        transform: rotate(240deg);
    }

    .line:nth-child(10) {
        transform: rotate(270deg);
    }

    .line:nth-child(11) {
        transform: rotate(300deg);
    }

    .line:nth-child(12) {
        transform: rotate(330deg);
    }
</style>
