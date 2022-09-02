import { StyleSheet, Dimensions, Platform } from "react-native";
import colors from '../../config/colors'

const window = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        borderBottomColor: colors.border,
        borderBottomWidth: Platform.OS === 'ios' ? StyleSheet.hairlineWidth : 0,
        marginTop: 15,
        flex: 1,
        flexDirection: 'row',
    },
    input: {
        marginRight: 40,
        marginLeft: 5,
        marginTop: 5,
        paddingTop: 20,
        paddingLeft: 10,
        paddingBottom: 20,
        backgroundColor: '#f9fafb',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        width: window.width,
        flex: 1
    },
    icon: {
        padding: 10,
        marginTop: 10,
    }
})