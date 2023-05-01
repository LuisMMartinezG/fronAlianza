import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, map, mergeMap } from "rxjs";
import { IClientDto } from "../domain/dto/Client.dto";
import { IClient } from "../domain/entities/Client";
import { ClientRepository } from "../domain/repository/Client.repository";
import { ClientHttpMapper } from "./client.mapper.impl";
import { production } from 'src/app/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ClientHttpRepository extends ClientRepository {

  mapper = new ClientHttpMapper();

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  override getClientById(id: string): Observable<IClient[]> {
    return this.http
      .get<IClientDto[]>(production.apiUrl + '/client/' + id)
  }
  override getAllClients(): Observable<IClient[]> {
    return this.http
    .get<IClientDto[]>( production.apiUrl + '/client')
  }

  override createClient(client: IClient): Observable<IClient[]> {
    return this.http
    .post<IClientDto[]>(production.apiUrl + '/client', client)
  }

  override updateClient(client: IClient): Observable<IClient[]> {
    return this.http
    .put<IClientDto[]>(production.apiUrl + '/client', client)
  }
  override DeleteClient(client: IClient): Observable<IClient> {
    return this.http.delete<IClientDto>(production.apiUrl + '/client' + client.shared_key! )
  }
}
