import { GraphQLContext } from './graphql-context';
import { Request } from 'apollo-server-express';
import { Service } from 'typedi';
import { RequestService } from '../../service/request.service';

@Service()
export class GraphQLContextService {

    constructor(private readonly requestService: RequestService) {
    }

    buildContextFromRequest(req: Request): GraphQLContext {
        const ctxt: GraphQLContext = {
            requestService: this.requestService,
            request: req
        };
        return ctxt;
    }
}
