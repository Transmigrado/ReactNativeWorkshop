import React, { useEffect } from 'react'
import { View, FlatList, Text, StyleSheet, Image, TouchableOpacity, NativeModules } from 'react-native'
const { RCTCalendarModule } = NativeModules

const DATA = [
    {
        title:'Item 1',
        description: ' 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et felis iaculis, eleifend est nec, volutpat lacus. Praesent quis faucibus orci. Mauris aliquam scelerisque ante, at eleifend erat dictum eu. In diam justo, pretium eget viverra nec, convallis quis turpis. Aliquam ipsum nulla, suscipit dignissim malesuada vel, sagittis a felis. Aenean non lectus auctor, egestas diam eget, faucibus enim. Integer tristique lectus eget sem hendrerit volutpat.'
    }
]

/*
const RenderItem = ({item, index})  => {
    return (
     <View style={styles.item}>
         <Text>{item.title}</Text>
     </View>
    )
 }
 */

 const SquareItem = ({item, index})  => {
    return (
     <View style={styles.itemSquare}>
         <Image source={{ uri:'https://d3hnfqimznafg0.cloudfront.net/images/news/ImageForNews_26919_15786618897301054.png'}}
            style={{width: 50, height: 50, borderRadius: 25}}
         />
     </View>
    )
 }

const ListScreen = ({ navigation }) => {

    useEffect(() => {
        RCTCalendarModule.helloWorld("Hola")
        console.log('CALENDAR', RCTCalendarModule)
    }, [])
   
    const RenderItem = ({item, index})  => {
        return (
         <TouchableOpacity style={styles.item} onPress={() => {
            navigation.openDrawer()
         }}>
             <Text>{item.title}</Text>
         </TouchableOpacity>
        )
     }

    return (
        <View style={{flex: 1}}>
            <View style={{height: 80, padding: 10}}>

                <TouchableOpacity  onPress={() => {
            navigation.openDrawer()
         }}>
                    <Text>Abrir</Text>
                </TouchableOpacity>
            <FlatList
                data={DATA}
                renderItem={SquareItem}
                horizontal={true}
                style={styles.horizontal}
            />
            </View>
          
            <FlatList
                data={DATA}
                renderItem={RenderItem}
                style={styles.list}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    list:{
  
    },
    horizontal:{
        height: 60,
    },
    item:{
        padding: 10,
        backgroundColor:'white',
        borderBottomColor: '#CCC',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    itemSquare:{
        width: 60,
        height: 60,
        backgroundColor:'white',
        borderColor: '#CCC',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10
    }
})

export default ListScreen