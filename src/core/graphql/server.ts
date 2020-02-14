import { Service } from 'typedi';
import express from 'express';
import { createServer } from 'http';
import { ApolloServer, Config } from 'apollo-server-express';
import { typeDefs } from '../../model/generated/simpleapi.schema';
import { GraphQLRoutes } from './graphql-routes';
import { Configuration } from '../config/configuration';
import { resolvers } from '../../resolvers/resolvers';
import { GraphQLContext } from './graphql-context';
import { express as voyagerMiddleware } from 'graphql-voyager/middleware';
import { ConfigurationService } from '../config/configuration.service';
import { LoggingService } from '../logging/logging.service';
import { GraphQLContextService } from './graphql-context.service';

@Service()
export class Server {

    private _config!: Configuration;

    constructor(
        private configurationService: ConfigurationService,
        private loggingService: LoggingService,
        private graphQlContextService: GraphQLContextService) {
        this.configuration = configurationService.configuration;
    }

    set configuration(value: Configuration) {
        this._config = value;
    }

    get configuration(): Configuration {
        return this._config;
    }

    startAsync(): Promise<void> {
        return this.createGraphQLServer(this.createExpressInstance());
    }

    private createExpressInstance(): express.Express {
        const app = express();
        app.use(express.json({
            // Configuration value overriding the Express default of 100kb
            limit: this.configuration.express.bodyLimit
        }));
        app.use(GraphQLRoutes.Voyager, voyagerMiddleware({ endpointUrl: GraphQLRoutes.GraphQL }));
        return app;
    }

    private createGraphQLServer(app: any): Promise<void> {
        const graphQLHttpServer = createServer(app);
        const graphqlConfig = this.configuration.graphql;
        const graphQLConfig: Config = {
            typeDefs: typeDefs,
            resolvers: resolvers as any,
            context: this.onContext.bind(this),
            debug: graphqlConfig.debug,
            tracing: graphqlConfig.tracing,
            introspection: graphqlConfig.introspection,
            playground: graphqlConfig.playground
        };
        const graphQLServer = new ApolloServer(graphQLConfig);
        graphQLServer.applyMiddleware({ app, path: GraphQLRoutes.GraphQL });

        return new Promise((resolve, reject) => {
            graphQLHttpServer.listen(
                { port: graphqlConfig.port },
                () => {
                    console.log(
                        'Apollo Server (graphQL) listens on ' +
                        `http://localhost:${graphqlConfig.port}${graphQLServer.graphqlPath}`);
                    resolve();
                });
        });
    }

    private onContext(...p: any[]): GraphQLContext {
        return this.graphQlContextService.buildContextFromRequest(p[0].req);
    }
}
