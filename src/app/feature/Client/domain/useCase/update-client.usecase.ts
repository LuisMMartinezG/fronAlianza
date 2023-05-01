import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientRepository } from '../repository/Client.repository';
import { IClient } from '../entities/Client';

@Injectable({
  providedIn: 'root'
})
export class UpdateClientUsecase  {

  constructor(private clientRepository: ClientRepository) { }

  execute(params: IClient): Observable<IClient[]> {
    return this.clientRepository.updateClient(params);
  }
}
