import { Component, inject } from '@angular/core';
import { IInventsList } from '../../models/worklist';
import { ActivatedRoute } from '@angular/router';
import { WorksService } from '../works.service';

@Component({
  selector: 'app-invent-details',
  standalone: true,
  imports: [],
  template: `
      <section class="card">
      <div class="title">
        <h2>{{invent?.inventName}}</h2>
      </div>
      <section class="info">
        <div class="description">
          <p>{{invent?.about}}</p>
        </div>
        <div class="tech">
          <div class="website">
            <p>Repo</p>
            <a>{{invent?.githubRepository}}</a>
          </div>
          <div class="platform">
            <p>Platform</p>
            <p>{{invent?.platform}}</p>
          </div>
          <div class="stack">
            <p>Ingredients</p>
            <p>{{invent?.stack}}</p>
          </div>
        </div>
        <div class="images">
          @for (picture of invent?.pictures; track $index) {
            <img [src]="picture.imageUrl" alt="{{picture.imageName}}">
          }
        </div>
      </section>
    </section>
  `,
  styleUrl: './invent-details.component.scss'
})
export class InventDetailsComponent {

  invent: IInventsList | undefined;
  route: ActivatedRoute = inject(ActivatedRoute);
  inventService: WorksService = inject(WorksService);

  constructor() {
    const inventId = Number(this.route.snapshot.params['id'])
    this.invent = this.inventService.getInventById(inventId);
  }
}
