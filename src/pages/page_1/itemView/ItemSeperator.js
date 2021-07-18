import React from 'react'
import { View, StyleSheet, } from 'react-native'
import c from '../../../color/colors'



export default ItemSeperator = (props: Props) =>
{
    return (
        <View style={ styles.container }/>
    )
}



const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
        height: 1,
        backgroundColor: c().main_white,
    },
})
