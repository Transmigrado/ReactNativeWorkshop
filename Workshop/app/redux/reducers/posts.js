

const INITIAL_STATE = {
    isLoading: false,
    posts:[]
}

const reducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case 'FETCH_START':
            return {...state, isLoading: true }
        default:
            return {...state}
    }
}

export default reducer
