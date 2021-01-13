
import { fetchItunes } from './itunes'


beforeEach(() => {
    fetchMock.mockOnce(`{"a":1}`)
})

it('the data is peanut butter', () => {
    return expect(fetchItunes()).resolves.toEqual({a:1});
})