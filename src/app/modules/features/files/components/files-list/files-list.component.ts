import { Component, Input } from '@angular/core';
import { FileMetadataOutput } from '@la-sectoblique/septoblique-service/dist/types/models/File';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'spt-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.scss'],
})
export class FilesListComponent {

  @Input() files: FileMetadataOutput[];

  apiUrl = environment.baseURL;

  // constructor() { }

  // ngOnInit() {
  // }

}
