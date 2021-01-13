

const INITIAL_STATE = {
    isLoading: false,
    posts:[]
}

const reducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case 'FETCH_START':
            return {...state, isLoading: true }
        case 'FETCH_SUCCESS':
            return {...state, isLoading: false, posts: action.response }
        default:
            return {...state}
    }
}

export default reducer



