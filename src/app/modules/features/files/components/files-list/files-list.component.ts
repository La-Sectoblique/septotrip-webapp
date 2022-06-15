import { Component, Input } from '@angular/core';
import { getFileLink } from '@la-sectoblique/septoblique-service';
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

  getUrl(file: FileMetadataOutput): void {
    getFileLink(file.tripId, file.id).then((url)=> console.log('url', url));
  }

}
