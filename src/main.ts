import 'reflect-metadata';
import { Container } from 'typedi';
import { Server } from './core/graphql/server';
import { Configuration } from './core/config/configuration';

export const startMsg = () => console.log('GRAPHQL-SIMPLE-API is started...');

(async () => {
    startMsg();
    const server = Container.get(Server);
    const config: Configuration = {
        express: {
            bodyLimit: '100kb'
        },
        graphql: {
            port: 4800
        }
    };
    server.configuration = config;
    await server.startAsync();
})();
