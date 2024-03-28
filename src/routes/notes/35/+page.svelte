<script>
    import { onMount } from "svelte";
    import * as THREE from "three";

    let container;
    let camera, scene, renderer;
    let geometry, material, mesh;

    onMount(() => {
        // Setup scene, camera, and renderer
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(
            35,
            window.innerWidth / window.innerHeight,
            0.9,
            1000,
        );
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
        container.appendChild(renderer.domElement);

        // Create sacred geometry - Merkaba
        geometry = new THREE.OctahedronGeometry(1.3, 10);
        material = new THREE.MeshBasicMaterial({
            color: 0x33ff44,
            wireframe: true,
            transparent: false,
            opacity: 0.7,
        });
        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        camera.position.z = 5;

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            mesh.rotation.x += 0.01;
            mesh.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        animate();
    });
</script>

<div class="container" bind:this={container}>
    <!-- ThreeJS Canvas will be added here -->
</div>

<style>
    .container {
        @apply h-screen w-full;
    }
</style>
