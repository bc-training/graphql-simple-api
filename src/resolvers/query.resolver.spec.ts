import { queryResolvers } from './query.resolvers';
import { PongType } from '../model/generated/simpleapi.model';
import { GraphQLContext } from '../core/graphql/graphql-context';

describe('QueryResolvers', () => {

    describe('ping', () => {
        it('should return pong', async () => {
            // Arrange
            const args: any = undefined;
            const ctx: GraphQLContext = {
                noop: 'ok'
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
});
