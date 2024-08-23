import { StyleSheet } from "react-native";
import colors from "../colors";

const stylesProfile = StyleSheet.create({
    container:{
        padding: 28,
        backgroundColor: '#F3F7FD',
        borderTopWidth: 1,
        borderTopColor: colors.secondaryColor,
        flex: 1,
    },
    containerInput:{
        width: '100%',
        borderWidth: 1,
        borderColor: colors.primaryColor,
        borderRadius: 12,
        padding: 12,
        marginVertical: '4%',
        backgroundColor: '#FFF'
    },
    containerInputClose:{
        width: '100%',
        borderWidth: 1,
        borderColor: colors.primaryColor,
        borderRadius: 12,
        padding: 12,
        marginVertical: '4%',
        backgroundColor: '#FFF',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    label:{
        fontSize: 17,
        color: colors.primaryColor,
        fontWeight: '500',
    },
    input:{
        height: 48,
        width: '100%',
        borderColor: '#E4E4E4',
        backgroundColor: '#F3F7FD',
        borderWidth: 1,
        borderRadius: 12,
        paddingLeft: 12,
        marginTop: 12,
        fontSize: 16
    },
    btnConfirm:{
        height: 40,
        width: '90%',
        marginTop: 16,
        marginHorizontal: 'auto'
    }
});

export default stylesProfile;