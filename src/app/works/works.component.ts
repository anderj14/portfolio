import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IInventsList, IWorkList } from '../models/worklist';
import { WorksService } from './works.service';
import { WorkItemComponent } from './work-item/work-item.component';
import { CommonModule } from '@angular/common';
import { InventItemComponent } from './invent-item/invent-item.component';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule, RouterModule, WorkItemComponent, InventItemComponent],
  template: `
  <section class="cards">
    <div class="results">
      <h2>Works</h2>
      <div class="items">
      @for (work of workList; track work) {
        <app-work-item
          [workList]="work"
        ></app-work-item>
      }@empty {
        Empty list of works
      }
      </div>
      </div>
  </section>
  <section class="cards">
    <div class="results">
      <h2>Invents</h2>
      <div class="items">
        @for (invent of inventList; track invent) {
          <app-invent-item
          [invents]="invent"
          ></app-invent-item>
        }@empty {
          Empty list of invents
        }
      </div>
    </div>
  </section>
  `,
  styles: `
    .cards {
        margin-top: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        h2 {
            margin-bottom: 20px;
            font-family: var(--header-font-family);
            font-size: 22px;
        }
        .items {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;

            @media (max-width: 800px) {
                grid-template-columns: repeat(1, 1fr);
            }
        }
    }
  `
})

export class WorksComponent {
  workList: IWorkList[] = [];
  inventList: IInventsList[] = [];

  workService: WorksService = inject(WorksService);
  inventService: WorksService = inject(WorksService);

  constructor() {
    this.workList = this.workService.getAllWorks();
    this.inventList = this.inventService.getAllInvents();
  }
}
