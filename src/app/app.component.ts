import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { WorkExperienceComponent } from './components/work.experience/work.experience.component';
import { PersonalProjectsComponent } from './components/personal.projects/personal.projects.component';
import { TechnologyStackComponent } from './components/technology.stack/technology.stack.component';
import { AboutMeComponent } from './components/about.me/about.me.component';
import { TopOfPageComponent } from './components/top.of.page/top.of.page.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, WorkExperienceComponent, 
  PersonalProjectsComponent, TechnologyStackComponent, 
  AboutMeComponent, TopOfPageComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
