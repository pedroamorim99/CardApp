import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './style'

const listTransations = [
    {
        Type: 'Spotify',
        Icon: require('../../assets/ic_spotify.png'),
        Date: 'Jun 12, 12:30',
        Payment: '+ $7',
    },
    {
        Type: 'Paypal',
        Icon: require('../../assets/ic_paypal.png'),
        Date: 'Jun 12, 12:30',
        Payment: '+ $15',
    },
    {
        Type: 'Dribble',
        Icon: require('../../assets/ic_dribble.png'),
        Date: 'Jun 12, 12:30',
        Payment: '+ $10',
    },
];

const TransactionItems = item => (
    <View key={item.Type} style={styles.Items}>
        <View style={styles.Icons}>
            <Image source={item.Icon} />
        </View>
        <View style={styles.itemBody}>
            <Text style={styles.type}>{item.Type}</Text>
            <Text style={styles.date}>{item.Date}</Text>
        </View>
        <View>
            <Text style={styles.payment}>{item.Payment}</Text>
        </View>
    </View>
);

export default function LastTransactions() {
    return (
        <View style={styles.Container}>
            <Text style={styles.Title}>Recent Transaction</Text>
            <View style={styles.List}>
                {listTransations.map(TransactionItems)}
            </View>
        </View>
    );
};

