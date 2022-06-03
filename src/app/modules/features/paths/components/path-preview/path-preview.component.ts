import { Component, Input, OnInit } from '@angular/core';
import { PathOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Path';

@Component({
  selector: 'spt-path-preview',
  templateUrl: './path-preview.component.html',
  styleUrls: ['./path-preview.component.scss'],
})
export class PathPreviewComponent  {

  @Input() path: PathOutput;

  // constructor() { }

}
