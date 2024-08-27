import { StyleSheet } from "react-native";
import colors from "./colors";

const stylesSettings = StyleSheet.create({
    container:{
        backgroundColor: '#F3F7FD',
        height: '100%',
        flex: 1,
        padding: 28,
    },
    containerTitleNav:{
        marginTop: 64,
    },
    containTitleNav:{
        width: '100%',
        height: 64,
        backgroundColor: '#FFF',
        paddingHorizontal: 12,
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        marginBottom: 24,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: colors.secondaryColor
    },
    imageTitleNav:{
        paddingLeft: 24,
        position: 'absolute',
        right: 12
    },
    textTitleNav:{
        fontSize: 18,
        fontWeight: '700',
        color: colors.primaryColor,
        marginLeft: 24
    },
    buttonLogout:{
        width: '35%',
        height: 48,
        marginHorizontal: 'auto',
        marginTop: 40
    },
    containerCopy:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: -16
    },
    textCopy:{
        fontSize: 14,
        fontWeight: '600',
        color: colors.primaryColor
    }
});

export default stylesSettings;