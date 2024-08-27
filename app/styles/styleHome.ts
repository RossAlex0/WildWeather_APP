import { StyleSheet } from "react-native";
import colors from "./colors";

const stylesHome = StyleSheet.create({
    container:{
        width: '100%',
        display: 'flex',
        paddingTop: 40,
        paddingBottom: 40,
        paddingLeft: 28,
        paddingRight: 28
    },
    header:{
        display: 'flex',
        marginTop: 12,
        flexDirection: 'column',
        marginBottom: 16,
    },
    headerTxt:{
        fontSize: 26,
        fontWeight: 'bold',
        color: colors.primaryColor,
        textAlign: 'center'
    },
    headerLine:{
        width: '70%',
        borderTopWidth: 1,
        borderTopColor: colors.flashColor,
        opacity: 0.5,
        marginTop: 16,
        marginHorizontal: 'auto'
    },
    containerInput:{
        width: '100%',
        marginBottom: 16
    },
    input:{
        height: 48,
        width: '100%',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: colors.borderInput,
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
      containerError:{
        height: 1200,
        marginTop: 90
      },
      containerTextError:{
        height: 'auto',
        width: '100%',
        padding: 24
      },
      iconError:{
        textAlign: 'center',
        fontSize: 72,
        fontWeight: '900',
        color: colors.flashColor,
        marginBottom: 24,
        
      },
      textError:{
        textAlign: 'center',
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: '800',
        color: colors.primaryColor
      }
})

export default stylesHome;