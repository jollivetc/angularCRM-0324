import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input'

const importsExports = [MatToolbarModule, MatFormFieldModule, MatButtonModule, MatInputModule]

@NgModule({
  declarations: [],
  imports: importsExports,
  exports: importsExports
})
export class AppMaterialModule { }
