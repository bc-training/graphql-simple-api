import { GraphQLRoutes } from './graphql-routes';

class GraphQLRoutesEx extends GraphQLRoutes {
    constructor() {
        super();
    }
}

describe('GraphQLRoutes', () => {
    it('should throw an error when ctor is called', () => {
        // Arrange

        // Act
        const util = () => new GraphQLRoutesEx();

        // Assert
        expect(util).toThrowError('Abstract GraphQLRoutes class cannot be instantiated !');
    });
});
