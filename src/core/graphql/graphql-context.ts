import { Request } from 'apollo-server-express';
import { RequestService } from '../../service/request.service';

export interface GraphQLContext {
    requestService: RequestService;
    request?: Request;
}
