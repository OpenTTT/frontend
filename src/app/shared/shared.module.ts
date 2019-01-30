import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule, MatToolbarModule, MatButtonModule } from "@angular/material";

const materialModules = [
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ].concat(...materialModules),
  exports: [
  ].concat(...materialModules),
})
export class SharedModule { }
