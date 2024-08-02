import React from "react";
import { TouchableOpacity , StyleSheet, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


export default function ButtonConfirm(){
    return <TouchableOpacity  style={styles.button} >
        <LinearGradient
        colors={['#F58B3F', '#F39D36', '#F1AE2C']}
        start={{ x: 0, y: 0 }} 
        end={{ x: 1, y: 0 }}
        style={styles.gradient}>
        <Text style={styles.btnText}>Confirm</Text>
      </LinearGradient>
    </TouchableOpacity >
    
}

const styles = StyleSheet.create({
    button:{
        height: 38,
        width: "100%",
    },
    gradient:{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12
    },
    btnText:{
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold"
    }
})