import { NgModule } from '@angular/core';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent
  ],
  providers: [
  ],
})
export class SharedModule { }
