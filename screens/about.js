

import React from 'react'
import { View, Text, StyleSheet, Linking } from 'react-native'
import { globalStyles } from '../styles/global'

export default function About() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Project created watching {'\n'}The Net Ninja React Native Series.</Text>
            <Text
                style={styles.linkText}
                onPress={() => Linking.openURL('https://www.youtube.com/playlist?list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ')}>Press here to open the series.</Text>
            <Text style={styles.footerText}>José E. Morales 2021</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footerText: {
        alignSelf: 'flex-end',
        marginTop: 'auto',
        marginBottom: 16
    },
    linkText: {
        color: 'blue',
        fontSize: 16,
        marginVertical: 16,

    }
})

