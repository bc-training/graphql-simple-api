import 'reflect-metadata';
import { Server } from './server';
import { Configuration } from '../config/configuration';
import { ConfigurationService } from '../config/configuration.service';
import { LoggingService } from '../logging/logging.service';
import { GraphQLContextService } from './graphql-context.service';
import { RequestService } from '../../service/request.service';
import { RequestRepository } from '../../repository/request.repository';
import { RequestMapper } from '../../mapper/request.mapper';

describe('Server', () => {
    it('should start the server asynchronously', async () => {
        // Arrange
        const config: Configuration = {
            express: {
                bodyLimit: '100kb'
            },
            graphql: {
                port: 0
            }
        };
        const configService = new ConfigurationService();
        const loggingService = new LoggingService();
        const requestRepository = new RequestRepository();
        const requestMapper = new RequestMapper();
        const requestService = new RequestService(requestRepository, requestMapper);
        const graphqlContextService = new GraphQLContextService(requestService);
        const server = new Server(configService, loggingService, graphqlContextService);
        server.configuration = config;

        // Act
        const targetPromise = server.startAsync();

        // Assert
        await expect(targetPromise).resolves.toBeUndefined();
    });
});
