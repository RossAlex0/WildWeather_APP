import { KeyboardAvoidingView, ScrollView } from "react-native";
import { useState } from "react";

import ConfirmBox from "../../components/ConfirmBox";
import EditName from "../../components/profile/EditName";

import stylesProfile from "../../styles/styleSettingsScreen/styleProfile";
import EditMail from "../../components/profile/EditMail";
import EditPassword from "../../components/profile/EditPassword";

export default function Profile() {
  const [isOpen, setIsOpen] = useState("");
  const [textConfirm, setTextConfirm] = useState("");

  return (
    <KeyboardAvoidingView style={stylesProfile.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <EditName
          open={{ isOpen, setIsOpen }}
          setTextConfirm={setTextConfirm}
        />

        <EditMail
          open={{ isOpen, setIsOpen }}
          setTextConfirm={setTextConfirm}
        />

        <EditPassword
          open={{ isOpen, setIsOpen }}
          setTextConfirm={setTextConfirm}
        />
      </ScrollView>
      {textConfirm.length > 0 && (
        <ConfirmBox text={`Your ${textConfirm} has been changed!`} />
      )}
    </KeyboardAvoidingView>
  );
}
