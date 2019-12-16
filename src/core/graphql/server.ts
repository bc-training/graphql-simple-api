import { Service } from 'typedi';
import express from 'express';
import { createServer } from 'http';
import { ApolloServer, Config } from 'apollo-server-express';
import { typeDefs } from '../../model/generated/simpleapi.schema';
import { GraphQLRoutes } from './graphql-routes';
import { Configuration } from '../config/configuration';
import { resolvers } from '../../resolvers/resolvers';
import { GraphQLContext } from './graphql-context';

@Service()
export class Server {

    private _config!: Configuration;

    set configuration(value: Configuration) {
        this._config = value;
    }

    get configuration(): Configuration {
        return this._config;
    }

    async startAsync(): Promise<void> {
        await this.createGraphQLServer(this.createExpressInstance());
    }

    private createExpressInstance(): express.Express {
        const app = express();
        app.use(express.json({
            // Configuration value overriding the Express default of 100kb
            limit: this.configuration.express.bodyLimit
        }));
        return app;
    }

    private createGraphQLServer(app: any): Promise<void> {
        const graphQLHttpServer = createServer(app);
        const graphqlConfig = this.configuration.graphql;
        const graphQLConfig: Config = {
            typeDefs: typeDefs,
            resolvers: resolvers as any,
            context: <GraphQLContext>{noop: `'test-${new Date().toISOString()}`},
            debug: graphqlConfig.debug,
            tracing: graphqlConfig.tracing,
            introspection: graphqlConfig.introspection,
            playground: graphqlConfig.playground
        };
        const graphQLServer = new ApolloServer(graphQLConfig);
        graphQLServer.applyMiddleware({ app, path: GraphQLRoutes.GraphQL });
        graphQLServer.installSubscriptionHandlers(graphQLHttpServer);

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
}
