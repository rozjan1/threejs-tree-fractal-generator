import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let scene, camera, renderer, controls;

let treeAngle = Math.PI / 4; // 45 degrees in radians
let treeLength = 5;
let treeDepth = 6;
let treeScale = 0.6;

let treeGroup;

init();
animate();

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 20);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);

    treeGroup = new THREE.Group();
    scene.add(treeGroup);

    createTree();

    window.addEventListener('resize', onWindowResize, false);
}

function createTree() {
    while (treeGroup.children.length) {
        treeGroup.remove(treeGroup.children[0]);
    }

    const material = new THREE.LineBasicMaterial({ color: 0x000000 });

    function addBranch(start, length, angle, depth) {
        if (depth === 0) return;

        const end = new THREE.Vector3(
            start.x + length * Math.sin(angle),
            start.y + length * Math.cos(angle),
            start.z
        );

        const geometry = new THREE.BufferGeometry().setFromPoints([start, end]);
        const line = new THREE.Line(geometry, material);

        treeGroup.add(line);

        const newLength = length * treeScale;

        addBranch(end, newLength, angle - treeAngle, depth - 1);
        addBranch(end, newLength, angle + treeAngle, depth - 1);
    }

    addBranch(new THREE.Vector3(0, 0, 0), treeLength, 0, treeDepth);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}