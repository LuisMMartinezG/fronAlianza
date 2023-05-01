import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientRoutingModule } from './client.routing';
import { ClientHttpRepository } from './data/Client.repository.impl';
import { ClientRepository } from './domain/repository/Client.repository';
import { FilterComponent } from './web/components/filter/filter.component';
import { ListClientComponent } from './web/components/list-client/list-client.component';
import { ModalUpdateComponent } from './web/components/modal-update/modal-update.component';
import { ClientComponent } from './web/pages/client/client.component';



@NgModule({
  declarations: [
    ListClientComponent,
    ClientComponent,
    FilterComponent,
    ModalUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClientRoutingModule,
  ],
  exports: [

  ],
  providers: [
    { provide: ClientRepository, useClass: ClientHttpRepository }
  ],
})
export class ClientModule { }
