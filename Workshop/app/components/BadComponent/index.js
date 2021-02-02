import React, { useEffect, useState} from 'react'
import { View } from 'react-native'

const BacComponent = () => {

    const [itunes, SetItunes] = useState([])
    useEffect(() => {
        fetch(`https://itunes.apple.com/search?term=${term}`)
                .then(response => response.json())
                .then(response => SetItunes(response.result))
    }, [])

    return (
        <View>
            
        </View>
    )
}

export default BacComponent