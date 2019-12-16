import { queryResolvers } from './query.resolvers';
import { GraphQLContext } from '../core/graphql/graphql-context';
import { Resolvers } from '../model/generated/simpleapi.model';

export const resolvers: Resolvers<GraphQLContext> = {
    Query: queryResolvers.Query
    // Mutation, ...
};
