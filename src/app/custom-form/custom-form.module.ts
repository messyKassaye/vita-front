import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsDashboardComponent } from './forms-dashboard/forms-dashboard.component';
import { ShowFormsComponent } from './show-forms/show-forms.component';
import { Path } from 'leaflet';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import { providers } from 'ng2-dnd';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomFormsService } from './custom-forms.service';
import { FormDesignComponent } from './form-design/form-design.component';
import { FormSectionsService } from './form-sections.service';
import { DraggableComponent } from './draggable/draggable.component';
import { EscapeHtmlPipe } from './pipes/keepHtmlSafe.pipe';
import { FormColumnsService } from './services/form-columns.service';
import { GeneratedFormService } from './services/generated-form.service';
import { FormsdetailComponent } from './formsdetail/formsdetail.component';
import { ShareDialogComponent } from './share-dialog/share-dialog.component';

const formsRoute:Routes=[
  {
    path:'',
    component:FormsDashboardComponent,
    children:[
      {
        path:'',
        component:ShowFormsComponent
      }
    ]
  },
  {
    path:'form-design/:id',
    component:FormDesignComponent
  },
  {
    path:'form-detail/:id',
    component:FormsdetailComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(formsRoute)
  ],
  declarations: [FormsDashboardComponent, ShowFormsComponent, DialogBodyComponent,FormDesignComponent, DraggableComponent,EscapeHtmlPipe, FormsdetailComponent, ShareDialogComponent],
  exports:[FormsDashboardComponent, ShowFormsComponent,DialogBodyComponent,FormDesignComponent,DraggableComponent,FormsdetailComponent,ShareDialogComponent],
  providers:[CustomFormsService,FormSectionsService,FormColumnsService,GeneratedFormService],
  entryComponents:[DialogBodyComponent,FormDesignComponent,ShareDialogComponent]
})
export class CustomFormModule { }
