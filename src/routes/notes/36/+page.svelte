<script>
    import { onMount } from "svelte";
    import * as THREE from "three";

    let container;
    let camera, scene, renderer;
    let geometry, material, mesh;

    onMount(() => {
        // Set up the scene
        scene = new THREE.Scene();

        // Set up the camera
        camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000,
        );
        camera.position.z = 5;

        // Set up the renderer
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        // Create sacred geometry - Merkaba
        const merkabaMaterial = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            wireframe: true,
        });

        const tetrahedronGeometry1 = new THREE.TetrahedronGeometry(1);
        const tetrahedron1 = new THREE.Mesh(
            tetrahedronGeometry1,
            merkabaMaterial,
        );
        tetrahedron1.position.y = -1;
        scene.add(tetrahedron1);

        const tetrahedronGeometry2 = new THREE.TetrahedronGeometry(2);
        const tetrahedron2 = new THREE.Mesh(
            tetrahedronGeometry2,
            merkabaMaterial,
        );
        tetrahedron2.position.y = -1;
        tetrahedron2.rotation.x = Math.PI;
        scene.add(tetrahedron2);

        const tetrahedronGeometry3 = new THREE.TetrahedronGeometry(1);
        const tetrahedron3 = new THREE.Mesh(
            tetrahedronGeometry3,
            merkabaMaterial,
        );
        tetrahedron3.position.y = -1;
        tetrahedron3.rotation.x = Math.PI;
        scene.add(tetrahedron3);

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        // Animation loop
        function animate() {
            requestAnimationFrame(animate);

            tetrahedron1.rotation.y += 0.01;
            tetrahedron2.rotation.y -= 0.01;
            tetrahedron3.rotation.z -= 0.01;
            tetrahedron3.rotation.x -= 0.01;

            renderer.render(scene, camera);
        }

        animate();
    });
</script>

<div class="container" bind:this={container}>
    <!-- ThreeJS canvas will be added here -->
</div>

<style>
    .container {
        @apply h-screen w-full;
    }
</style>
