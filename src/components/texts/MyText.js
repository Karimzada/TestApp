import React from 'react'
import { Text, TextProps, StyleSheet, } from 'react-native'
import c from '../../color/colors'
import t from '../../translator/translator'


type Props = TextProps & {
    children: String,
}


export default MyText = (props: Props) =>
{
    return (
        <Text { ...props }>{ props.children }</Text>
    )
}
MyText.defaultProps = {

}



const styles = StyleSheet.create({
    container: {

    },
})
