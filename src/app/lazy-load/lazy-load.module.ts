import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthModule } from '../auth/auth.module';
import {AfterLoginService} from '../services/after-login.service';
import {BeforeLoginService} from '../services/before-login.service';

const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'auth', loadChildren: '../auth/auth.module#AuthModule', canActivate: [AfterLoginService]},
    {path: 'login', loadChildren: '../pages/login/login.module#LoginModule', canActivate: [BeforeLoginService]},
    {path: '**', redirectTo: 'auth/dashboard'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class LazyLoadModule { }
