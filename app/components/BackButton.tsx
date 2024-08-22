
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function BackButton (){
    
    const navigation = useNavigation();

    return (
        <Pressable onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={32} color='#0E0C5E' style={{ marginLeft: 10 }} />
        </Pressable>
    );
};