import React from 'react'
import { View, Text, StyleSheet, } from 'react-native'
import c from '../../color/colors'
import t from '../../translator/translator'


type Props = {

}


export default EmptyTitleView = (props: Props) =>
{
    return (
        <View style={ styles.container }>
            <Text style={ styles.titleText }>{ "Poka net dannix" }</Text>
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
