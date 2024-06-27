import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar">
      <div class="navbar-brand" routerLink="/">
        <span class="material-symbols-outlined waving-hand">waving_hand</span>
        <p>Anderson Frias</p>
      </div>
      <div class="navbar-links" [ngClass]="{'active': isMenuOpen}">
        <a [routerLink]="['works']">Works</a>
        <a routerLink="/post">Post</a>
        <div class="source">
          <img src="/assets/icons/github-logo.png" alt="github logo" width="20">
          <a href="https://github.com/anderj14" target="_blank">Source</a>
        </div>
      </div>
      <div class="navbar-toggle" (click)="toggleMenu()" [class.active]="isMenuOpen">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  `,
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
