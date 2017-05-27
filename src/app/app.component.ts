import { Component, Input } from '@angular/core';
import { AppColorsComponent } from './components/app-colors/appColors.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() inputColor: string;
  public colors: Array<any> = [];
  public title: string = 'Data Binding';
  public titleColor: string = '';

  addColor() {
    console.log(this);
    this.colors.push(this.inputColor);
    console.log(this.colors);
    
  }
}
