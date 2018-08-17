import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { MaterialModule } from '../material.module';
import { Path } from 'leaflet';
import { RoleDashboardComponent } from './role-dashboard/role-dashboard.component';
import { PermissionDashboardComponent } from './permission-dashboard/permission-dashboard.component';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import { RolesComponent } from './roles/roles.component';
import { RoleDialogComponent } from './role-dialog/role-dialog.component';
import { RoleService } from './services/role.service';

const sysUsersRoute:Routes=[
  {
    path:'',
    component:UsersDashboardComponent,
    children:[
      {
        path:'',
        component:UsersComponent
      }
    ],
    
  },
  {
    path:'roles',
    component:RoleDashboardComponent,
    children:[
      {
        path:'',
        component:RolesComponent
      }
    ]
  },
  {
    path:'permission',
    component:PermissionDashboardComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    RouterModule.forChild(sysUsersRoute)
  ],
  declarations: [UsersComponent, UsersDashboardComponent, RoleDashboardComponent, PermissionDashboardComponent, RegisterDialogComponent, RolesComponent, RoleDialogComponent],
  exports:[UsersComponent, UsersDashboardComponent, RoleDashboardComponent, PermissionDashboardComponent, RegisterDialogComponent,RolesComponent,RoleDialogComponent],
  entryComponents:[RegisterDialogComponent,RoleDialogComponent],
  providers:[RoleService]
})
export class SystemUsersModule { }
