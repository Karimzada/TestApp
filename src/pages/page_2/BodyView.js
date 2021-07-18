import React from 'react'
import { View, ViewStyle, StyleSheet, } from 'react-native'
import { GetEventsByPageResM, } from '../../models/responceModels'
import c from '../../color/colors'
import t from '../../translator/translator'

import { MyText, } from '../../components/texts'


type Props = {
    item: GetEventsByPageResM,
}


export default BodyView = (props: Props) =>
{
    return (
        <View style={ styles.container }>

            <View style={ styles.lineView }>
                <MyText style={ styles.labelText }>{ t().Actor_name() }:</MyText>
                <MyText style={ styles.valueText } numberOfLines = { 1 }>{ props.item?.actor.display_login }</MyText>
            </View>

            <View style={ styles.lineView }>
                <MyText style={ styles.labelText }>{ t().Repo_name() }:</MyText>
                <MyText style={ styles.valueText } numberOfLines = { 1 }>{ props.item?.repo.name }</MyText>
            </View>

            <View style={ styles.lineView }>
                <MyText style={ styles.labelText }>{ t().Created_date() }:</MyText>
                <MyText style={ styles.valueText } numberOfLines = { 1 }>{ props.item?.created_at }</MyText>
            </View>

            <View style={ styles.lineView }>
                <MyText style={ styles.labelText }>{ t().Event_type() }:</MyText>
                <MyText style={ styles.valueText } numberOfLines = { 1 }>{ props.item?.type }</MyText>
            </View>

        </View>
    )
}
BodyView.defaultProps = {

}



const styles = StyleSheet.create({
    container: {
        marginTop: 16,
    },

    lineView: {
        marginTop: 20,
        flexDirection: 'row',
    },
    labelText: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        color: c().main_white,
    },
    valueText: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        color: c().main_white,
        textAlign: 'right',
    },
})
