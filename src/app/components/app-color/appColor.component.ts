import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './appColor.component.html',
  styleUrls: ['./appColor.component.css']
})
export class AppColorComponent {
  @Input() color: string;
}
