import React from 'react'
import { View, TouchableOpacity, Image, SafeAreaView, StyleSheet, } from 'react-native'
import { useSelector, } from 'react-redux'
import { AppGlobalStateM, } from '../../models/stateModels'
import c from '../../color/colors'

import { MyText, } from '../texts'


type Props = {
    title: String,  // Default 'Unknown'
    onPressDollar: () => void,
    onPressLang: () => void,
}


export default TabHeaderView = (props: Props) =>
{
    const appGlobalState: AppGlobalStateM = useSelector(state => state.AppGlobalState)

    function getFlagByLAngKey(langKey: String)
    {
        switch(langKey)
        {
            case 'en':
                return '🇺🇸'

            case 'ru':
                return '🇷🇺'

            default:
                return '🇺🇸'
        }
    }

    return (
        <View style={ styles.container }>
            <SafeAreaView/>
            
            <View style={ styles.headerContainer }>

                <View style={ styles.titleView }>
                    <MyText style={ styles.titleText }>{ props.title }</MyText>
                </View>
                

                <View style={ styles.leftSideView }>

                </View>

                <View style={ styles.rightSideView }>

                    {/* <TouchableOpacity
                        hitSlop = { {
                            top: 10,
                            left: 10,
                            right: 10,
                            bottom: 10,
                        } }
                        onPress = { props.onPressDollar }
                    >
                        <Image
                            source = { require('../../../assets/icons/common/dollar_icon.png') }
                        />
                    </TouchableOpacity> */}

                    {/* <TouchableOpacity
                        style = { styles.langBtn }
                        hitSlop = { {
                            top: 10,
                            left: 10,
                            right: 10,
                            bottom: 10,
                        } }
                        onPress = { props.onPressLang }
                    >
                        <MyText style={ styles.langBtnText }>{ getFlagByLAngKey(appGlobalState.langKey) }</MyText>
                    </TouchableOpacity> */}

                </View>

            </View>

        </View>
    )
}
TabHeaderView.defaultProps = {
    title: '',
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: c().d_background,
    },
    headerContainer: {
        height: 40,
        paddingHorizontal: 16,
        flexDirection: 'row',
    },
    leftSideView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightSideView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    titleView: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: c().main_white,
    },
    langBtn: {
        marginLeft: 20,
    },
    langBtnText: {
        fontSize: 24,
    },
})
