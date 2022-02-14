import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardImg1: {
        position: 'absolute',
        zIndex: 2,
        bottom: 30,
    },
    logoView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 75,
    },
    wrapText: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        paddingBottom: 100,
        marginTop: 40,
    },
    title: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    description: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
        marginVertical: 30,
    },
    button: {
        backgroundColor: '#fff',
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 100,
    },
    textButton: {
        fontSize: 16,
        fontWeight: '700',
    },
});

export default styles;