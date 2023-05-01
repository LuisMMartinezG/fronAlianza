
export interface IClient {
  shared_key?: string | null;
  business_id?: string | null;
  mail?: string | null;
  phone?: number | null;
  data_added?: Date | null;
  start_date?: Date | null;
  end_date?: Date | null;
}
export type newClient = Omit<IClient, 'shared_key'> & { shared_key: null };

export class Client implements IClient {
  shared_key?: string | null;
  business_id?: string | null;
  mail?: string | null;
  phone?: number | null;
  data_added?: Date | null;
  start_date?: Date | null;
  end_date?: Date | null;

  constructor(data: IClient) {
    this.shared_key= data.shared_key;
    this.business_id = data.business_id;
    this.mail = data.mail;
    this.phone = data.phone;
    this.data_added = data.data_added;
    this.start_date = data.start_date;
    this.end_date = data.end_date;
  }
}

