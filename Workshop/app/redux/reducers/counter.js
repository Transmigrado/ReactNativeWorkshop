

const INITIAL_STATE = {
    count: 100
}

const reducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, count: state.count + 1 }
        case 'DECREMENT':
            return {...state, count: state.count - 1 }
        default:
            return {...state}
    }
}


export default reducer



