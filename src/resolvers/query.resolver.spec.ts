import 'reflect-metadata';
import { queryResolvers } from './query.resolvers';
import { PongType, QueryResolvers, QueryGetRequestArgs, F999_GetRequestOutput } from '../model/generated/simpleapi.model';
import { GraphQLContext } from '../core/graphql/graphql-context';
import Container from 'typedi';
import { RequestService } from '../service/request.service';
import createMockInstance from 'jest-create-mock-instance';
import { MockDataService } from '../../src/service/mock-data.service';
import { RequestService } from '../../src/service/request.service';

describe('QueryResolvers', () => {

    const mockDataService = createMockInstance(MockDataService);
    const configService = createMockInstance(ConfigService);

    describe('ping', () => {
        it('should return pong', async () => {
            // Arrange
            const args: any = undefined;
            const ctx: GraphQLContext = {
                requestService: Container.get(RequestService)
            };
            const info: any = null;
            const query: any = queryResolvers.Query;

            // Act
            const result: PongType = await query.ping(args, ctx, info);

            // Assert
            expect(result).toBeDefined();
            expect(result.message).toBe('pong');
        });
    });

    describe('getRequest', () => {
        it('should return a Request', async () => {
               // Arrange
               const requestServiceMock = <RequestService>{
                getRequestAsync: (_: F267O4_RequestIdentifierInput, ctx: GraphQLContext) => Promise.resolve(<F267_GetRequestOutput>{
                    serviceData: {
                        request: {
                            title: 'Request title',
                            type: {
                                codeSystem: 'REQ-001',
                                value: 'Request type'
                            }
                        }
                    }
                })
            };
            const args = <QueryGetRequestArgs>{
                request: {
                    serviceData: {
                        requestIdentifier: { id: '123456789' }
                    }
                }
            };
            const graphQLContext: GraphQLContext = {
                requestService: requestServiceMock,
                request: <any>{},
                mockDataService,
                configService
            };
            const query: any = queryResolvers.Query;

            // Act
            const result: F267_GetRequestOutput = await query.GetRequest(null, args, graphQLContext, null);

            // Assert
            expect(result).toBeDefined();
            expect(result.serviceData.request.title).toBe('Request title');
            expect(result.serviceData.request.type.codeSystem).toBe('REQ-001');
            expect(result.serviceData.request.type.value).toBe('Request type');       });
    });
});
