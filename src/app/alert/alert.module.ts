import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { providers } from 'ng2-dnd';
import { AlertService } from '../services/alert.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [AlertComponent],
  exports:[AlertComponent],
  providers:[AlertService]
})
export class AlertModule { }
