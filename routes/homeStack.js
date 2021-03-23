import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'

const Stack = createStackNavigator();
export const HomeStack = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator
                initialRouteName="Home"
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
                    name="Home"
                    component={Home}
                    options={{ title: "Home Screen" }}
                >
                </Stack.Screen>
                <Stack.Screen
                    name="ReviewDetails"
                    component={ReviewDetails}
                    options={{ title: "Review Details" }}
                >
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}