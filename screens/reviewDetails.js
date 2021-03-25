import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Card from '../shared/card';
import { globalStyles, ratingImages } from '../styles/global'

export default function ReviewDetails({ navigation, route }) {
    const { title, body, rating } = route.params;
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titleText}>{title}</Text>
                <Text style={globalStyles.paragraph}>{body}</Text>
                <View style={styles.rating}>
                    <Text>Reviews rating:</Text>
                    <Image source={ratingImages[rating]} />
                </View>
            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#eee',
        marginTop: 16,
        paddingTop: 16,
        justifyContent: 'center'
    }
})
