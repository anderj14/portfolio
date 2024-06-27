import { Component, inject } from '@angular/core';
import { IWorkList } from '../../models/worklist';
import { WorksService } from '../works.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-work-details',
  standalone: true,
  imports: [],
  template: `
    <section class="card">
      <div class="title">
        <h2>{{work?.workName}}</h2>
      </div>
      <section class="info">
        <div class="description">
          <p>{{work?.about}}</p>
        </div>
        <div class="tech">
          <div class="website">
            <p>Repo</p>
            <a>{{work?.githubRepository}}</a>
          </div>
          <div class="platform">
            <p>Platform</p>
            <p>{{work?.platform}}</p>
          </div>
          <div class="stack">
            <p>Ingredients</p>
            <p>{{work?.stack}}</p>
          </div>
        </div>
        <div class="images">
          @for (picture of work?.pictures; track $index) {
            <img [src]="picture.imageUrl" alt="{{picture.imageName}}">
          }
        </div>
      </section>
    </section>
  `,
  styleUrl: './work-details.component.scss'
})
export class WorkDetailsComponent {

  work: IWorkList | undefined;
  route: ActivatedRoute = inject(ActivatedRoute);
  workService: WorksService = inject(WorksService);

  constructor() {
    const workId = Number(this.route.snapshot.params['id'])
    this.work = this.workService.getWorkById(workId);
  }
}
