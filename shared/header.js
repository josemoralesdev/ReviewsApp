import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function Header({ navigation, title = "Reviews App" }) {
    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <MaterialIcons name="menu" size={32} style={styles.icon} onPress={openMenu} />
                <View>
                    <Text style={styles.headerText}>{title}</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: 'dodgerblue',
        width: '100%',
    },
    header: {
        width: '100%',
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'dodgerblue'

    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 16,
    },
})

