import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IClient } from '../entities/Client';
import { ClientRepository } from '../repository/Client.repository';

@Injectable({
  providedIn: 'root'
})
export class GetClientByIdUseCase  {

  constructor(private clientRepository: ClientRepository) { }

  execute(params: string): Observable<IClient[]> {
    return this.clientRepository.getClientById(params);
  }
}
