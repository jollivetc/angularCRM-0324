import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon'
import {MatTooltipModule} from '@angular/material/tooltip'
import {MatSelectModule} from '@angular/material/select'

const importsExports = [MatToolbarModule, MatFormFieldModule, MatButtonModule,
         MatInputModule, MatIconModule, MatTooltipModule, MatSelectModule]

@NgModule({
  declarations: [],
  imports: importsExports,
  exports: importsExports
})
export class AppMaterialModule { }
