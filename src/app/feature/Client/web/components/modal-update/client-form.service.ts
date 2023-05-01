import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { IClient, newClient } from '../../../domain/entities/Client';
import { FormControl, FormGroup, Validators } from '@angular/forms';



type ClientFormGroupContent = {
  shared_key: FormControl<IClient['shared_key'] | newClient['shared_key']>;
  business_id: FormControl<IClient['business_id']>;
  mail: FormControl<IClient['mail']>;
  phone: FormControl<IClient['phone']>;
  start_date: FormControl<IClient['start_date']>,
  end_date: FormControl<IClient['end_date']>,

};

export type ClientFormGroup = FormGroup<ClientFormGroupContent>;


@Injectable({
  providedIn: 'root'
})
export class ClientFormService {

  constructor() { }

  createFiltertFormGroup(filterFrom?: IClient): ClientFormGroup {
    const filterFormRawValue = {
      ...this.getFormDefaults(),
      ...filterFrom,
    };
    return new FormGroup<ClientFormGroupContent>({
      shared_key: new FormControl(filterFormRawValue.shared_key, {}),
      business_id: new FormControl(filterFormRawValue.business_id, {}),
      mail: new FormControl(filterFormRawValue.mail, {}),
      phone: new FormControl(filterFormRawValue.phone),
      start_date: new FormControl(filterFormRawValue.start_date),
      end_date: new FormControl(filterFormRawValue.end_date),
    });
  }

  getFilterFrom(form: ClientFormGroup): IClient | newClient {
    return form.getRawValue() as IClient | newClient;
  }


  private getFormDefaults(): { shared_key: string } {
    return {
      shared_key: '',
    };
  }

}
