import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, } from 'react-native'
import c from '../../color/colors'
import t from '../../translator/translator'


type Props = {
    title: String,  // Default 'Unknown'
    isHideBackBtn: Boolean,
    onBack: () => void,
}


const BackHeader = (props: Props) =>
{
    return (
        <View style={ styles.container }>

            {
                !props.isHideBackBtn
                &&
                <TouchableOpacity
                    style = { styles.sideView }
                    onPress = { props.onBack }
                >
                    <Image
                        style = { styles.icon }
                        source = { require('../../../assets/images/common/back_arrow_icon.png') }
                        resizeMode = 'contain'
                    />
                </TouchableOpacity>
            }

            <View style={ styles.headerCenter }>

                <Text style={ styles.titleText }>{ props.title }</Text>

            </View>

            {
                !props.isHideBackBtn
                &&
                <View
                    style = { styles.sideView }
                >
                </View>
            }

        </View>
    )
}
export default BackHeader
BackHeader.defaultProps = {
    title: t().AppName,
    isShowBackBtn: false,
}



const styles = StyleSheet.create({
    container: {
        height: 60,
        paddingHorizontal: 10,
        flexDirection: 'row',
        backgroundColor: c().main_black,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    sideView: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerCenter: {
        flex: 1,
        alignItems: 'center'
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: c().main_white,
    },
    icon: { 
        height: 18,
    },
})