import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HeaderComponent, FooterComponent],
  template: `
    <main>
      <app-header></app-header>
      <div class="content">
        <div class="cv">
          <router-outlet></router-outlet>
        </div>
      </div>
      <app-footer></app-footer>
    </main>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
}
