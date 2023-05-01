import { IClientDto } from "../dto/Client.dto";
import { IClient } from "../entities/Client";

export abstract class ClientMappter {

  abstract mapFrom(param: IClientDto): IClient;
  abstract mapTo(param: IClient): IClientDto;

}
