import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {CheckboxComponent} from './checkbox/checkbox.component';
import { ScrollbarComponent } from './scrollbar/scrollbar.component';

const components = [
  CheckboxComponent,ScrollbarComponent
]
const modules = [
  FormsModule,ReactiveFormsModule,CommonModule
]

@NgModule({
  declarations: [...components],
  imports: [
    ...modules
  ],
  exports: [...components,...modules]
})
export class DeepinUiModule { }
