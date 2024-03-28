<script>
    import { onMount } from "svelte";
    import * as THREE from "three";

    let container;
    let camera, scene, renderer;
    let sphere;

    onMount(() => {
        init();
        animate();
    });

    function init() {
        camera = new THREE.PerspectiveCamera(
            75,
            container.clientWidth / container.clientHeight,
            0.1,
            1000,
        );
        camera.position.z = 5;

        scene = new THREE.Scene();

        const geometry = new THREE.SphereGeometry(2, 16, 16);
        const wireframeMaterial = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            wireframe: true,
        });
        sphere = new THREE.Mesh(geometry, wireframeMaterial);
        scene.add(sphere);

        const triangleGeometry = new THREE.CircleGeometry(0.2, 3);
        const diamondGeometry = new THREE.CircleGeometry(0.2, 4);
        const octagonGeometry = new THREE.CircleGeometry(0.2, 8);

        const shapeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        geometry.vertices = new Float32Array([
            -13.0,
            -1.0,
            1.0, // v0
            1.0,
            -1.0,
            1.0, // v1
            1.0,
            1.0,
            1.0, // v2

            1.0,
            1.0,
            1.0, // v3
            -1.0,
            1.0,
            1.0, // v4
            -1.0,
            -1.0,
            1.0, // v5
        ]);
        geometry.vertices.forEach((vertex) => {
            const shape =
                Math.random() < 0.33
                    ? triangleGeometry
                    : Math.random() < 0.5
                      ? diamondGeometry
                      : octagonGeometry;
            const shapeMesh = new THREE.Mesh(shape, shapeMaterial);
            shapeMesh.position.copy(vertex);
            shapeMesh.lookAt(sphere.position);
            sphere.add(shapeMesh);
        });

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);
    }

    function animate() {
        requestAnimationFrame(animate);
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
</script>

<div class="container" bind:this={container}>
    <!-- ThreeJS canvas will be added here -->
</div>

<style>
    .container {
        @apply h-96 w-full;
    }
</style>
