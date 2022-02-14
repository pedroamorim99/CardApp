import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context'
import Card from '../../components/Card/Card';
import ServicesList from '../../components/ServicesList.js/ServicesList';
import LastTransactions from '../../components/LastTransactions/LastTransactions';


export default function Home() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={styles.Container}>
                <View style={styles.Header}>
                    <View>
                        <Text style={{ marginLeft: 11, fontWeight: 'bold' }}>Hello,</Text>
                        <Text style={styles.User}>Mark</Text>
                    </View>
                    <View style={{ marginRight: 10, marginTop: 11, }} >
                        <Image source={require('../../assets/ic_notif.png')} />
                    </View>
                </View>
                <View style={styles.Card} >
                    <Card />
                </View>
                <ServicesList />
                <LastTransactions />
            </ScrollView>
        </SafeAreaView >
    );
}


