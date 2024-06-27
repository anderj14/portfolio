import { Component, Input, OnInit } from '@angular/core';
import { IWorkList } from '../../models/worklist';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-work-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing" [routerLink]="['/works', workList.id]">
      <div class="images" *ngFor="let image of workList.pictures.slice(0, 1)">
        <img [src]="image.imageUrl" alt="{{image.imageName}}">
      </div>
      <h2>{{workList.workName}}</h2>
      <p>{{workList.shortDescription}}</p>
    </section>
  `,
  styleUrl: './work-item.component.scss'
})
export class WorkItemComponent {

  @Input() workList!: IWorkList
}
