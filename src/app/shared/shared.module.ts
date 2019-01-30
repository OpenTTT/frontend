import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule, MatToolbarModule, MatButtonModule, MatIconModule } from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const materialModules: any[]  = [
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ].concat(...materialModules),
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ].concat(...materialModules),
})
export class SharedModule {

  constructor() {
  }
}
