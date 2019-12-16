import { PongType, Resolvers, ResolversTypes } from '../model/generated/simpleapi.model';
import { GraphQLContext } from '../core/graphql/graphql-context';
import { GraphQLResolveInfo } from 'graphql';

export const queryResolvers: Resolvers<GraphQLContext> = {
    Query: {
        ping: async (parent: ResolversTypes['PongType'], args: any, ctx: GraphQLContext, info: GraphQLResolveInfo)
            : Promise<PongType> => {
            return await {
                dateTime: new Date().toISOString(),
                message: 'pong'
            };
        }
    }
};
