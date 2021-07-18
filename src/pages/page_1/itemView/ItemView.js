import React from 'react'
import { View, ViewStyle, TouchableOpacity, StyleSheet, } from 'react-native'
import { GetEventsByPageResM, } from '../../../models/responceModels'
import c from '../../../color/colors'
import t from '../../../translator/translator'

import { MyText, } from '../../../components/texts'


type Props = {
    containerViewStyle: ViewStyle,
    item: GetEventsByPageResM,
    onPress: () => void,
}


export default ItemView = (props: Props) =>
{
    return (
        <TouchableOpacity
            style = { [styles.container, props.containerViewStyle] }
            onPress = { props.onPress }
        >
            <View style={ styles.repoNameView }>
                <MyText style={ styles.repoNameText }>{ t().Repo_name() }: </MyText>
                <MyText style={ styles.repoNameText } numberOfLines={ 1 }>{ props.item?.repo.name }</MyText>
            </View>
            <View style={ styles.repoNameView }>
                <MyText style={ styles.repoNameText }>{ t().Repo_url() }: </MyText>
                <MyText
                    style = { styles.repoNameText }
                    numberOfLines = { 1 }
                    ellipsizeMode = 'tail'
                    >{ props.item?.repo.url }</MyText>
            </View>
            <View style={ styles.repoNameView }>
                <MyText style={ styles.repoNameText }>{ t().Event_name() }: </MyText>
                <MyText style={ styles.repoNameText }>{ props.item?.type }</MyText>
            </View>
        </TouchableOpacity>
    )
}
ItemView.defaultProps = {

}



const styles = StyleSheet.create({
    container: {

    },

    repoNameView: {
        marginTop: 10,
        flexDirection: 'row',
    },
    repoNameText: {
        fontSize: 20,
        color: c().main_white,
    },
})
