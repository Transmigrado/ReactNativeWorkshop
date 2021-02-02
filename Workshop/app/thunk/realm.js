import Realm from 'realm'
import Person from '../Model/person'

const realm = new Realm({ schema: [Person] })

export const fetchFromRealm = () =>  dispatch => {
    dispatch({ type: 'PERSON_FETCH_REALM_START' })
        
    const response = realm.objects('Person')
   
    dispatch({ type: 'PERSON_FETCH_REALM_SUCCESS', response })
 
}


export const addToRealm = (payload, isConnectionToInternet) => dispatch => {
    dispatch({ type: 'ADD_PERSON_START' })
    realm.write(() => {
        if(!isConnectionToInternet){
            realm.create('Person', {...payload, isSync: false})
        }
       
        dispatch({ type: 'ADD_PERSON_sUCCESS' })
    })

    
}