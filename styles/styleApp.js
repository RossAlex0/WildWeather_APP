import { StyleSheet } from "react-native";

const stylesApp = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#D5E8FF',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
          },
          txt:{
            color: '#F4953A',
            fontSize: 16,
            padding: 16,
            borderWidth: 2,
            borderColor: '#F4953A',
            borderRadius: 16,
          },
          input: {
            borderWidth:2,
            borderColor: '#F4953A',
            borderRadius: 16,
            padding: 8
          },
          title:{
            position: 'absolute',
            top: 60,
            color: '#F4953A',
            fontSize: 16,
            padding: 16,
            borderWidth: 2,
            borderColor: '#F4953A',
            borderRadius: 16,
          }
    },
)

export default stylesApp;