import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'spt-confirm-component',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmComponent {

  @Input() confirmLabel: string;

  @Input() confirmBtnLabel = 'Confirmer';
  @Input() cancelBtnLabel = 'Annuler';

  @Input() confirmAction: () => void;
  @Input() cancelAction: () => void;

  constructor(
    private dialogRef: NbDialogRef<ConfirmComponent>,
  ) {}


  confirm(): void {
    this.confirmAction();
    this.dialogRef.close();
  }

  cancel(): void {
    if (this.cancelAction) {
      this.cancelAction();
    }
    this.dialogRef.close();
  }


}
