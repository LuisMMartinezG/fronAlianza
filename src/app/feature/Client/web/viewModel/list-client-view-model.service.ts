import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { IClient } from '../../domain/entities/Client';
import { getAllClientUsecase } from '../../domain/useCase/get-all-client.usecase';
import { CreateClientUsecase } from '../../domain/useCase/create-client.usecase';
import { UpdateClientUsecase } from '../../domain/useCase/update-client.usecase';
import { DeleteClientUsecase } from '../../domain/useCase/delete-client.usecase';

@Injectable({
  providedIn: 'root'
})
export class ListClientViewModelService {

  clients: Observable<IClient[]> = new Subject<IClient[]>();

  constructor(
    private getClientUsecase: getAllClientUsecase,
    private createClientUsecase: CreateClientUsecase,
    private updateClientUsecase: UpdateClientUsecase,
    private deleteClientUsecase: DeleteClientUsecase) { }

  getClients(){
    this.clients = this.getClientUsecase.execute();
  }

  update(clients:  Observable<IClient[]> ){
    this.clients = clients
  }

  create(client: IClient){
   this.createClientUsecase.execute(client);
    this.getClients();

  }

  updated(client: IClient){
   this.updateClientUsecase.execute(client);
    this.getClients();

  }

  delete(client: IClient){
   this.deleteClientUsecase.execute(client);
   this.getClients();
  }
}
