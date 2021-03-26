import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Modal, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../shared/card';
import { globalStyles } from '../styles/global'
import { MaterialIcons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context';
import ReviewForm from './reviewForm';

export default function Home({ navigation, route }) {
    const ICON_SIZE = 28;
    const [modalOpen, setModalOpen] = useState(false);

    const [reviews, setReviews] = useState([
        { title: 'Hulk', rating: 2, body: 'lorem ipsum', key: '1' },
        { title: 'Ant Man', rating: 3, body: 'lorem ipsum', key: '2' },
        { title: 'Spider-Man', rating: 3, body: 'lorem ipsum', key: '3' },
        { title: 'Thor Ragnarok', rating: 4, body: 'lorem ipsum', key: '4' },
        { title: 'The Avenger\'s', rating: 4, body: 'lorem ipsum', key: '5' },
    ]);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews]
        })
        setModalOpen(!modalOpen);
    }
    const deleteReview = (id) => {
        setReviews(() => {
            return reviews.filter((item) => item.key !== id);
        })
    }

    useEffect(() => {
        // Checks if route.params? has the parameter of reviewToDelete; if that's true, then proceed to get the title & the key of the review to delete it.
        if (route.params?.reviewToDelete) {
            // Get the destructured values from the variables inside reviewToDelete Object.
            const { key: id, title } = route.params.reviewToDelete;
            // Invoke deleteReview function & pass the id as an argument.
            deleteReview(id)
            Alert.alert('Information', `Review deleted succesfully:\n${title}`, [{ title: 'ok' }])
        }
        // Re-runs useEffect if route.params has changed.
    }, [route.params])

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <SafeAreaView style={styles.modalContent}>
                        <MaterialIcons
                            name="close"
                            size={ICON_SIZE}
                            style={{ ...styles.modalToggle, ...styles.modalClose }}
                            onPress={() => (setModalOpen(!modalOpen))}
                        />
                        <ReviewForm addReview={addReview} />
                    </SafeAreaView>
                </TouchableWithoutFeedback>
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
