import { StyleSheet } from "react-native";
import colors from "./colors";

const stylesAstronomy = StyleSheet.create({
    container:{
        backgroundColor: '#F3F7FD',
        height: '100%',
        flex: 1,
        padding: 28,
        borderTopColor: colors.secondaryColor,
        borderTopWidth: 1
    },
    containerSun:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 8,
    },
    borderSun:{
        height: 1,
        width: '21%',
        borderWidth: 1,
        borderColor: colors.secondaryColor,
        borderStyle: 'dashed',
    },
    containSun:{
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageSun:{
        height: 50,
        width: 50,
        marginRight: 12
    },
    containerTextSun:{
        alignItems: 'center'
    },
    textTimeSun:{
        color: colors.primaryColor,
        fontSize: 16,
        fontWeight: '900'
    },
    textSun:{
        color: colors.primaryColor,
        fontSize: 16
    },
    containerMoon:{
        height: 80,
        width: '100%',
        marginTop: 46,
        backgroundColor: '#FFF',
        borderColor: '#E9E9F1',
        borderWidth: 1,
        borderRadius: 12,
        overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerTextMoon:{
        width: '60%',
        paddingVertical: 4,
        paddingHorizontal: 16
    },
    textPhase:{
        fontWeight: '900',
        fontSize: 18,
        marginBottom: 4,
        color: colors.primaryColor
    },
    textDate:{
        color: colors.primaryColor
    },
    textHour:{
        color: colors.primaryColor
    },
    imageMoon:{
        height: 104,
        width: 160,
        marginTop: -12
    }
});

export default stylesAstronomy;