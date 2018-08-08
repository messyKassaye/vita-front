import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectComponent} from './project/project.component';
import {ProjectRoutingModule} from './project-routing.module';
import {ProjectCategoryComponent} from './project-category/project-category.component';
import {AddProjectComponent} from './add-project/add-project.component';
import {MaterialModule} from '../../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AgmCoreModule} from '@agm/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MAT_CHIPS_DEFAULT_OPTIONS} from '@angular/material';
import {DetailProjectComponent} from './detail-project/detail-project.component';
import {ProjectService} from './project.service';
import { ClusterComponent } from './cluster/cluster.component';
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC_n7J4QTEgv89AWttZDKYf7ALt41MLYrQ'
    }),
    PerfectScrollbarModule,
  ],
  declarations: [
    ProjectComponent,
    ProjectCategoryComponent,
    AddProjectComponent,
    DetailProjectComponent,
    ClusterComponent
  ],
  exports: [ProjectComponent,  AddProjectComponent,  ProjectCategoryComponent, DetailProjectComponent, ClusterComponent],
  providers: [
    {
      provide: MAT_CHIPS_DEFAULT_OPTIONS,
      useValue: {
        separatorKeyCodes: [ENTER, COMMA]
      }
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  entryComponents: [
    ClusterComponent
  ],
})
export class ProjectModule { }
