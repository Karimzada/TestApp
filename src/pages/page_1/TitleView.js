import React from 'react'
import { View, Text, StyleSheet, } from 'react-native'
import c from '../../color/colors'
import t from '../../translator/translator'


type Props = {

}


export default TitleView = (props: Props) =>
{
    return (
        <View style={ styles.container }>
            <Text style={ styles.titleText }>{ t().Events() }</Text>
        </View>
    )
}
TitleView.defaultProps = {

}



const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        paddingHorizontal: 16,
    },
    titleText: {
        fontSize: 33,
        fontWeight: 'bold',
        color: c().text_E5E5E6,
    },
})
