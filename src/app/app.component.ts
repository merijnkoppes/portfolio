import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import * as THREE from 'three';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  private renderer!: THREE.WebGLRenderer;
  private camera!: THREE.PerspectiveCamera;
  private scene!: THREE.Scene;
  private sphere!: THREE.Mesh;

  ngAfterViewInit() {
    // Create Scene
    this.scene = new THREE.Scene();

    // Create Camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 4; // Adjusted for a nice big look

    // Create Renderer
    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    // Append Renderer to the Scene Container
    const sceneContainer = document.getElementById('scene');
    if (sceneContainer) {
      sceneContainer.appendChild(this.renderer.domElement);
    }

    // Create a Big Sphere
    const geometry = new THREE.SphereGeometry(3, 64, 64); // Bigger sphere
    const material = new THREE.MeshStandardMaterial({
      color: 0x44aa88,
      wireframe: true,
    });
    this.sphere = new THREE.Mesh(geometry, material);
    this.scene.add(this.sphere);

    // Add Soft Lighting
    const light = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(light);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    this.scene.add(pointLight);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      this.sphere.rotation.y += 0.002; // Slow smooth rotation
      this.renderer.render(this.scene, this.camera);
    };
    animate();

    // Handle Window Resize
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }
}
