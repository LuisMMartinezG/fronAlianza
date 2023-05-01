
import { Observable } from 'rxjs';
import { IClient } from '../entities/Client';

export abstract class ClientRepository {

  abstract getClientById(id: string): Observable<IClient[]>;
  abstract getAllClients(): Observable<IClient[]>;
  abstract createClient(client: IClient): Observable<IClient[]>;

  abstract updateClient(client: IClient): Observable<IClient[]>;

  abstract DeleteClient(client: IClient): Observable<IClient>;
}
