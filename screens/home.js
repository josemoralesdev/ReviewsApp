
import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { globalStyles } from '../styles/global'

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'Hulk', rating: 4.3, body: 'lorem ipsum', key: '1' },
        { title: 'Ant Man', rating: 4.2, body: 'lorem ipsum', key: '2' },
        { title: 'Spider-Man', rating: 4.4, body: 'lorem ipsum', key: '3' },
        { title: 'Thor Ragnarok', rating: 4.8, body: 'lorem ipsum', key: '4' },
        { title: 'The Avenger\'s', rating: 4.7, body: 'lorem ipsum', key: '5' },
    ]);
    // const pressHandler = () => {
    //     navigation.navigate('ReviewDetails')
    // }
    return (
        <View style={globalStyles.container}>
            {/* <Text style={globalStyles.titleText}>Home Screen</Text> */}
            {/* Wrap with touchableopacity */}
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => (navigation.navigate('ReviewDetails', item))}>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

