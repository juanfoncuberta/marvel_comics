import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    buttonContainer: {
        backgroundColor: 'rgb(80,80,80)',
        padding: 20, alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 14,
    },
    buttonText: {
        fontWeight: '600',
        color: 'white'
    },
    label: {
        color: 'white',
        fontSize: 16,
        marginBottom: 10
    },
    textInput: {
        color: 'rgb(80,80,80)',
        fontSize: 18,
        borderWidth: 1,
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 10
    }
})