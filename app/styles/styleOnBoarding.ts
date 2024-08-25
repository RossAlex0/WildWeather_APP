import { StyleSheet } from 'react-native';
import colors from './colors';

const stylesOnBoarding = StyleSheet.create({
        global:{   
          backgroundColor: colors.secondaryColor,
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
          color: colors.orangeColor
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
        sectionbutton:{
          width: '100%',
          marginTop: -16,
          marginBottom: 8
        },
        button:{
          height: 48,
          width: '100%'
        },
        buttonWhite:{
          height: 48,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 12,
          borderWidth: 1,
          borderColor: colors.orangeColor
        },
        textBtn:{
          color: colors.orangeColor,
          fontSize: 20,
          fontWeight: "bold"
        },
        // SECTION OnboardingLOG
        containerTextLog:{
          width: '100%',
          display: 'flex',
          marginBottom: '30%'
        },
        titleLog:{
          fontSize: 32,
          fontWeight: 'bold',
          color: colors.orangeColor,
          marginTop: -8,
          marginBottom: 8
        },
        sectionInput:{
          width: '100%',
          marginTop: -72,
          marginBottom: 8
        },
        inputLog:{
          height: 48,
          width: '100%',
          borderWidth: 1,
          borderRadius: 8,
          borderColor: '#E4E4E4',
          padding: 8,
          backgroundColor: '#FFF',
          fontSize: 16,
          paddingLeft: 16,
          marginTop: 4,
          marginBottom: 16
        },
        buttonLog:{
          height: 48,
          width: '100%',
          marginTop: 16
        },
        labelLog:{
          fontSize: 16,
          color: colors.primaryColor,
          fontWeight: '600'
        },
        containerTxtSign:{
          height: 40,
          marginTop: -8,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        },
        textSignUp:{
          color: colors.primaryColor,
          fontSize: 15
        },
        textSignNav:{
          color: colors.primaryColor,
          textDecorationLine: 'underline',
          paddingLeft: 4,
          fontSize: 15
        },
        btnSignUp:{
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
          paddingLeft: 12,
          fontSize: 18
        },
        containerButton:{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 24
        },
        buttonNameSkip:{
          height: 48,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        buttonNameSkipPressed:{
          height: 48,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: colors.primaryColor,
          borderRadius: 12,
          borderWidth: 1
        },
        buttonSkipText:{
          fontSize: 20,
          fontWeight: "bold",
          color: colors.primaryColor
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
          marginBottom: 72,
        },
        searchIcon:{
          position: 'absolute',
          left: 8          
        },
        inputCity:{
          height: 48,
          width: '100%',
          borderColor: '#E4E4E4',
          borderWidth: 1,
          borderRadius: 8,
          paddingLeft: 48,
          fontSize: 18
        },
        warningText:{
          width: '100%',
          position: 'absolute',
          padding: 8,
          marginTop: 56,
          color: colors.orangeColor,
          fontSize: 16,
          fontWeight: '700',
          textAlign: 'center',
          
        }
})

export default stylesOnBoarding;