import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import styles from './style'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Welcome() {
    const insets = useSafeAreaInsets();
    const [layouts, setLayouts] = useState(null);
    const navigation = useNavigation();

    return (
        <ImageBackground
            source={require('../../assets/bg_welcome.png')}
            style={[styles.container, { paddingTop: insets.top }]}
        >
            <View>
                <View style={styles.logoView} >
                    <View onLayout={({ nativeEvent }) => setLayouts(nativeEvent?.layout)} >
                        {layouts && (
                            <Image
                                source={require('../../assets/card_welcome_1.png')}
                                style={[styles.cardImg1, { width: layouts.width, height: layouts.height },
                                ]}
                                resizeMode='contain'
                            />
                        )}
                        <Image source={require('../../assets/card_welcome_2.png')} />
                    </View>
                </View>
                <View style={styles.wrapText} >
                    <Text style={styles.title}>Payments anywhere and anytime easily </Text>
                    <Text style={styles.description}>
                        {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
                    </Text>
                    <View>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')} >
                            <Text style={styles.textButton}>Get Started</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}
