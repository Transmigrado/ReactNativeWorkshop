const INITIAL_STATE = {
    isLoading: false,
    list: []
 }
 
 const reducer = (state = INITIAL_STATE, action = {}) => {
     switch (action.type) {
        case 'PERSON_FETCH_REALM_SUCCESS':
            return {...state, list: action.response}
   
         default:
             return {...state}
     }
 }
 
 
 export default reducer 