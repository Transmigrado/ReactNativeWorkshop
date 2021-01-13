
import { fetchSearchItunesThunk } from './itunes'

const itunesResponse  = {
    results:[
        {
            trackName: 'Coldplay'
        }
    ]
}

beforeEach(() => {
    fetchMock.mockOnce(JSON.stringify(itunesResponse))
})


it('probamos que al ejecutar la función se ejecuta el dispatch con "FETCH_START"', () => {
    const dispatch = jest.fn()
    const Thunk = fetchSearchItunesThunk('Cualquier Cosa')
    Thunk(dispatch)
    expect(dispatch).toHaveBeenCalledWith({type: 'FETCH_START'})
})

it('probamos que si fetchItunes es exitoso enviamos el evento "FETCH_SUCCES" con los resultados', async () => {
    const dispatch = jest.fn()
    const Thunk = fetchSearchItunesThunk('Cualquier Cosa')
    await Thunk(dispatch)
    expect(dispatch).toHaveBeenCalledWith({type: 'FETCH_SUCCESS', response: itunesResponse.results})
})