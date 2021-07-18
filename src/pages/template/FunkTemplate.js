import React from 'react'
import { View, ViewStyle, StyleSheet, } from 'react-native'
import c from '../../color/colors'
import t from '../../translator/translator'

import { MyText, } from '../../components/texts'


type Props = {
    containerViewStyle: ViewStyle,
}


export default FunkTemplate = (props: Props) =>
{
    return (
        <View style={ [styles.container, props.containerViewStyle] }>

        </View>
    )
}
FunkTemplate.defaultProps = {

}



const styles = StyleSheet.create({
    container: {

    },
})
