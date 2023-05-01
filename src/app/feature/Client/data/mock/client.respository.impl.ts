import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, map, of, switchMap } from "rxjs";
import { Client } from '../../domain/entities/Client';
import { ClientRepository } from '../../domain/repository/Client.repository';
import { ClientHttpMapper } from '../client.mapper.impl';
import { IClient } from './../../domain/entities/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientMockHttpRepository extends ClientRepository {

  mapper = new ClientHttpMapper();

  clients = of([
    new Client({ shared_key:'JuzG',business_id: "Juliana Guzman", mail:' juzg@mail.com', phone: 123456789, data_added: new Date() }),
    new Client({ shared_key:'GabH',business_id: "Gabriel Hernan", mail:' gabh@mail.com', phone: 123456789, data_added: new Date() }),
  ])

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  override getClientById(id: string): Observable<IClient[]> {
    return this.clients.pipe(
      map(results => results.filter( client => client.shared_key === id)),
    );
  }
  override getAllClients(): Observable<IClient[]> {
    return this.clients
  }

  override createClient(client: IClient): Observable<IClient[]> {
    client.shared_key = client.business_id?.slice(0,3)! + Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
    return this.clients.pipe(
        map( results => [...results, client]),
      );
  }

  override updateClient(client: IClient): Observable<IClient[]> {
    return this.clients.pipe(
      map(results => results.map( res => res.shared_key === client.shared_key ? client : res)),
    )
  }
  override DeleteClient(client: IClient): Observable<IClient> {
    return this.clients.pipe(
      map(results => results.filter( res => res.shared_key !== client.shared_key!)),
    ).pipe(
      switchMap(results => of(results[0])),
    );
  }

}
