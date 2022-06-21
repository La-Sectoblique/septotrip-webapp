import { Component, Input } from '@angular/core';

@Component({
  selector: 'spt-trip-element-details',
  templateUrl: './trip-element-details.component.html',
  styleUrls: ['./trip-element-details.component.scss'],
})
export class TripElementDetailsComponent {

  @Input() pageTitle: string;

  // constructor() { }

  // ngOnInit() {
  // }

}
