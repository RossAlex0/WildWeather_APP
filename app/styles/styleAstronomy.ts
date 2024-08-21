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
        paddingHorizontal: 8
    },
    containSun:{
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageSun:{
        height: 50,
        width: 50,
        marginRight: 12
    },
    containerTextSun:{
        justifyContent: 'center'
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
        
    }
});

export default stylesAstronomy;