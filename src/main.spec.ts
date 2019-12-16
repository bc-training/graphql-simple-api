import { startMsg } from './main';

describe('Main', () => {

    it('Jest framework should be successfully installed', () => {
        // Arrange
        const message = 'GRAPHQL-SIMPLE-API is started...';
        console.log = jest.fn();

        // Act
        startMsg();

        // Assert
        expect(console.log).toHaveBeenCalledWith(message);
    });
});
