import { StyleSheet } from "react-native";
import colors from "../colors";

const stylesLocalisation = StyleSheet.create({
    container:{
        paddingTop: 28,
        backgroundColor: '#F3F7FD',
        borderTopWidth: 1,
        borderTopColor: colors.secondaryColor,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    sectionText:{
        width: '100%',
        paddingHorizontal: 28,
    },
    text:{
        color: colors.primaryColor,
        fontSize: 17
    },
    sectionInput:{
        width: '100%',
        paddingHorizontal: 28,
    },
    searchIcon:{
        position: 'absolute',
        left: 38,
        top: 8,
        zIndex: 1, 
    },
    input:{
        height: 48,
        width: '100%',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#E4E4E4',
        padding: 8,
        backgroundColor: '#FFF',
        fontSize: 16,
        paddingLeft: 48
    },
    geoloc:{
        width: '100%',
        flexDirection: 'row',
        padding: 8,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E4E4E4',
        borderRadius: 8,
        marginTop: 12
    },
    textGeoloc:{
        fontSize: 16,
        color: colors.primaryColor,
        marginLeft: 8
    },
    sectionMap:{
        width: '100%',
        height: '70%',
        backgroundColor: '#FFF',
        borderTopStartRadius: 64,
        borderTopEndRadius: 64,
        borderWidth: 1,
        borderColor: colors.secondaryColor,
        overflow: 'hidden'
    },
    map:{
        flex: 1,
    },
    calloutContainer:{
        padding: 16,
        backgroundColor: "rgba(213, 232, 255, 0.92)",
        borderRadius: 24,
        borderWidth: 1,
        borderColor: colors.primaryColor
    },
    calloutTitle:{
        textAlign: 'center',
        color: colors.primaryColor,
        fontWeight: '700'
    },
    calloutDescription:{
        textAlign: 'center',
        color: colors.primaryColor
    },
    calloutLine:{
        width: '50%',
        borderWidth: 0.5,
        borderColor: colors.primaryColor,
        marginHorizontal: 'auto',
        marginVertical: 4
    },
    confirm:{
        position: 'absolute',
        bottom: 40,
        width: '70%',
        height: 48
    }
});

export default stylesLocalisation;