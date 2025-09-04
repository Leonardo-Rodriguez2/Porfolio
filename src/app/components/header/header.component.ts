import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [NgStyle],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  public button: any = true;

}
