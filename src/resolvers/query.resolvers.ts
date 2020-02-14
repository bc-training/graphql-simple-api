import { PongType, Resolvers, ResolversTypes, RequireFields, QueryGetRequestArgs, F999_RequestType, Maybe, F999_GetRequestOutput, F99901_RequestIdentifierInput } from '../model/generated/simpleapi.model';
import { GraphQLContext } from '../core/graphql/graphql-context';
import { GraphQLResolveInfo } from 'graphql';

export const queryResolvers: Resolvers<GraphQLContext> = {
    Query: {
        ping: async (parent: ResolversTypes['F999_GetRequestOutput'], args: any, ctx: GraphQLContext, info: GraphQLResolveInfo)
            : Promise<PongType> => {
            return await {
                dateTime: new Date().toISOString(),
                message: 'pong'
            };
        },
        GetRequest: async (parent: ResolversTypes['PongType'], args: RequireFields<QueryGetRequestArgs, 'inputData'>, ctx: GraphQLContext, info: GraphQLResolveInfo)
            : Promise<Maybe<F999_GetRequestOutput>> => {
            const requestService = ctx.requestService;
            const requestIdentifier: F99901_RequestIdentifierInput = args.inputData.serviceData.requestIdentifier;
            const output = await requestService.getRequestByIdAsync(requestIdentifier, ctx);
            return output;
        }
    }
};
