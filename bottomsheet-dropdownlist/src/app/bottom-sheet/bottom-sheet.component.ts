import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  templateUrl: './bottom-sheet.component.html'
})
export class BottomSheetComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }
  closeBottomSheet() {
    const dataToReturn = { result: 'Success' };
    this.bottomSheetRef.dismiss(dataToReturn);
  }
}
