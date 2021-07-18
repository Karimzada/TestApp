import React, { PureComponent, } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { GlobalData, } from './src/others'
import * as RootNavigation from './src/navigations/RootNavigation'
import { navigationRef } from './src/navigations/RootNavigation'
import { ModalPortal } from 'react-native-modals'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import t, { languageConfig, } from './src/translator/translator'

export let appStartInstance: AppStart = null

export default class AppStart extends PureComponent
{
    navigationContainer: NavigationContainer = {  }

    defaultCoreUri = null

    constructor(props)
    {
        super(props)
        this.initialMethodsForMainView = this.initialMethodsForMainView.bind(this)

        this.state = {
            content: null,
        }

        appStartInstance = this
    }


    async componentDidMount()
    {
        await this.initialMethodsForMainView()
    }

    async initialMethodsForMainView()
    {
        await languageConfig.init()

        // GlobalData.setCoreIdentityApiUri('https://identity')
        GlobalData.setCoreApiUri('https://api.github.com')
 
        // let isAuthorized = await storageService.getIsAuthorized()

        // if(isAuthorized)
            this.mainNavInit()
        // else
        //     this.loginNavInit()
    }


    async loginNavInit()
    {
        this.setState({
            content: null,
        })
    }

    async mainNavInit()
    {
        // let currAuth = await storageService.getCurrentAuth()
        // globalData.setCurrentAuth(currAuth)
        // console.log('---- current auth', currAuth)

        // let currUser = await storageService.getCurrentUser()
        // globalData.setCurrentUser(currUser)


        this.setState({
            content: (await import('./src/navigations/MainNavigation')).default,
        })
    }

    updateAllComponent()
    {
        this.forceUpdate()
        navigationRef?.current?.setParams()
    }



    render()
    {
        if(!this.state.content)
            return null

        return (
            <Provider store={ store }>

                <NavigationContainer ref={ navigationRef }>
                    <this.state.content/>
                </NavigationContainer>

                <ModalPortal/>
            </Provider>
        )
    }


    async onLogined()
    {
        this.setState({
            content: (await import('./src/navigations/MainNavigation')).default,
        })
        this.notificationConfig()
        // this.initialMethodsForMainView()
    }

    async onLogOut()
    {
        // this.initialMethodsForMainView()
        // this.setState({
        //     content: (await import('./src/navigations/LoginNavigation')).default,
        // })
    }

}
