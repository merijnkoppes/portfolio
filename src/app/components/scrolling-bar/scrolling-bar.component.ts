import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
@Component({
  selector: 'app-scrolling-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scrolling-bar.component.html',
  styleUrl: './scrolling-bar.component.scss',
})
export class ScrollingBarComponent implements OnInit {
  items = [
    {
      image: 'src/app/components/scrolling-bar/assets/isvisoft.png',
      text: 'Item 1',
    },
    { image: 'https://via.placeholder.com/800x200', text: 'Item 2' },
    { image: 'https://via.placeholder.com/800x200', text: 'Item 3' },
    { image: 'https://via.placeholder.com/800x200', text: 'Item 4' },
    // Add more items here
  ];

  positions: number[] = [];
  visibilities: number[] = [];
  speed = 2; // Pixels per frame
  containerWidth = 0;
  screenWidth = 0;

  ngOnInit(): void {
    this.initPositions();
    this.startAnimation();
  }

  initPositions(): void {
    this.screenWidth = window.innerWidth;
    this.containerWidth = this.screenWidth * 2; // Make the container twice as wide as the screen
    const totalItemsWidth = this.screenWidth * this.items.length;
    const spaceBetweenItems = (this.containerWidth - totalItemsWidth) / 2;

    // Ensure items are spaced correctly
    this.positions = this.items.map(
      (_, i) => this.screenWidth * i - spaceBetweenItems
    );
    this.visibilities = this.items.map(() => 1);
  }

  startAnimation(): void {
    setInterval(() => {
      for (let i = 0; i < this.positions.length; i++) {
        this.positions[i] -= this.speed;
        if (this.positions[i] < -this.screenWidth) {
          // If the item is out of view
          this.visibilities[i] = 0; // Make item invisible
        }
        if (this.positions[i] < -this.screenWidth - this.screenWidth / 2) {
          this.positions[i] = this.containerWidth;
          this.visibilities[i] = 1; // Make item visible again
        }
      }
    }, 20); // Adjust the interval for smoother animation if needed
  }
}
