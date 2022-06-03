import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PathOutput } from '@la-sectoblique/septoblique-service/dist/types/models/Path';
import { NbDialogRef } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { UpdatePath } from 'src/app/store/trips-store/state/trips.actions';

@Component({
  selector: 'spt-path-edit',
  templateUrl: './path-edit.component.html',
  styleUrls: ['./path-edit.component.scss'],
})
export class PathEditComponent implements OnInit {

  @Input() path: PathOutput;
  @Input() stepId: number;
  @Input() tripId: number;

  pathForm = this.formBuilder.group({
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private nbDialogRef: NbDialogRef<PathEditComponent>,
  ) { }

  ngOnInit() {
    this.pathForm.patchValue({
      description: this.path.description,
    });
  }

  create(): void {
    this.store.dispatch(UpdatePath({
      path: {
        ...this.path,
        description: this.pathForm.value.description,
      },
      stepId: this.stepId,
      tripId: this.tripId,
    }));
    this.nbDialogRef.close();
  }

  isFormValid(): boolean {
    return this.pathForm.valid;
  }

}
