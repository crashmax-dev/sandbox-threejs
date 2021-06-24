import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
export declare class Sandbox {
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    mesh: THREE.Mesh<THREE.BoxGeometry, THREE.MeshNormalMaterial>;
    controls: OrbitControls;
    stats: Stats;
    constructor();
    fpsMonitor(): void;
    render(): void;
}
