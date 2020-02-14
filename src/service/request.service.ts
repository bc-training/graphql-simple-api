import { Service } from 'typedi';
import { RequestRepository } from '../repository/request.repository';
import { RequestMapper } from '../mapper/request.mapper';
import { GraphQLContext } from '../core/graphql/graphql-context';
import { F99901_RequestIdentifierInput, Maybe, F999_GetRequestOutput } from '../model/generated/simpleapi.model';
import { RequestType } from '../repository/request.model';

@Service()
export class RequestService {
    constructor(
        private requestRepository: RequestRepository,
        private requestMapper: RequestMapper) {
    }

    async getRequestByIdAsync(
        requestIdentifier: F99901_RequestIdentifierInput,
        ctx: GraphQLContext):
        Promise<Maybe<F999_GetRequestOutput>> {
        const request: Maybe<RequestType> = await this.requestRepository.getRequestByIdAsync(requestIdentifier.id, ctx);
        const result: Maybe<F999_GetRequestOutput> = request
            ? this.requestMapper.mapTo(request) as F999_GetRequestOutput
            : null;
        return result;
    }
}
