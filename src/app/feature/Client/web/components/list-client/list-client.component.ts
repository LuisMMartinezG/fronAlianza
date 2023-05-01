import { Component, OnInit } from '@angular/core';
import { ListClientViewModelService } from '../../viewModel/list-client-view-model.service';
import { IClient } from '../../../domain/entities/Client';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})
export class ListClientComponent implements OnInit {

  constructor(public service: ListClientViewModelService) {

  }
  ngOnInit(): void {
    this.service.getClients();

  }



}
