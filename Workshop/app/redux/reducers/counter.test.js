
import reducer from './counter'

const INITIAL_STATE = {
    count: 0
}


it('mostrar que count incrementa cuando recibe INCREMENT', () => {
    const action = {type: 'INCREMENT'}
    const current = reducer(INITIAL_STATE, action)
    expect(current.count).toBe(1)
})