import { IClientDto } from "../domain/dto/Client.dto";
import { IClient } from "../domain/entities/Client";

export class ClientHttpMapper {


  mapFrom(param: IClientDto): IClient {
    return {
      shared_key: param.shared_key,
      business_id: param.business_id,
      mail: param.mail,
      phone: param.phone,
      data_added: param.data_added
    };
  }


  mapTo(param: IClient): IClientDto {
    return {
      shared_key: param.shared_key!,
      business_id: param.business_id!,
      mail: param.mail!,
      phone: param.phone!,
      data_added: param.data_added!
    };
  }
}
