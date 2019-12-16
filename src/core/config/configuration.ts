export interface Configuration {
    express: ExpressConfiguration;
    graphql: GraphQLConfiguration;
}

export interface ExpressConfiguration {
    // Default value defined by Express: 100kb
    // (reference: https://expressjs.com/en/4x/api.html#express.json)
    bodyLimit: string;
}

export interface GraphQLConfiguration {
    port: number;
    debug?: boolean;
    tracing?: boolean;
    introspection?: boolean;
    playground?: boolean;
}
