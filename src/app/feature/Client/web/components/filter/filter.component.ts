import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FilterViewModelService } from '../../viewModel/filter-view-model.service';
import { GetClientByIdUseCase } from '../../../domain/useCase/get-Client-by-id.usecase';
import { ListClientViewModelService } from '../../viewModel/list-client-view-model.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  editForm =  new FormGroup({
    shared_key: new FormControl( ''),
    business_id: new FormControl('', {}),
    mail: new FormControl('', {}),
    phone: new FormControl(''),
    start_date: new FormControl(''),
    end_date: new FormControl(''),
  });

  constructor(
    public readonly filterViewModelService: FilterViewModelService,
    private getClientByIdUseCase: GetClientByIdUseCase,
    private listClientViewModelService: ListClientViewModelService
  )
    { }

    search(){
      const shared_key = this.editForm.get('shared_key')?.value;
      const data = this.getClientByIdUseCase.execute(shared_key!);
      this.listClientViewModelService.update(data);
    }


    save(): void {
      const filter = this.editForm.getRawValue();
      this.filterViewModelService.toggle()
      console.log(filter);
    }

  }

