import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from '../Components/Controls/OrbitControl.js';
import { TransformControls } from '../Components/Controls/TransformControls.js';
import { STLLoader } from '../Components/Controls/STLLoader';

const ThreePage: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const aspect = window.innerWidth / window.innerHeight;
    const frustumSize = 5;

    const cameraPersp = new THREE.PerspectiveCamera(50, aspect, 0.1, 100);
    const cameraOrtho = new THREE.OrthographicCamera(
      -frustumSize * aspect,
      frustumSize * aspect,
      frustumSize,
      -frustumSize,
      0.1,
      100
    );
    let currentCamera: THREE.Camera = cameraPersp;
    currentCamera.position.set(5, 2.5, 5);

    const scene = new THREE.Scene();
    scene.add(new THREE.GridHelper(5, 10, 0x888888, 0x444444));
    scene.add(new THREE.AmbientLight(0xffffff));

    const light = new THREE.DirectionalLight(0xffffff, 4);
    light.position.set(1, 1, 1);
    scene.add(light);

    // STL Loader
    const loader = new STLLoader();
    const stlMeshes: THREE.Mesh[] = [];

    const loadSTL = (path: string, position: THREE.Vector3) => {
      loader.load(
        process.env.PUBLIC_URL + path,
        (geometry) => {
          const material = new THREE.MeshStandardMaterial({ color: 0x999999 });
          const mesh = new THREE.Mesh(geometry, material);
          mesh.rotation.x = -Math.PI / 2;
          mesh.scale.set(0.01, 0.01, 0.01);
          mesh.position.copy(position); // Set mesh position here
          scene.add(mesh);
          stlMeshes.push(mesh); // Keep track for raycasting
          render();
        },
        undefined,
        (err: ErrorEvent) => {
          console.error('Error loading STL:', err);
        }
      );
    };

    // Load all STL files
    loadSTL('/models/mounting-base.stl', new THREE.Vector3(0, 0, 0));
    loadSTL('/models/gripper.stl', new THREE.Vector3(0, 1, 0));
    loadSTL('/models/arm-top-extension.stl', new THREE.Vector3(-1, 1, 0));
    loadSTL('/models/arm-base.stl', new THREE.Vector3(0, .3, 0));

    // Controls
    const orbit = new OrbitControls(currentCamera, renderer.domElement);
    orbit.update();
    orbit.addEventListener('change', render);

    interface TransformControlsWithAxes extends TransformControls {
      showX: boolean;
      showY: boolean;
      showZ: boolean;
      camera?: THREE.Camera;
      size: number;
    }

    const control = new TransformControls(currentCamera, renderer.domElement) as TransformControlsWithAxes;
    (control as any).visible = false; // Start hidden
    control.addEventListener('change', render);
    control.addEventListener('dragging-changed', (event: any) => {
      orbit.enabled = !event.value;
    });
    scene.add(control as unknown as THREE.Object3D);

    // Raycaster setup
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, currentCamera);
    }
    animate();
    const onMouseClick = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse, currentCamera);

      const intersects = raycaster.intersectObjects(stlMeshes);
      if (intersects.length > 0) {
        const selectedMesh = intersects[0].object as THREE.Mesh;
        control.attach(selectedMesh);
        (control as any).visible = true; // Show when mesh is selected
      } else {
        control.detach();
        (control as any).visible = false;// Hide when clicking empty space
      }
      animate();
      console.log('Intersects:', intersects);
    };
    
    window.addEventListener('click', onMouseClick);

    function onWindowResize() {
      const aspect = window.innerWidth / window.innerHeight;
      cameraPersp.aspect = aspect;
      cameraPersp.updateProjectionMatrix();

      cameraOrtho.left = cameraOrtho.bottom * aspect;
      cameraOrtho.right = cameraOrtho.top * aspect;
      cameraOrtho.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
      animate();
    }

    function render() {
      renderer.render(scene, currentCamera);
    }

    window.addEventListener('resize', onWindowResize);

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'q':
          control.setSpace(control.space === 'local' ? 'world' : 'local');
          break;
        case 'Shift':
          control.setTranslationSnap(1);
          control.setRotationSnap(THREE.MathUtils.degToRad(15));
          control.setScaleSnap(0.25);
          break;
        case 'w':
          control.setMode('translate');
          break;
        case 'e':
          control.setMode('rotate');
          break;
        case 'r':
          control.setMode('scale');
          break;
        case 'c': {
          const position = currentCamera.position.clone();
          currentCamera =
            (currentCamera as any).isPerspectiveCamera ? cameraOrtho : cameraPersp;
          currentCamera.position.copy(position);
          orbit.object = currentCamera;
          interface TransformControlsWithCamera extends TransformControls {
            camera: THREE.Camera;
          }

          const control = new TransformControls(currentCamera, renderer.domElement) as TransformControlsWithCamera;
          control.camera = currentCamera;
          currentCamera.lookAt(orbit.target);
          onWindowResize();
          break;
        }
        case 'v': {
          const randomFoV = Math.random() + 0.1;
          const randomZoom = Math.random() + 0.1;
          cameraPersp.fov = randomFoV * 160;
          cameraOrtho.bottom = -randomFoV * 500;
          cameraOrtho.top = randomFoV * 500;
          cameraPersp.zoom = randomZoom * 5;
          cameraOrtho.zoom = randomZoom * 5;
          onWindowResize();
          break;
        }
        case '+':
        case '=':
          if (control?.size !== undefined) {
            control.setSize(control.size + 0.1);
          }
          break;
        case '-':
        case '_':
          if (control?.size !== undefined) {
            control.setSize(Math.max(control.size - 0.1, 0.1));
          }
          break;
        case 'x':
          control.showX = !control.showX;
          break;
        case 'y':
          control.showY = !control.showY;
          break;
        case 'z':
          control.showZ = !control.showZ;
          break;
        case ' ':
          control.enabled = !control.enabled;
          break;
        case 'Escape':
          control.reset();
          break;
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'Shift') {
        control.setTranslationSnap(null);
        control.setRotationSnap(null);
        control.setScaleSnap(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('click', onMouseClick);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div>
      <h1 className="loading-text">My 3D Scene</h1>
      <div ref={mountRef} />
    </div>
  );
};

export default ThreePage;
