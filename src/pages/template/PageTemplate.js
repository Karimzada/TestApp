import React, { Component } from 'react'
import { View, StyleSheet, } from 'react-native'
import { StackNavigationProp, } from '@react-navigation/stack'
import { connect, } from 'react-redux'
import c from '../../color/colors'
import t from '../../translator/translator'

import BasePurePage from '../BasePurePage'
import MainPageViewer from '../../components/pageViewers/MainPageViewer'
import Header from '../../components/headers/Header'



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
            <MainPageViewer>

                <Header
                    title = '-----'
                />

                <View style={ styles.container }>


                </View>
            </MainPageViewer>
        )
    }

}


// function mapStateToProps(state)
// {
//     return {
//         notifications: state['notifications'],
//     }
// }
// export default connect(mapStateToProps, NotificationActionCreators)(PageTemplate)



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollCnt: {
        paddingBottom: 80,
    },
})
