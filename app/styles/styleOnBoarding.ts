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
        backButton:{
          position: 'absolute',
          top: 50,
          left: 20
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
          color: colors.flashColor
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
          borderColor: colors.flashColor
        },
        textBtn:{
          color: colors.flashColor,
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
          color: colors.flashColor,
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
          borderColor: colors.borderInput,
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
        // SECTION onBoardingName && password
        containerName:{
          backgroundColor: '#FFF',
          position: 'absolute',
          bottom: 0,
          height: '65%',
          width: '100%',
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          paddingHorizontal: 32,
          paddingBottom: 32,
          display: 'flex',
          alignItems: 'center',
        },
        containerTextName:{
          marginTop: '20%',
          width: '100%',
          display: 'flex',
          borderBottomWidth: 1,
          borderBottomColor: colors.flashColor,
          borderBottomLeftRadius: 100,
          borderBottomRightRadius: 100,
          paddingBottom: 12
        },
        textNameTitle:{
          color: colors.primaryColor,
          fontSize: 32,
          fontWeight: '800',
          textAlign: 'center'
        },
        textName:{
          color: colors.primaryColor,
          fontSize: 18,
          fontWeight: 'regular'
        },
        containerInput:{
          height: 80,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginTop: 56
        },
        containerInputBottom:{
          height: 80,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginTop: 10,
          paddingTop: 24,
        },
        inputName:{
          height: 48,
          width: '100%',
          borderColor: colors.borderInput,
          borderWidth: 1,
          borderRadius: 8,
          paddingLeft: 12,
          fontSize: 18,
          marginVertical: 8
        },
        containerButton:{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          position: 'absolute',
          bottom: 50
        },
        iconPassword:{
          position: 'absolute',
          top: 38,
          right: 12
        },
        iconPasswordBottom:{
          position: 'absolute',
          top: 50,
          right: 12
        },
        errorPassword:{
          position: 'absolute',
          bottom: '30%',
          color: colors.flashColor,
          fontSize: 15,
          fontWeight: '700'
        },
        // SECTION onBoardingCity        
        containerTextCity:{
          marginTop: '20%',
          width: '100%',
          display: 'flex',
          marginBottom: 16,
          borderBottomWidth: 1,
          borderBottomColor: colors.flashColor,
          borderBottomLeftRadius: 100,
          borderBottomRightRadius: 100,
          paddingBottom: 12
        },
        containerButtonCity:{
          width: '100%',
          position: 'absolute',
          bottom: 50
        },
        searchIcon:{
          position: 'absolute',
          left: 8          
        },
        inputCity:{
          height: 48,
          width: '100%',
          borderColor: colors.borderInput,
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
          color: colors.flashColor,
          fontSize: 16,
          fontWeight: '700',
          textAlign: 'center',
          
        }
})

export default stylesOnBoarding;