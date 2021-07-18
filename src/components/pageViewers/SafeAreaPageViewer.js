import React from 'react'
import { KeyboardAvoidingView, SafeAreaView, StatusBar, Platform, StyleSheet, } from 'react-native'
import c from '../../color/colors'


type Prpos = {
    children: React.ReactNode,  // Default null
    safeAreaColor: string,   // Default Colors.d_OverSafeArea
    backgroundColor: string,  // Default Colors.d_PageBackground
}


export default MainPageViewer = (props: Prpos) => (
    <>
        <StatusBar
            barStyle = 'light-content'
            backgroundColor = { c().d_header }
        />
        <SafeAreaView
            style = { [styles.container, { backgroundColor: props.safeAreaColor }] }
        >
            <KeyboardAvoidingView
                style = { [styles.container, { backgroundColor: props.backgroundColor }] }
                behavior = { Platform.OS == 'ios' ? 'padding' : null }
            >
                { props.children }
            </KeyboardAvoidingView>
        </SafeAreaView>
    </>   
)
MainPageViewer.defaultProps = {
    children: null,
    safeAreaColor: c().d_header,
    backgroundColor: c().d_header,
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
