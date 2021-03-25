import React from 'react'
import { StyleSheet, Button, View, Text, TextInput, SafeAreaView } from 'react-native'
import { Formik } from 'formik'
import { globalStyles } from '../styles/global'



export default function ReviewForm() {
    return (
        <SafeAreaView style={globalStyles.container}>
            <Formik
                initialValues={{
                    title: '',
                    body: '',
                    rating: '',
                }}
                onSubmit={(values) => { console.log(values) }}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Review Title"
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                        />
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Review Body"
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                        />
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Rating 1-5"
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType="numeric"
                        />
                        <Button title="Submit" onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>

        </SafeAreaView>
    )
}