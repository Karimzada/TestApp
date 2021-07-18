import React, { PureComponent } from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'
import c from './src/color/colors'



export default class App extends PureComponent
{
    constructor(props)
    {
        super(props)
        this.initialMethodsForStartApp = this.initialMethodsForStartApp.bind(this)

        this.state = {
            MainComponent : null,
            isAppReady : false
        }
    }


    componentDidMount()
    {
        this.initialMethodsForStartApp()
    }


    async initialMethodsForStartApp()
    {
        try {
            this.setState({
                MainComponent : (await import('./AppStart.js')).default,
                isAppReady: true,
            })
        }
        catch(err) {
            this.setState({
                isAppReady: false,
            })
        }
    }


    render()
    {
        if(!this.state.isAppReady)
            return null // <LaunchPage/>

        return (
            <>
                <StatusBar
                    barStyle = 'dark-content'
                    backgroundColor = { c().d_header }
                />

                <View style={ styles.appView }>

                    <this.state.MainComponent/>

                </View>
            </>
        )
    }

}



const styles = StyleSheet.create({
    appView: {
        flex: 1,
    },
})
