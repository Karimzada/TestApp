import React from 'react'
import { KeyboardAvoidingView, StatusBar, Platform, StyleSheet, } from 'react-native'
import c from '../../color/colors'


type Prpos = {
    children: React.ReactNode,  // Default null
    backgroundColor: string,  // Default c().d_background
    statusBarColor: string,  // Default c().d_header
}


export default MainPageViewer = (props: Prpos) => (
    <>
        <StatusBar
            barStyle = 'light-content'
            backgroundColor = { props.statusBarColor }
        />
        <KeyboardAvoidingView
            style = { [styles.container, { backgroundColor: props.backgroundColor }] }
            behavior = { Platform.OS == 'ios' ? 'padding' : null }
        >
            { props.children }
        </KeyboardAvoidingView>
    </>   
)
MainPageViewer.defaultProps = {
    children: null,
    backgroundColor: c().d_background,
    statusBarColor: c().d_header,
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
