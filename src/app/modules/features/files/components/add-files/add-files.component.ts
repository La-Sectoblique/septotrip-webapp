import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { uploadFile } from '@la-sectoblique/septoblique-service';
import { FileType } from '@la-sectoblique/septoblique-service/dist/types/models/File';

@Component({
  selector: 'spt-add-files',
  templateUrl: './add-files.component.html',
  styleUrls: ['./add-files.component.scss'],
})
export class AddFilesComponent {

  fileForm = this.formBuilder.group({
    file: new FormControl(undefined, [Validators.required]),
  });

  fileToSend: File | undefined = undefined;

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  onSubmit(): void {

    if (!this.fileToSend) {
      return;
    }

    uploadFile({
      name: 'Logo',
      extension: 'png',
      tripId: 4,
      mimeType: 'image/png',
      visibility: 'private',
      fileType: FileType.PHOTO,
    }, this.fileToSend );
  }

  onFileChange(event: Event): void {
    console.log('Fichier changé');

    const target = event.target as HTMLInputElement;

    if (target.files && target.files.length > 0) {
      this.fileToSend = target.files[0];
    }
  }

}
