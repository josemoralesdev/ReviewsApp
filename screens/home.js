
import React, { useState } from 'react'
import { View, Text, StyleSheet, Modal } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../shared/card';
import { globalStyles } from '../styles/global'
import { MaterialIcons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context';
import ReviewForm from './reviewForm';

export default function Home({ navigation }) {
    const ICON_SIZE = 28;
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        { title: 'Hulk', rating: 2, body: 'lorem ipsum', key: '1' },
        { title: 'Ant Man', rating: 3, body: 'lorem ipsum', key: '2' },
        { title: 'Spider-Man', rating: 3, body: 'lorem ipsum', key: '3' },
        { title: 'Thor Ragnarok', rating: 4, body: 'lorem ipsum', key: '4' },
        { title: 'The Avenger\'s', rating: 4, body: 'lorem ipsum', key: '5' },
    ]);
    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <SafeAreaView style={styles.modalContent}>
                    <MaterialIcons
                        name="close"
                        size={ICON_SIZE}
                        style={{ ...styles.modalToggle, ...styles.modalClose }}
                        onPress={() => (setModalOpen(!modalOpen))}
                    />
                    <ReviewForm />
                </SafeAreaView>
            </Modal>
            <MaterialIcons
                name="add"
                size={ICON_SIZE}
                style={styles.modalToggle}
                onPress={() => (setModalOpen(!modalOpen))}
            />
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => (navigation.navigate('ReviewDetails', item))}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalContent: {
        flex: 1,
    },
    modalText: {
    },
    modalToggle: {
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
    },
    modalClose: {
        marginTop: 50,
        marginBottom: 20,
    }
})
