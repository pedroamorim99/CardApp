import React from 'react'
import { Text, View, ImageBackground, Image } from 'react-native'
import styles from './style'

export default function Card() {
    return (
        <ImageBackground
            style={styles.card}
            source={require('../../assets/card_visa_bg.png')}
        >
            <View>
                <Image source={require('../../assets/card_icon.png')} />
            </View>
            <View style={styles.cardNumber} >
                <Text style={styles.cardNumberText}>1234 5678 8765 4321</Text>
            </View>
            <View style={styles.cardFooter} >
                <View>
                    <Text style={styles.clientName}>CLIENT</Text>
                    <Text style={styles.Name}>MARK S C REYNOLDS</Text>
                </View>
                <Image source={require('../../assets/visa_text.png')} />
            </View>
        </ImageBackground>
    )
}



