import { Component, Input, OnInit } from '@angular/core';
import { ClientFormService } from './client-form.service';
import { ListClientViewModelService } from '../../viewModel/list-client-view-model.service';
import { IClient } from '../../../domain/entities/Client';

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.scss']
})
export class ModalUpdateComponent implements OnInit {

  @Input() client: IClient = {}

  showModal = false;

  editForm =  this.clientFormService.createFiltertFormGroup();

  constructor(
    private  clientFormService: ClientFormService,
    private listClientViewModelService: ListClientViewModelService
    ) { }
  ngOnInit(): void {
   if (this.client) {
    this.editForm.patchValue(this.client);
   }
  }



  toggleModal(){
    this.showModal = !this.showModal;
  }

  save(): void {
    const client = this.editForm.getRawValue();

    if (this.client.shared_key?.length! > 0 ) {
      this.listClientViewModelService.updated(client!)
    }else{
      this.listClientViewModelService.create(client!)
    }
    this.toggleModal();
    this.editForm.reset();
  }


  delete(){
    this.listClientViewModelService.delete(this.client)
    this.toggleModal();
    this.editForm.reset();
  }
}


