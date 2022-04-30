import { Component, Input, OnInit } from '@angular/core';
import { DayOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Day';

@Component({
  selector: 'spt-days-list',
  templateUrl: './days-list.component.html',
  styleUrls: ['./days-list.component.scss'],
})
export class DaysListComponent  {

  @Input() days: DayOutput[];

}
