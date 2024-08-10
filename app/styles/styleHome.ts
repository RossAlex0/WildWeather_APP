import { StyleSheet } from "react-native";
import colors from "./colors";

const stylesHome = StyleSheet.create({
    container:{
        height: '100%',
        width: '100%',
        backgroundColor: "#FFF",
        display: 'flex',
        gap: 24,
        paddingTop: 40,
        paddingBottom: 40,
        paddingLeft: 28,
        paddingRight: 28
    },
    header:{
        display: 'flex',
        width: '100%',
        height: '5%',
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTxt:{
        fontSize: 26,
        fontWeight: 'bold',
        color: colors.primaryColor
    },
    headerBtn:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap: 28,

    },
    headerImg:{
        height: 28,
        width: 32,
        overflow: 'visible'
    },
    containerInput:{
        width: '100%'
    },
    input:{
        height: 48,
        width: '100%',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#E4E4E4',
        padding: 8,
        backgroundColor: '#FFF',
        fontSize: 16,
        paddingLeft: 48
    },
    searchIcon:{
        position: 'absolute',
        left: 10,
        top: 8,
        zIndex: 1,        
      },
})

export default stylesHome;