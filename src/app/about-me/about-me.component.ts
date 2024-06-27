import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="header">
      <div class="information">
        <div class="greeting">
          <p>Hey, I'm a freelance developer living in Dom. Rep.!</p>
        </div>
        <div class="about-me">
          <div class="me">
            <div class="name">
              <h1>Anderson Frias</h1>
              <p>Code Craftsman (Architect / Developer / Designer)</p>
            </div>
            <div class="image"></div>
          </div>
          <div class="work">
            <h2>Work</h2>
            <p>
              Anderson, a passionate Dominican professional in the field of software development. 
              Driven by the fervor for crafting digital solutions, my competency lies in methodologies 
              such as RUP and SCRUM. I seamlessly integrate the essential steps of systems analysis and 
              design, navigating from meticulous requirements gathering to strategic system planning and 
              thoughtful design. Beyond lines of code, I find joy in capturing moments through photography. 
              Today, I channel my expertise into my own products, leaving a distinctive mark on the dynamic 
              landscape of software development.
            </p>
            <button [routerLink]="['/works']">My portfolio</button>
          </div>
          <div class="bio">
            <h2>Bio</h2>
            <div class="info one">
              <span>2000</span>
              <p>Born in Santiago Dominican Republic.</p>
            </div>

            <div class="info two">
              <span>2024</span>
              <p>
                I will finish my Bachelor's degree in computer science at the autonomous university of Santo Domingo.
              </p>
            </div>
          </div>
          <div class="passion">
            <h2>
              I 
              <span class="material-symbols-outlined">favorite</span>
            </h2>
            <p>Playing guitar, Music, Cooking, Photographic, Learning, Teaching</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit {

  ngOnInit(): void {
  }
}
