import React, { useEffect, useState } from 'react'
import { View, Text, ImageBackground, ScrollView } from 'react-native'
import bg from '../../drone/1.jpg'
import styles from './styles'
import Drone from '../Drone/Drone'


export default function Drones() {
    const [drones, setDrones] = useState([]);
    
    useEffect(() => {
        const url = `https://whispering-lake-79289.herokuapp.com/products`;
        fetch(url)
        .then(res=> res.json())
        .then(data =>setDrones(data) )
    }, []);

    return (
        <View style={styles.droneContainer}> 
            
        <ScrollView style={styles.ScrollView}>

            <View style={styles.sectionTitle}> 
            <Text style={styles.title}>Our Products</Text>
            <Text style={styles.desc}>Zara Drone Provide to customer always best quality drone in budget price.</Text>
            </View>
            {drones.map(drone => <Drone
                        drone={drone}
                        key={drone?._id}
                        ></Drone>)
                }

        </ScrollView>
        </View>
    )
}
