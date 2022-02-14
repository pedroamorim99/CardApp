import { StyleSheet, Dimensions } from 'react-native'

const width_screen = Dimensions.get('window').width;
const card_item = width_screen - 30 * 2;
const card_size = { width: 325, height: 196, };


const styles = StyleSheet.create({
    card: {
        width: card_item,
        height: (card_item * card_size.height) / card_size.width,
        padding: 24,
        marginTop: 18,
        marginLeft: -35,
    },
    cardNumber: {
        flex: 1,
        justifyContent: 'center'
    },
    cardNumberText: {
        color: 'white',
        fontSize: 22,
        fontWeight: '100',
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    clientName: { color: 'rgba(255,255,255,0.4)' },
    Name: { color: 'white', fontSize: 14 },
});

export default styles;