
import { fetchItunes } from './itunes'


beforeEach(() => {
    fetchMock.mockOnce(`{"a":1}`)
})

it('probamos que la respuesta es un json', () => {

    return expect(fetchItunes()).resolves.toEqual({a:1})
})