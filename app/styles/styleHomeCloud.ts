import { StyleSheet } from 'react-native';
import colors from './colors';

const stylesHomeCloud = StyleSheet.create({
    container:{
        marginBottom: 40,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    lottie:{
        height: 208, 
        width: '100%',
    },
    containerTexte:{
        position: 'absolute',
        marginTop: '34%',
    },
    tempTexte:{
        textAlign: 'center',
        fontSize: 62,
        fontWeight: '900',
        color: colors.primaryColor,
        marginLeft: 12
    },
    feelTexte:{
        color: colors.primaryColor,
        fontSize: 18,
        fontWeight: '200',
        marginLeft: 8,
        marginTop: -8
    }
});

export default stylesHomeCloud;