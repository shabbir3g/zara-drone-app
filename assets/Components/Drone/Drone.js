import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

export default function Drone(props) {
    const {_id, title, desc, price, image} = props.drone;
    return (
        <View style={styles.titles}> 
            <Text style={styles.title}>{title.substring(0, 18)}</Text>
            <Image style={{width: 300, height: 200}}
   source={{uri: image }}  resizeMode={'cover'}/>
            <Text style={styles.desc}>{desc.substring(0, 109)}</Text>
        </View>
    )
}
