import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 120,
        marginTop: 11,
    },
    list: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
    },
    icons: {
        padding: 10,
        backgroundColor: 'white',
        width: 60,
        height: 60,
        shadowColor: '#000',
        shadowOffset: { height: 10, width: 2 },
        shadowOpacity: 0.7,
        shadowRadius: 80,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    items: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemText: {
        marginTop: 10,
        fontWeight: 'bold',
    },
});

export default styles;