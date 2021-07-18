import React, { Component } from 'react'
import { View, StyleSheet, } from 'react-native'
import { StackNavigationProp, } from '@react-navigation/stack'
import c from '../../color/colors'
import t from '../../translator/translator'

import BasePurePage from '../BasePurePage'
import TabPagePageViewer from '../../components/pageViewers/TabPagePageViewer'
import TabHeaderView from '../../components/headers/TabHeaderView'



type Props = {
    navigation: StackNavigationProp<''>,
}


export default class PageTemplate extends BasePurePage<Props>
{
    state: {

    }

    constructor(props: Props)
    {
        super(props)

    }

    
    render()
    {
        return (
            <TabPagePageViewer>

                <TabHeaderView
                    title = '-----'
                />

                <View style={ styles.container }>


                </View>
            </TabPagePageViewer>
        )
    }

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollCnt: {
        paddingBottom: 80,
    },
})
