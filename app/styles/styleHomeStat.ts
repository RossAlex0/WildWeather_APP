import { StyleSheet } from 'react-native';
import colors from './colors';

const stylesHomeStat = StyleSheet.create({
    container:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 8
    },
    statContain:{
        height: 32,
        width: '50%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 12,
        paddingLeft: 12,
    },
    statTexteStart:{
        fontSize: 14.5,
        color: colors.primaryColor
    },
    statTexteEnd:{
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.primaryColor
    },
    borderRight:{
        borderRightWidth: 1,
        borderColor: '#D5E8FF'
    },
    borderBottomLeft:{
        borderBottomWidth: 1,
        borderColor: '#D5E8FF',
        borderBottomLeftRadius: 24
    },
    borderBottomRight:{
        borderBottomWidth: 1,
        borderColor: '#D5E8FF',
        borderBottomRightRadius: 24
    },
});

export default stylesHomeStat;