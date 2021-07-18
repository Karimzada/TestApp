import React, { Component } from 'react'
import { View, FlatList, RefreshControl, Alert, StyleSheet, } from 'react-native'
import { StackNavigationProp, } from '@react-navigation/stack'
import { store } from '../../redux/store'
import { connect, } from 'react-redux'
import { Page_1StateM, } from '../../models/stateModels'
import Page_1AC, { Type } from '../../redux/actionCreators/Page_1AC'
import { EventApiService, } from '../../apiServices'
import { GetEventsByPageResM, } from '../../models/responceModels'
import c from '../../color/colors'
import t from '../../translator/translator'

import BasePage from '../BasePage'
import SafeAreaPageViewer from '../../components/pageViewers/SafeAreaPageViewer'
import TitleView from './TitleView'
import ItemView from './itemView/ItemView'
import ItemSeperator from './itemView/ItemSeperator'
import EmptyTitleView from './EmptyTitleView'
import ListLoadingView from './ListLoadingView'


type Props = {
    navigation: StackNavigationProp<''>,
    route: {
        params: {

        }
    },

    reduxState: Page_1StateM,
} & Type


class Page_1 extends BasePage<Props>
{
    eventApiService = new EventApiService()

    timerInterval = null
    seconds = 0
    autoUpdateSecodLimit = 60
    customUpdateSecodLimit = 15

    pageNum = 1
    perPage = 25
    isLoadDataCalled = false

    state: {
        isRefreshing: Boolean,
        items: GetEventsByPageResM[],
    }

    constructor(props)
    {
        super(props)
        this.onFocusPage = this.onFocusPage.bind(this)
        this.onBlurPage = this.onBlurPage.bind(this)
        this.updatePage = this.updatePage.bind(this)
        this.customUpdate = this.customUpdate.bind(this)
        this.onListEndReached = this.onListEndReached.bind(this)

        this.state = {
            isRefreshing: false,
            items: [],
        }
    }


    async componentDidMount()
    {
        this.props.navigation.addListener('focus', this.onFocusPage)
        this.props.navigation.addListener('blur', this.onBlurPage)
    }

    componentWillUnmount()
    {
        this.stopTimer()
    }

    onFocusPage()
    {
        console.log('--- Focus')
        this.startTimer()
        this.updatePage()
    }

    onBlurPage()
    {
        console.log('--- Blur')
        this.stopTimer()
    }

    updatePage()
    {
        this.pageNum = 1
        this.props.setState({ items: [] })
        this.loadData()
        this.reSetTimer()
    }

    async loadData()
    {
        if(this.isLoadDataCalled)
            return
        this.isLoadDataCalled = true

        console.log('--- load data')

        try
        {
            this.setState({ isRefreshing: true, })

            let res = await this.eventApiService.getEventsByPage({ page: this.pageNum, per_page: this.perPage })
            let newArr = [...this.props.reduxState?.items, ...res]

            this.props.setState({ items: newArr })
        }
        catch(err)
        {
            this.alertsByHttpRes(err)
        }
        finally
        {
            this.pageNum++
            this.setState({ isRefreshing: false, })
            this.isLoadDataCalled = false
        }
    }

    startTimer()
    {
        this.timerInterval = setInterval(() =>
        {
            this.seconds++
            console.log('--- second: ', this.seconds)

            if(this.seconds == this.autoUpdateSecodLimit)
                this.updatePage()
        }, 1000)
    }

    reSetTimer()
    {
        this.seconds = 0
    }

    stopTimer()
    {
        clearInterval(this.timerInterval)
    }

    customUpdate()
    {
        if(this.seconds > 15)
        {
            this.updatePage()
        }    
        else
        {
            // Alert.alert(
            //     'Warning',
            //     '15 seconds have not passed',
            // )
        }
    }


    render()
    {
        return (
            <SafeAreaPageViewer>

                <View style={ styles.container }>
                    <TitleView/>

                    <FlatList
                        contentContainerStyle = { styles.scrollCnt }
                        showsVerticalScrollIndicator = { false }
                        rende
                        refreshControl = {
                            <RefreshControl
                                refreshing = { this.state.isRefreshing }
                                tintColor = { c().main_yellow }
                                onRefresh = { this.customUpdate }
                            />
                        }
                        data = { this.props.reduxState.items }
                        keyExtractor = { (item) => item.id }
                        renderItem = { ({ item, index }) => (
                            <ItemView
                                item = { item }
                                onPress = { () => this.onPressItem(item) }
                            />
                        ) }
                        ListEmptyComponent = { <EmptyTitleView/> }
                        ListFooterComponent = {
                            this.props.reduxState?.items?.length > 0
                            &&
                            <ListLoadingView/>
                        }
                        ItemSeparatorComponent = { () => <ItemSeperator/> }
                        onEndReached = { this.onListEndReached }
                        onEndReachedThreshold = { 0.5 }
                    />

                </View>
            </SafeAreaPageViewer>
        )
    }

    onListEndReached()
    {
        if(this.props.reduxState.items.length <= 0)
            return

        this.loadData()
    }

    onPressItem(item: GetEventsByPageResM)
    {
        this.props.navigation.navigate('Page_2', { item })
    }

}



function mapStateToProps(state)
{
    return {
        reduxState: state['Page_1State'],
    }
}
export default connect(mapStateToProps, Page_1AC)(Page_1)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: c().d_background,
    },
    scrollCnt: {
        paddingTop: 16,
        paddingBottom: 40,
        paddingHorizontal: 10,
    },
})
