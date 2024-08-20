import { StyleSheet } from "react-native";
import colors from "./colors";

const stylesHomeChart = StyleSheet.create({
    container:{
        backgroundColor: '#F1F8FF', 
        paddingVertical: 16, 
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: colors.secondaryColor,
        borderRadius: 12,
        marginBottom: 12 
    },
    title:{
        fontSize: 22,
        fontWeight: '800',
        color: colors.primaryColor,
        opacity: 0.9,
        marginBottom: 8
    },
});

export default stylesHomeChart;