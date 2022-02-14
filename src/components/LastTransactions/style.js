import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    Title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 75,
        marginTop: 12,
    },
    Container: {
        marginTop: 12,
    },
    Items: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 22,
    },
    Icons: {
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
        marginLeft: 11,
    },
    itemBody: {
        flex: 1,
        paddingLeft: 14,
    },

    type: {
        fontWeight: '500',
        fontSize: 16,
    },

    date: {
        marginTop: 5,
    },

    payment: {
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 12,
    },
});

export default styles;