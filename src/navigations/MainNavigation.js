import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Page_1 from '../pages/page_1/Page_1'
import Page_2 from '../pages/page_2/Page_2'


const Stack = createStackNavigator()


export default function MyStack()
{
    return (
        <Stack.Navigator
            initialRouteName = 'Page_1'
            headerMode = 'none'
        >
            <Stack.Screen name='Page_1' component={ Page_1 } />
            <Stack.Screen name='Page_2' component={ Page_2 } />
        </Stack.Navigator>
    )
}
