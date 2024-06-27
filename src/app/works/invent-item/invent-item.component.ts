import { Component, Input } from '@angular/core';
import { IInventsList } from '../../models/worklist';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invent-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
   <section class="listing" [routerLink]="['/invents', invents.id]">
    <div class="images">
      @for(inventImage of invents.pictures.slice(0, 1); track inventImage) {
        <img [src]="inventImage.imageUrl" alt="{{inventImage.imageName}}">
      } @empty {
        Empty list of image
      }
    </div>
      <h2>{{invents.inventName}}</h2>
      <p>{{invents.shortDescription}}</p>
    </section>
  `,
  styleUrl: './invent-item.component.scss'
})
export class InventItemComponent {

  @Input() invents!: IInventsList;
}
