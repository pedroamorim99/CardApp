import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 24,
    },
    User: {
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 11,
    },
    Header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Card: {
        paddingHorizontal: 40,
    },
});

export default styles;