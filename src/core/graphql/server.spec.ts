import { Server } from './server';
import { Configuration } from '../config/configuration';

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
        const server = new Server();
        server.configuration = config;

        // Act
        const targetPromise = server.startAsync();

        // Assert
        await expect(targetPromise).resolves.toBeUndefined();
    });
});
