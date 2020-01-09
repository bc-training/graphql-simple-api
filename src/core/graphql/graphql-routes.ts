export abstract class GraphQLRoutes {
    static readonly GraphQL = '/simpleapi-graphql/';
    static readonly Voyager = '/voyager/';
    protected constructor() {
        throw new Error(`Abstract ${GraphQLRoutes.name} class cannot be instantiated !`);
    }
}
