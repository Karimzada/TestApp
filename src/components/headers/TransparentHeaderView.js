import React from 'react'
import { View, TouchableOpacity, Image, SafeAreaView, StyleSheet, } from 'react-native'
import c from '../../color/colors'

import { MyText, } from '../texts'


type Props = {
    title: String,  // Default 'Unknown'
    onPressBack: () => void,
}


export default TransparentHeaderView = (props: Props) =>
{
    return (
        <View style={ styles.container }>
            <SafeAreaView/>
            
            <View style={ styles.headerContainer }>

                <View style={ styles.titleView }>
                    <MyText style = { styles.titleText }>{ props.title }</MyText>
                </View>

                <View style={ styles.leftSideView }>

                    <TouchableOpacity
                        hitSlop = { {
                            top: 20,
                            left: 20,
                            right: 20,
                            bottom: 20,
                        } }
                        onPress = { props.onPressBack }
                    >
                        <Image
                            source = { require('../../../assets/icons/common/left_arrow_icon.png') }
                        />
                    </TouchableOpacity>

                </View>

                <View style={ styles.rightSideView }>

                </View>

            </View>

        </View>
    )
}
TransparentHeaderView.defaultProps = {
    title: '',
}



const styles = StyleSheet.create({
    container: {

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
