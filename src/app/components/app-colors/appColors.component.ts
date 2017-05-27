import { Component, Input } from '@angular/core';
import { AppColorComponent } from '../app-color/appColor.component';

@Component({
  selector: 'app-colors',
  templateUrl: './appColors.component.html',
  styleUrls: ['./appColors.component.css']
})
export class AppColorsComponent {
  @Input() colors: Array<string>;

}
