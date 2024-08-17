import { StyleSheet } from 'react-native';
import colors from './colors';

const stylesHomeCloud = StyleSheet.create({
    container:{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginTop: -24
    },
    lottie:{
        height: '52%', 
        width: '60%',
    },
    containerTexte:{
        position: 'absolute',
        marginTop: '40%'
    },
    tempTexte:{
        textAlign: 'center',
        fontSize: 54,
        fontWeight: '900',
        color: colors.primaryColor
    },
    feelTexte:{
        color: colors.primaryColor,
        fontSize: 17,
        fontWeight: '200'
    }
});

export default stylesHomeCloud;