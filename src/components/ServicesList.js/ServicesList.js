import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './style';

const listService = [
    {
        Name: 'Wallet',
        Icon: require('../../assets/ic_wallet.png'),
    },
    {
        Name: 'Transfer',
        Icon: require('../../assets/ic_transfer.png'),
    },
    {
        Name: 'Pay',
        Icon: require('../../assets/ic_pay.png'),
    },
    {
        Name: 'Top Up',
        Icon: require('../../assets/ic_topup.png'),
    },
];

const ServiceItem = item => {
    return (
        <View key={item.Name} style={styles.items}>
            <View style={styles.icons}>
                <Image source={item.Icon} />
            </View>
            <Text style={styles.itemText}>{item.Name}</Text>
        </View>
    );
};

export default function ServicesList() {
    return (
        <View>
            <Text style={styles.title}>Services</Text>
            <View style={styles.list}>{listService.map(ServiceItem)}</View>
        </View>
    );
};


