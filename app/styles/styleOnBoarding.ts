import { StyleSheet } from 'react-native';
import colors from './colors';

const stylesOnBoarding = StyleSheet.create({
        global:{   
          backgroundColor: '#D5E8FF',
          height: '100%',
          width: '100%'
        },
        container:{
            backgroundColor: '#FFF',
            position: 'absolute',
            bottom: 0,
            height: '65%',
            width: '100%',
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            padding: 32,
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            gap: 16
        },
        containerText:{
          height: '80%',
          width: '100%',
          display: 'flex',
          gap: 20
        },
        image:{
          height: 160,
          width: 160,
          marginLeft: -16
        },
        title:{
          fontSize: 32,
          fontWeight: 'bold',
          color: colors.secondaryColor
        },
        titleSecondary:{
          width: '100%',
          fontSize: 32,
          fontWeight: 'bold',
          color: colors.primaryColor
        },
        texte:{
          width: '85%',
          color: colors.primaryColor,
          fontSize: 24
        },
        // SECTION onBoardingName
        containerName:{
          backgroundColor: '#FFF',
          position: 'absolute',
          bottom: 0,
          height: '65%',
          width: '100%',
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          padding: 32,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        containerTextName:{
          marginTop: '20%',
          width: '100%',
          display: 'flex',
          marginBottom: 16,
          gap: 8
        },
        textNameTitle:{
          color: colors.primaryColor,
          fontSize: 32,
          fontWeight: 'bold'
        },
        textName:{
          color: colors.primaryColor,
          fontSize: 18,
          fontWeight: 'regular'
        },
        containerInput:{
          height: 48,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 120
        },
        inputName:{
          height: 48,
          width: '100%',
          borderColor: '#E4E4E4',
          borderWidth: 1,
          borderRadius: 8,
          paddingLeft: 48,
          fontSize: 18
        },
        containerButton:{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 24
        },
        buttonName:{
          width: '100%'
        },
        buttonNameSkip:{
          height: 48,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        // SECTION onBoardingCity        
        containerTextCity:{
          marginTop: '20%',
          width: '100%',
          display: 'flex',
          marginBottom: 16,
        },
        containerButtonCity:{
          width: '100%',
          marginBottom: 72
        },
        searchIcon:{
          position: 'absolute',
          left: 8          
        }
})

export default stylesOnBoarding;