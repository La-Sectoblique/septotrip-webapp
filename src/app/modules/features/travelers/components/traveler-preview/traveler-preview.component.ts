import { Component, Input } from '@angular/core';
import { UserOutput } from '@la-sectoblique/septoblique-service/dist/types/models/User';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-traveler-preview',
  templateUrl: './traveler-preview.component.html',
  styleUrls: ['./traveler-preview.component.scss'],
})
export class TravelerPreviewComponent  {

  @Input() traveler: UserOutput;

}
