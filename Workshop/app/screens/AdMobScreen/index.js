
import React from 'react'
import { View , Text, Platform} from 'react-native'

import {
  Banner,
} from 'react-native-ad-manager'

const addUnitID = (Platform.OS === 'ios') ? "ca-app-pub-4120634441242748/7994518823" : "ca-app-pub-4120634441242748/4740017139"

const AdMobScreen = () => {


    return (
        <>
        <View
          style={{
            flex: 1,
          }}
        ><View style={{ width: '100%', height: 100, flexDirection:'column' }}>

            <View style={{flex: 1}}>
              <Banner
                adSize="fullBanner"
                adUnitID={addUnitID}
                testDevices={['0CDBFE72-D589-4F93-B85D-9263D0DCFF4E']}
                onAdFailedToLoad={error => console.error(error)}
                onAppEvent={event => console.log(event.name, event.info)}
              />
            </View>



            <Text>Hola</Text>
        </View>
        </View>
      </>
    )
}

export default AdMobScreen