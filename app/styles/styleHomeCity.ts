import { StyleSheet } from "react-native";
import colors from "./colors";

const stylesHomeCity = StyleSheet.create({
    city:{
        textAlign: 'center',
        fontSize: 38,
        fontWeight: 'bold',
        color: colors.primaryColor
    },
    country:{
        textAlign: 'center',
        fontSize: 16,
        opacity: 0.5,
        color: colors.primaryColor
    },
    conatainerSentences:{
        width: '100%',
        borderColor: '#CBD8EF',
        borderRadius: 16,
        borderWidth: 1,
        padding: 16,
        backgroundColor: '#E0EEFF'
    },
    sentences:{
        textAlign: 'center',
        color: colors.primaryColor,
        fontSize: 16,
        lineHeight: 20
    }
})

export default stylesHomeCity