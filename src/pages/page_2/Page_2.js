import React, { Component } from 'react'
import { ScrollView, StyleSheet, } from 'react-native'
import { StackNavigationProp, } from '@react-navigation/stack'
import { GetEventsByPageResM, } from '../../models/responceModels'
import c from '../../color/colors'
import t from '../../translator/translator'

import BasePage from '../BasePage'
import SafeAreaPageViewer from '../../components/pageViewers/SafeAreaPageViewer'
import BackHeader from '../../components/headers/BackHeader'
import BodyView from './BodyView'

type Props = {
    navigation: StackNavigationProp<''>,
    route: {
        params: {
            item: GetEventsByPageResM,
        }
    },

}


export default class Page_2 extends BasePage<Props>
{
    item: GetEventsByPageResM = null

    state: {

    }

    constructor(props)
    {
        super(props)

        this.item = this.props.route.params?.item


        this.state = {

        }
    }


    render()
    {
        return (
            <SafeAreaPageViewer>

                <BackHeader
                    title = { t().Details() }
                    onBack = { this.props.navigation.goBack }
                />

                <ScrollView style={ styles.container }>
                    
                    <BodyView
                        item = { this.item }
                    />

                </ScrollView>
            </SafeAreaPageViewer>
        )
    }



}



const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        flex: 1,
        backgroundColor: c().d_background,
    },
    scrollCnt: {
        paddingBottom: 80,
    },
})
