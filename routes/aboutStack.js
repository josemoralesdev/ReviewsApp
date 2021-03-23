import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import About from '../screens/about'
const Stack = createStackNavigator();
export default function AboutStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="About"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'dodgerblue',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    }
                }}
            >
                <Stack.Screen
                    name="About"
                    component={About}
                    options={{ title: 'About' }}
                >

                </Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    )
}