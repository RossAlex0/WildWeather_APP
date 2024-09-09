import { View } from "react-native";
import CloudAnimeLeft from "./CloudAnimeLeft";
import CloudAnimeRight from "./CloudAnimeRight";

export default function CloudAnimate() {
  return (
    <View style={{ height: "20%"}}>
      <CloudAnimeRight />
      <CloudAnimeLeft />
    </View>
  );
}