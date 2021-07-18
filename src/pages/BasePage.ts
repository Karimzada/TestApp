import React, { Component } from 'react'
import { Alert, StyleSheet, } from 'react-native'
// import { store, } from '../redux/store'
// import { LoadingGlobalModalAC, } from '../redux/actionCreators'
import t from '../translator/translator'



export default class BasePage<T> extends Component<T>
{
    constructor(props)
    {
        super(props)

        // subscribe('AppGlobalState.langKey', () => this.forceUpdate())
    }


    // showGlobalLoading()
    // {
    //     store.dispatch(LoadingGlobalModalAC.toggleVisibility(true))
    // }

    // closeGlobalLoading()
    // {
    //     store.dispatch(LoadingGlobalModalAC.toggleVisibility(false))
    // }

    async alertsByHttpRes(errRes: Response)
    {
        console.log('--- Error res', errRes)
        let reasons = errRes.json && (await errRes.json())?.reasons
        if(reasons)
        {
            Alert.alert(
                t().Error,
                reasons.join('\n'),
            )
            return
        }

        switch(errRes.status)
        {
            default:
                Alert.alert(
                    t().Error,
                    // t().SomethingWentWrong,
                ) 
            break
        }
    }

}



const styles = StyleSheet.create({

})
