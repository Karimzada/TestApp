import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet, } from 'react-native'
import c from '../../color/colors'
import t from '../../translator/translator'


type Props = {

}


export default EmptyTitleView = (props: Props) =>
{
    return (
        <View style={ styles.container }>
            <ActivityIndicator
                size = 'large'
                color = { c().main_yellow }
            />
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems: 'center',
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: c().main_yellow,
    },
})
