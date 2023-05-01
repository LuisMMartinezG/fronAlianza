import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientRepository } from '../repository/Client.repository';
import { IClient } from '../entities/Client';

@Injectable({
  providedIn: 'root'
})
export class getAllClientUsecase  {

  constructor(private clientRepository: ClientRepository) { }

  execute(params: void): Observable<IClient[]> {

    return this.clientRepository.getAllClients();
  }
}
