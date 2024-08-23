import { Text, View} from "react-native";
import { useContext } from "react";

import UserContext from "../services/context/UserContext";

import stylesHome from "../styles/styleHome";

export default function HomeHeader(){

    const { userName } = useContext(UserContext)

    return (
        <View style={stylesHome.header}>
            <Text style={stylesHome.headerTxt}>Hi {userName} !</Text>
        </View>
    )
}