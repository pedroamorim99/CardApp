import React from 'react'
import { StyleSheet } from 'react-native'
import Navigator from './src/navigation';

export default function App() {
    return (
        <Navigator />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})