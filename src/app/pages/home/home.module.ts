import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'src/app/share/share.module';
import {  RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';


const routers : Routes=[
  {path:'home',component:HomeComponent }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [

    ShareModule,
    RouterModule.forChild(routers)
  ]
})
export class HomeModule { }
