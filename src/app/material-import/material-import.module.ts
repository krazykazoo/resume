import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule, MatTooltipModule
} from '@angular/material'


@NgModule({
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatTooltipModule
  ],
  declarations: []
})
export class MaterialImportModule { }
