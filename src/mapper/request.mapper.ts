import { RequestType } from '../repository/request.model';
import { F999_GetRequestOutput } from '../model/generated/simpleapi.model';
import { Service } from 'typedi';

@Service()
export class RequestMapper {

    mapTo(input: RequestType): F999_GetRequestOutput {

        return {
            serviceData: {
                request: {
                    identifier: {
                        id: input.identifier.id,
                        idScope: input.identifier.idScope.value,
                        idContext: input.identifier.idContext.value
                    },
                    title: input.title,
                    serviceLevel: input.serviceLevel.value,
                    contactReason: input.contactReason,
                    numberOfTimesReopened: input.numberOfTimesReopened,
                    role: input.roles,
                    creationDate: input.creationDate,
                    status: {
                        code: input.statusList.reverse()[0].toString()
                    }
                }
            }
        };
    }
}
