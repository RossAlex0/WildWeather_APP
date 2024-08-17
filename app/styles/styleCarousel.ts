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
    }
});

export default stylesHomeCarousel;