import { StyleSheet } from "react-native";
import colors from "./colors";

const stylesHomeCarousel = StyleSheet.create({
    container:{
        flex: 1,
        marginBottom: 36
    },
    slide: {
        height: 144,
        width: 84,
        borderWidth: 1,
        borderRadius: 48,
        borderColor: colors.secondaryColor,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginRight: 16, 
        paddingTop: 4,
        paddingBottom: 4,
        backgroundColor: '#FFF',
    },
    hours:{
        color: colors.primaryColor,
        fontWeight: 'bold',
        fontSize: 16
    },
    lottie:{
        height: '50%',
        width: '80%'
    },
    temperature:{
        color: colors.primaryColor,
        fontWeight: 'bold',
        fontSize: 20
    },
    slideVerso: {
        height: 144,
        width: 84,
        borderWidth: 1,
        borderRadius: 48,
        borderColor: colors.primaryColor,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 16, 
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: '#FFF',
    },
    statVerso:{
        height: 'auto',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleStat:{
        fontSize: 12,
        fontWeight: '200',
        color: colors.primaryColor
    },
    dataStat:{
        fontSize: 14.5,
        fontWeight: 'bold',
        color: colors.primaryColor
    }
});

export default stylesHomeCarousel;