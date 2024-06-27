import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer>
      <p>
        © Anderson Frias. All Copyright Reserved.
      </p>
    </footer>
  `,
  styles: `
    footer {
      margin-top: 30px;
      padding-bottom: 20px;

      p {
        text-align: center;
        color: #9f9f9f;
      }
    }
  `
})
export class FooterComponent {

}
