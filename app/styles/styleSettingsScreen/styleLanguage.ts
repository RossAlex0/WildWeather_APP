import { StyleSheet } from "react-native";
import colors from "../colors";

const stylesLanguage = StyleSheet.create({
    container:{
        padding: 28,
        backgroundColor: '#F3F7FD',
        height: '100%'
    },
    checkboxSection:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 24
    },
    checkbox:{
        height: 24,
        width: 24,
        marginRight: 16,
        borderRadius: 100,
        borderColor: colors.primaryColor
    },
    labelCheckbox:{
        fontSize: 20,
        color: colors.primaryColor,
        fontWeight: '600'
    }
});

export default stylesLanguage;