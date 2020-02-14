import { Service } from 'typedi';
import requests from './requests.json';
import { GraphQLContext } from '../core/graphql/graphql-context';
import { RequestType } from './request.model';
import { Maybe } from '../model/generated/simpleapi.model';

@Service()
export class RequestRepository {
    private static readonly requestData: RequestType[] = requests.data;

    getRequestByIdAsync(requestId: string, ctx: GraphQLContext): Promise<Maybe<RequestType>> {
        const c = RequestRepository.requestData.find((value: RequestType) => value.identifier.id === requestId);
         return Promise.resolve(c ? c : null);
    }

    getAllRequestAsync(ctx: GraphQLContext): Promise<Maybe<Array<RequestType>>> {
        return Promise.resolve(RequestRepository.requestData);
    }
}
