

const INITIAL_STATE = {
   isLoading: false,
   tracks: []
}

const reducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case 'FETCH_START':
            return {...state, isLoading: true }
        case 'FETCH_SUCCESS':
            return {...state,  isLoading: false , tracks: action.response }
        case 'FETCH_ERROR':
            return {...state, isLoading: false }
        default:
            return {...state}
    }
}


export default reducer



