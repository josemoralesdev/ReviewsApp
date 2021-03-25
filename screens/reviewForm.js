import React from 'react'
import { StyleSheet, Button, View, Text, TextInput, SafeAreaView } from 'react-native'
import { Formik } from 'formik'
import { globalStyles } from '../styles/global'
import * as yup from 'yup'

export default function ReviewForm({ addReview }) {
    const reviewSchema = yup.object(
        {
            title: yup.string().required().min(5),
            body: yup.string().min(5).required(),
            rating: yup.string().required().test('is num 1-5', 'Rating must be a number btwn 1-5', (val) => {
                return parseInt(val) < 6 && parseInt(val) > 0
            })
        }
    )
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{
                    title: '',
                    body: '',
                    rating: '',
                }}
                // To reset the form you need to pass an argument of actions.
                // (values, actions)
                onSubmit={(values) => {
                    addReview(values)
                    //Then you call actions with the resetForm function.
                    //actions.resetForm();
                }}
                validationSchema={reviewSchema}
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
        </View>
    )
}